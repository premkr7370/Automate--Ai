// import { cert, initializeApp } from "firebase-admin";
// import serviceAccount from "../serviceAccountKey.json"  with {type:"json"};

// export const app=initializeApp({
//   credential: cert(serviceAccount)
// });

// // 

import { cert, initializeApp, getApps } from "firebase-admin/app";

const serviceAccountJson = process.env.FIREBASE_SERVICE_ACCOUNT;

if (!serviceAccountJson) {
  throw new Error("FIREBASE_SERVICE_ACCOUNT environment variable is missing");
}

const serviceAccount = JSON.parse(serviceAccountJson);

export const app = getApps().length
  ? getApps()[0]
  : initializeApp({
      credential: cert(serviceAccount),
    });
