import { NextResponse } from "next/server";

// Dynamic API Route: Execute fresh on every contact form submission
export const dynamic = "force-dynamic";

export async function POST(request) {
  try {
    const body = await request.json();
    const {
      fullName,
      email,
      phone,
      destination,
      travelDate,
      travellers,
      enquiryType,
      message,
    } = body;

    const errors = {};

    if (!fullName || typeof fullName !== "string" || fullName.trim().length < 2) {
      errors.fullName = "Please enter your full name.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || typeof email !== "string" || !emailRegex.test(email.trim())) {
      errors.email = "Please enter a valid email address.";
    }

    // Phone validation: at least 7 digits
    const cleanedPhone = phone ? String(phone).replace(/[\s\-\+\(\)]/g, "") : "";
    if (!phone || cleanedPhone.length < 7) {
      errors.phone = "Please enter a valid phone number (at least 7 digits).";
    }

    if (!destination || typeof destination !== "string" || destination.trim().length === 0) {
      errors.destination = "Please select a destination.";
    }

    if (!message || typeof message !== "string" || message.trim().length < 5) {
      errors.message = "Please share a brief message about your travel plans (min 5 characters).";
    }

    if (Object.keys(errors).length > 0) {
      return NextResponse.json(
        {
          success: false,
          errors,
          message: "Please correct the highlighted errors.",
        },
        { status: 400 }
      );
    }

    // In a production deployment with email credentials (SendGrid, Resend, Nodemailer),
    // this is where the email would be dispatched.
    // Log the received enquiry cleanly:
    console.log("[KranbsTour Contact Enquiry Received]:", {
      fullName: fullName.trim(),
      email: email.trim(),
      phone: phone.trim(),
      destination,
      travelDate: travelDate || "Not specified",
      travellers: travellers || 2,
      enquiryType: enquiryType || "Tour Package Enquiry",
      message: message.trim(),
      receivedAt: new Date().toISOString(),
    });

    return NextResponse.json({
      success: true,
      message:
        "Thank you! Your travel enquiry has been received. Our destination specialists will review your itinerary and reply within 12–24 hours.",
    });
  } catch (error) {
    console.error("[Contact API Error]:", error);
    return NextResponse.json(
      {
        success: false,
        message: "An unexpected error occurred while submitting your enquiry. Please try again or reach out directly via WhatsApp or email.",
      },
      { status: 500 }
    );
  }
}
