// app/api/saveContact/route.js
import { db } from "../../utils/firebase";
import { collection, addDoc } from "firebase/firestore";

// Handle POST request for saving contact data
export async function POST(req) {
  const { name, phone, email, message } = await req.json(); // Parse the incoming JSON body

  try {
    const docRef = await addDoc(collection(db, "Queries"), {
      name,
      phone,
      email,
      message,
      timestamp: new Date(),
    });

    // Return success response
    return new Response(
      JSON.stringify({ id: docRef.id, message: "Contact saved successfully!" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error saving contact:", error);
    return new Response(
      JSON.stringify({ error: "Failed to save contact." }),
      { status: 500 }
    );
  }
}
