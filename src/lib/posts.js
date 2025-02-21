// src/lib/posts.js
import { db } from '@/lib/firebaseAdmin';

export async function getAllPosts() {
  const snapshot = await db.collection('posts').orderBy('date', 'desc').get();
  const posts = [];
  snapshot.forEach(doc => {
    const data = doc.data();
    // Firestore Timestamp를 일반 문자열로 변환
    if (data.date && typeof data.date.toDate === 'function') {
      data.date = data.date.toDate().toISOString();
    }
    posts.push({ slug: doc.id, ...data });
  });
  return posts;
}

export async function getPostData(slug) {
  const doc = await db.collection('posts').doc(slug).get();
  if (!doc.exists) return null;
  const data = doc.data();
  if (data.date && typeof data.date.toDate === 'function') {
    data.date = data.date.toDate().toISOString();
  }
  return data;
}
