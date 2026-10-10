import { db } from '../firebase';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';

/**
 * Fetches active batches strictly from Firestore database.
 * No hardcoded dummy items.
 */
export async function getActiveBatches() {
  if (!db) {
    return [];
  }

  try {
    let q;
    try {
      q = query(collection(db, 'batches'), orderBy('createdAt', 'desc'));
    } catch {
      q = collection(db, 'batches');
    }

    const snapshot = await getDocs(q);
    
    if (snapshot.empty) {
      return [];
    }

    return snapshot.docs
      .map(doc => ({ id: doc.id, ...doc.data() }))
      .filter(item => item.isActive !== false);
  } catch (err) {
    console.warn('[BatchService] Could not fetch from Firestore:', err);
    return [];
  }
}
