// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore"; // Import Firestore functions
import { NextApiRequest, NextApiResponse } from "next"; // Import Next.js types

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAt9Ou0iSIAsQir0yyRj17x0QivQqno_Rk",
  authDomain: "portfolio-ec731.firebaseapp.com",
  projectId: "portfolio-ec731",
  storageBucket: "portfolio-ec731.firebasestorage.app",
  messagingSenderId: "691243552972",
  appId: "1:691243552972:web:119bbc55a88fdd2938b269",
  measurementId: "G-MQCD9F64TB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app); // Initialize Firestore

// API endpoint to handle form submissions
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { name, email, message } = req.body;

    // Validate request body
    if (!name || !email || !message) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    try {
      const docRef = await addDoc(collection(db, "formSubmissions"), {
        name,
        email,
        message,
        timestamp: new Date().toISOString(),
      });
      res
        .status(200)
        .json({ message: "Form submitted successfully", id: docRef.id });
    } catch (e) {
      res
        .status(500)
        .json({ error: "Error submitting form", details: e.message });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
