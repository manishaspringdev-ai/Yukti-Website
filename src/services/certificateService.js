import { db } from '../firebase';
import { collection, doc, getDoc, getDocs, setDoc, deleteDoc, serverTimestamp, query, orderBy } from 'firebase/firestore';

/**
 * Built-in Sample Verification Records for Demo & Initial Verification Testing
 */
export const SAMPLE_CERTIFICATES = {
  'YUK-2026-FS-101': {
    id: 'YUK-2026-FS-101',
    certId: 'YUK-2026-FS-101',
    studentName: 'Aarav Sharma',
    college: 'Galgotias University, Greater Noida',
    type: 'training_certificate',
    title: 'Java Full Stack Development & Microservices',
    duration: '6 Months (Jan 2026 – Jun 2026)',
    issueDate: '2026-06-30',
    grade: 'A+ (Exemplary Performance)',
    skills: 'Core & Advanced Java, Spring Boot 3, React.js, Hibernate, Microservices, Docker, AWS',
    projectTitle: 'Enterprise Multi-Vendor Cloud Architecture',
    instructor: 'Sanjay Sharma (Lead Enterprise Architect)',
    authorizedSignatory: 'Director of Academic Affairs',
    status: 'active',
    verificationSeal: 'Accredited by Yukti Software & Tech Council'
  },
  'YUK-2026-INT-202': {
    id: 'YUK-2026-INT-202',
    certId: 'YUK-2026-INT-202',
    studentName: 'Sneha Patel',
    college: 'Sharda University, Greater Noida',
    type: 'internship_certificate',
    title: 'Full Stack Web Engineering Internship',
    duration: '3 Months (Feb 2026 – Apr 2026)',
    issueDate: '2026-04-30',
    grade: 'Outstanding (Grade A)',
    skills: 'React.js, Node.js, Express, MongoDB, REST APIs, Git & CI/CD',
    projectTitle: 'Real-Time Client Dashboard & Lead Tracking Portal',
    instructor: 'Technical Project Lead',
    authorizedSignatory: 'Head of Engineering',
    status: 'active',
    verificationSeal: 'Verified Industrial Internship'
  },
  'YUK-2026-PY-303': {
    id: 'YUK-2026-PY-303',
    certId: 'YUK-2026-PY-303',
    studentName: 'Vikram Aditya',
    college: 'GL Bajaj Institute of Technology, Greater Noida',
    type: 'training_certificate',
    title: 'Python Core, Django & Data Analytics',
    duration: '4 Months (Mar 2026 – Jun 2026)',
    issueDate: '2026-06-25',
    grade: 'A (Distinction)',
    skills: 'Python 3, Django REST, NumPy, Pandas, Data Visualization, MySQL',
    projectTitle: 'Automated Financial Analytics & Predictive Models',
    instructor: 'Senior Python & AI Mentor',
    authorizedSignatory: 'Director of Academic Affairs',
    status: 'active',
    verificationSeal: 'Accredited Certification'
  }
};

/**
 * Verifies a certificate by Certificate ID or Roll Number
 * Checks Firebase Firestore first, then checks sample fallback data.
 */
export async function verifyCertificate(certificateId = '') {
  if (!certificateId) {
    return { success: false, message: 'Please provide a valid Certificate ID' };
  }

  const cleanId = certificateId.trim().toUpperCase();

  // 1. Try Firestore Lookup
  if (db) {
    try {
      // Direct doc lookup by ID
      const docRef = doc(db, 'certificates', cleanId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        return {
          success: true,
          found: true,
          source: 'firestore',
          data: { id: docSnap.id, ...docSnap.data() }
        };
      }

      // Check case-insensitive or query by certId field
      const colRef = collection(db, 'certificates');
      const allSnap = await getDocs(colRef);
      const matched = allSnap.docs.find(d => {
        const data = d.data();
        return (
          d.id.toUpperCase() === cleanId ||
          (data.certId && data.certId.toUpperCase() === cleanId) ||
          (data.rollNumber && data.rollNumber.toUpperCase() === cleanId)
        );
      });

      if (matched) {
        return {
          success: true,
          found: true,
          source: 'firestore',
          data: { id: matched.id, ...matched.data() }
        };
      }
    } catch (err) {
      console.warn('[CertificateService] Firestore lookup error:', err);
    }
  }

  // 2. Check Sample Dataset Fallback
  if (SAMPLE_CERTIFICATES[cleanId]) {
    return {
      success: true,
      found: true,
      source: 'sample_dataset',
      data: SAMPLE_CERTIFICATES[cleanId]
    };
  }

  return {
    success: false,
    found: false,
    message: `No certificate found matching ID "${cleanId}". Please check the ID or contact admissions helpline.`
  };
}

/**
 * Creates and stores a new Certificate / Offer Letter / MoU in Firestore
 */
export async function createDocument(data = {}) {
  const type = data.type || 'training_certificate';
  const prefix = 
    type === 'internship_offer' ? 'YUK-OFFER' :
    type === 'mou' ? 'YUK-MOU' :
    type === 'internship_certificate' ? 'YUK-INT' : 'YUK-CERT';

  const randomNum = Math.floor(1000 + Math.random() * 9000);
  const currentYear = new Date().getFullYear();
  const certId = data.certId ? data.certId.trim().toUpperCase() : `${prefix}-${currentYear}-${randomNum}`;

  const payload = {
    id: certId,
    certId: certId,
    type: type,
    studentName: (data.studentName || '').trim(),
    college: (data.college || '').trim(),
    title: (data.title || data.courseOrRole || '').trim(),
    duration: (data.duration || '').trim(),
    issueDate: data.issueDate || new Date().toISOString().split('T')[0],
    grade: (data.grade || 'Grade A').trim(),
    skills: (data.skills || '').trim(),
    projectTitle: (data.projectTitle || '').trim(),
    stipend: (data.stipend || '').trim(),
    startDate: data.startDate || '',
    validTill: data.validTill || '',
    instructor: (data.instructor || 'Lead Technical Faculty').trim(),
    authorizedSignatory: (data.authorizedSignatory || 'Director & Head of Academics').trim(),
    status: 'active',
    verificationSeal: 'Authenticated by Yukti Software Greater Noida',
    createdAt: new Date().toISOString()
  };

  if (db) {
    try {
      await setDoc(doc(db, 'certificates', certId), {
        ...payload,
        serverTimestamp: serverTimestamp()
      });
      console.log('[CertificateService] Document created in Firestore with ID:', certId);
    } catch (err) {
      console.error('[CertificateService] Failed to save in Firestore:', err);
    }
  }

  return {
    success: true,
    data: payload
  };
}

/**
 * Fetches all certificates from Firestore (with sample fallback if empty)
 */
export async function getAllCertificates() {
  let list = [];

  if (db) {
    try {
      const colRef = collection(db, 'certificates');
      const q = query(colRef, orderBy('createdAt', 'desc'));
      const snap = await getDocs(q).catch(() => getDocs(colRef));
      
      list = snap.docs.map(d => ({ id: d.id, ...d.data() }));
    } catch (err) {
      console.warn('[CertificateService] Error fetching all certificates:', err);
    }
  }

  // If no documents in firestore, return sample list
  if (list.length === 0) {
    list = Object.values(SAMPLE_CERTIFICATES);
  }

  return list;
}

/**
 * Revokes / Deletes a certificate from Firestore
 */
export async function deleteCertificate(certId = '') {
  if (!db || !certId) return false;
  try {
    await deleteDoc(doc(db, 'certificates', certId));
    return true;
  } catch (err) {
    console.error('[CertificateService] Error deleting certificate:', err);
    return false;
  }
}
