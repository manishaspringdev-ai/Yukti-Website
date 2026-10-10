import { db } from '../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import emailjs from '@emailjs/browser';

/**
 * Format Indian / International phone number for WhatsApp gateways
 */
export function formatWhatsAppNumber(phone = '') {
  let cleaned = phone.replace(/\D/g, '');
  if (cleaned.length === 10) {
    cleaned = '91' + cleaned;
  }
  return cleaned;
}

/**
 * Generates a pre-filled 1-click WhatsApp message URL
 */
export function getWhatsAppDirectUrl({ phone, message }) {
  const cleanPhone = formatWhatsAppNumber(phone);
  const text = encodeURIComponent(message || 'Hello, I have an enquiry about Yukti Software programs.');
  return `https://wa.me/${cleanPhone}?text=${text}`;
}

/**
 * Unified Lead & Enquiry Service for Yukti Software
 *
 * Automatically:
 * 1. Saves enquiry to Firebase Firestore (`enquiries` collection)
 * 2. Sends notification email to Admin (EmailJS)
 * 3. Sends confirmation auto-reply email to User (EmailJS)
 * 4. Sends automated WhatsApp message to User's phone number (Green-API / Gateway)
 *
 * @param {Object} data
 * @param {'contact' | 'course_enquiry' | 'software_development' | 'demo_booking' | 'career_apply'} [data.type]
 * @param {string} data.name - Submitter name
 * @param {string} data.email - Submitter email
 * @param {string} data.phone - Submitter phone number
 * @param {string} [data.course] - Interested course
 * @param {string} [data.service] - Interested service
 * @param {string} [data.message] - Message description
 * @param {string} [data.mode] - Training mode
 * @param {Object} [data.metadata] - Extra metadata
 */
export async function submitEnquiry(data = {}) {
  const enquiryPayload = {
    type: data.type || 'general_enquiry',
    name: (data.name || '').trim(),
    email: (data.email || '').trim(),
    phone: (data.phone || '').trim(),
    course: (data.course || '').trim(),
    service: (data.service || '').trim(),
    message: (data.message || '').trim(),
    mode: (data.mode || '').trim(),
    status: 'new',
    sourceUrl: typeof window !== 'undefined' ? window.location.href : '',
    submittedAt: new Date().toISOString(),
    ...(data.metadata || {})
  };

  let firestoreSaved = false;
  let adminEmailSent = false;
  let userEmailSent = false;
  let whatsappSent = false;
  let docId = null;

  // 1. Store to Firebase Firestore
  if (db) {
    try {
      const docRef = await addDoc(collection(db, 'enquiries'), {
        ...enquiryPayload,
        serverTimestamp: serverTimestamp()
      });
      docId = docRef.id;
      firestoreSaved = true;
      console.log('[Firebase] Enquiry saved successfully. Doc ID:', docId);
    } catch (err) {
      console.error('[Firebase] Failed to write enquiry to Firestore:', err);
    }
  } else {
    console.warn('[Firebase] Firestore not initialized (missing .env keys). Running in fallback mode.');
  }

  const formattedTime = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });

  // 2. EmailJS Notification (Admin + User Auto-Reply)
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const adminTemplateId = import.meta.env.VITE_EMAILJS_ADMIN_TEMPLATE_ID || import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const userTemplateId = import.meta.env.VITE_EMAILJS_USER_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  if (serviceId && publicKey) {
    // Admin Notification
    if (adminTemplateId) {
      try {
        const adminParams = {
          to_name: 'Yukti Software Admissions & Sales Team',
          from_name: enquiryPayload.name,
          from_email: enquiryPayload.email,
          reply_to: enquiryPayload.email,
          phone_number: enquiryPayload.phone,
          enquiry_type: enquiryPayload.type,
          course_interest: enquiryPayload.course || 'N/A',
          service_interest: enquiryPayload.service || 'N/A',
          training_mode: enquiryPayload.mode || 'N/A',
          message_content: enquiryPayload.message || 'No additional message provided.',
          submission_time: formattedTime,
          page_url: enquiryPayload.sourceUrl
        };
        await emailjs.send(serviceId, adminTemplateId, adminParams, publicKey);
        adminEmailSent = true;
        console.log('[EmailJS] Admin email notification sent.');
      } catch (err) {
        console.error('[EmailJS] Failed to send Admin email:', err);
      }
    }

    // User Auto-Reply
    if (enquiryPayload.email && userTemplateId) {
      try {
        const userParams = {
          to_name: enquiryPayload.name,
          to_email: enquiryPayload.email,
          recipient_email: enquiryPayload.email,
          user_name: enquiryPayload.name,
          user_email: enquiryPayload.email,
          phone_number: enquiryPayload.phone,
          course_interest: enquiryPayload.course || 'Requested Training Track',
          service_interest: enquiryPayload.service || 'Software Solutions',
          submission_time: formattedTime,
          company_name: 'Yukti Software',
          support_phone: '+91 95828 15419',
          support_email: 'contact@yuktisoftware.com',
          message_content: enquiryPayload.message || 'We have received your enquiry and our senior team will connect with you shortly.'
        };
        await emailjs.send(serviceId, userTemplateId, userParams, publicKey);
        userEmailSent = true;
        console.log('[EmailJS] User confirmation auto-reply email sent to:', enquiryPayload.email);
      } catch (err) {
        console.error('[EmailJS] Failed to send User auto-reply email:', err);
      }
    }
  }

  // 3. Automated WhatsApp Dispatch (Free Gateway e.g. Green-API)
  const greenApiId = import.meta.env.VITE_GREEN_API_ID_INSTANCE;
  const greenApiToken = import.meta.env.VITE_GREEN_API_TOKEN_INSTANCE;

  if (greenApiId && greenApiToken && enquiryPayload.phone) {
    try {
      const cleanPhone = formatWhatsAppNumber(enquiryPayload.phone);
      const programName = enquiryPayload.course || enquiryPayload.service || 'Software Training Program';
      const whatsAppMessage = `Hello *${enquiryPayload.name || 'there'}*! 👋\n\nThank you for contacting *Yukti Software (Greater Noida)*.\n\nWe have received your enquiry for *${programName}*.\nOur senior career counselor / technical expert will connect with you within 15 minutes with syllabus & batch details.\n\n🌐 Website: https://yuktisoftware.com\n📞 Helpline: +91 95828 15419`;

      const response = await fetch(`https://api.green-api.com/waInstance${greenApiId}/sendMessage/${greenApiToken}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chatId: `${cleanPhone}@c.us`,
          message: whatsAppMessage
        })
      });

      if (response.ok) {
        whatsappSent = true;
        console.log('[WhatsApp] Auto-message sent successfully to:', cleanPhone);
      } else {
        console.warn('[WhatsApp] Green API returned non-200 response:', await response.text());
      }
    } catch (err) {
      console.error('[WhatsApp] Error dispatching WhatsApp auto-message:', err);
    }
  }

  return {
    success: true,
    firestoreSaved,
    adminEmailSent,
    userEmailSent,
    whatsappSent,
    docId,
    data: enquiryPayload
  };
}

/**
 * Fetches all inbound leads & enquiries for Admin Portal
 */
export async function getEnquiries() {
  if (!db) return [];
  try {
    const { getDocs, query, orderBy, limit } = await import('firebase/firestore');
    const q = query(collection(db, 'enquiries'), orderBy('serverTimestamp', 'desc'), limit(100));
    const snap = await getDocs(q);
    return snap.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  } catch (err) {
    try {
      const { getDocs } = await import('firebase/firestore');
      const snap = await getDocs(collection(db, 'enquiries'));
      return snap.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    } catch (e) {
      console.warn('[LeadService] Could not fetch enquiries:', e);
      return [];
    }
  }
}

