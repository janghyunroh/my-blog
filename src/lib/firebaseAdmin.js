import admin from 'firebase-admin';

if (!admin.apps.length) {
  // 서비스 계정 키를 환경 변수나 안전한 방법으로 불러옵니다.
  const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    storageBucket: 'janghyunroh-s-blog' // 프로젝트 ID에 맞게 수정
  });
}

const db = admin.firestore();
const bucket = admin.storage().bucket();

export { db, bucket };
