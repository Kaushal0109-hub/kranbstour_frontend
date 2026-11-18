"use client";

import { useId, useState } from "react";
import {
  ArrowRight,
  Calendar,
  CheckCircle2,
  Compass,
  HelpCircle,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  RotateCcw,
  ShieldCheck,
  Sparkles,
  User,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { images } from "@/data/tours";
import { contactConfig } from "@/data/contact-info";

export function ContactFormSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    destination: "Agra",
    travelDate: "",
    travellers: "2",
    enquiryType: "Tour Package Enquiry",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const todayStr = new Date().toISOString().split("T")[0];

  const fullNameId = useId();
  const emailId = useId();
  const phoneId = useId();
  const destinationId = useId();
  const travelDateId = useId();
  const travellersId = useId();
  const enquiryTypeId = useId();
  const messageId = useId();

  const validate = () => {
    const errs = {};
    if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
      errs.fullName = "Please enter your full name.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      errs.email = "Please enter a valid email address.";
    }

    const cleanedPhone = formData.phone.replace(/[\s\-\+\(\)]/g, "");
    if (!formData.phone.trim() || cleanedPhone.length < 7) {
      errs.phone = "Please enter a valid phone number (at least 7 digits).";
    }

    if (!formData.destination) {
      errs.destination = "Please select a destination.";
    }

    if (!formData.message.trim() || formData.message.trim().length < 5) {
      errs.message = "Please tell us a little about your travel plans (min 5 characters).";
    }

    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
    if (submitError) setSubmitError(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitted(true);
      } else {
        setSubmitError(
          data.message || "Failed to submit enquiry. Please check the form or contact us directly."
        );
        if (data.errors) {
          setErrors(data.errors);
        }
      }
    } catch (err) {
      console.error("Enquiry submission failed", err);
      setSubmitError(
        "Could not connect to the server. You can also reach us directly at " +
          contactConfig.email
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      destination: "Agra",
      travelDate: "",
      travellers: "2",
      enquiryType: "Tour Package Enquiry",
      message: "",
    });
    setErrors({});
    setSubmitted(false);
    setSubmitError(null);
  };

  return (
    <section id="enquiry-form" className="py-16 sm:py-24 bg-ivory/50 border-t border-royal/10">
      <div className="mx-auto max-w-[88rem] px-4 sm:px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16 items-start">
          {/* Left Column: Context, Visual, and Benefits */}
          <div className="space-y-8">
            <div>
              <span className="eyebrow inline-flex items-center gap-1.5 rounded-full bg-saffron/15 px-3.5 py-1 text-xs text-saffron-deep">
                <Compass className="h-3.5 w-3.5" /> Start Your Journey
              </span>
              <h2 className="mt-3 font-display text-3xl font-extrabold text-royal sm:text-4xl lg:text-5xl leading-tight">
                Tell Us About Your Dream Trip
              </h2>
              <p className="mt-4 text-base leading-relaxed text-foreground/80 sm:text-lg">
                Share your travel plans with us and let our team help you find the right experience.
                Whether you have exact dates or just an idea, we will personalize the itinerary
                around your interests.
              </p>
            </div>

            {/* Destination Feature Card */}
            <div className="relative overflow-hidden rounded-[2.5rem] bg-paper p-3 shadow-photo">
              <div className="relative aspect-[16/10] overflow-hidden rounded-[2rem]">
                <img
                  src={images.tajArchway}
                  alt="Taj Mahal through Archway"
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-royal/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-paper">
                  <p className="hand text-2xl text-saffron">Private & Tailor-Made</p>
                  <p className="font-display text-lg font-bold">
                    Agra ✦ Delhi ✦ Jaipur ✦ Golden Triangle
                  </p>
                </div>
              </div>
            </div>

            {/* Three Supporting Benefits */}
            <div className="space-y-4">
              <div className="flex items-start gap-3.5 rounded-2xl bg-paper p-4 border border-royal/10 shadow-xs">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-mint text-mint-deep shadow-xs">
                  <ShieldCheck className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-display font-bold text-royal text-sm sm:text-base">
                    Personalized Travel Assistance
                  </h3>
                  <p className="mt-0.5 text-xs text-foreground/75 leading-relaxed">
                    A dedicated destination specialist assigned to your inquiry to craft customized
                    routes and schedules.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 rounded-2xl bg-paper p-4 border border-royal/10 shadow-xs">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-sky/30 text-royal shadow-xs">
                  <Compass className="h-5 w-5 text-saffron" />
                </span>
                <div>
                  <h3 className="font-display font-bold text-royal text-sm sm:text-base">
                    Destination Guidance
                  </h3>
                  <p className="mt-0.5 text-xs text-foreground/75 leading-relaxed">
                    Honest advice on best visiting times, crowd avoidance, weather seasons, and
                    certified guides.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 rounded-2xl bg-paper p-4 border border-royal/10 shadow-xs">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-peach/30 text-saffron-deep shadow-xs">
                  <Sparkles className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-display font-bold text-royal text-sm sm:text-base">
                    Easy & Transparent Tour Enquiries
                  </h3>
                  <p className="mt-0.5 text-xs text-foreground/75 leading-relaxed">
                    Clear inclusions, zero hidden costs, and friendly communication every step of
                    the way.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Premium Contact Form Card */}
          <div className="rounded-[2.5rem] border border-royal/10 bg-paper p-6 sm:p-9 shadow-photo relative">
            <div className="border-b border-royal/10 pb-5 mb-6">
              <span className="eyebrow text-xs text-saffron-deep font-bold">Fast Response Guarantee</span>
              <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-royal mt-1">
                Send Us an Enquiry
              </h3>
              <p className="text-xs sm:text-sm text-foreground/75 mt-1">
                We&apos;ll be happy to help you plan your journey.
              </p>
            </div>

            {submitted ? (
              <div className="py-10 text-center space-y-4 animate-in fade-in duration-300">
                <div className="grid h-16 w-16 place-items-center rounded-full bg-mint/50 text-mint-deep mx-auto shadow-soft">
                  <CheckCircle2 className="h-8 w-8 stroke-[2.5]" />
                </div>
                <h4 className="font-display text-2xl font-bold text-royal">
                  Enquiry Successfully Sent!
                </h4>
                <p className="text-sm text-foreground/80 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong>{formData.fullName}</strong>. We have received your inquiry for{" "}
                  <strong>{formData.destination}</strong>. Our travel team will review your plans
                  and get back to you shortly via email or phone.
                </p>
                <div className="pt-4">
                  <Button type="button" variant="outline-royal" size="pill" onClick={handleReset}>
                    <RotateCcw className="h-4 w-4" /> Send Another Enquiry
                  </Button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-4 text-xs sm:text-sm">
                {submitError && (
                  <div className="rounded-2xl bg-rose-50 p-4 border border-rose-200 text-xs text-rose-900 leading-relaxed">
                    {submitError}
                  </div>
                )}

                {/* 1. Full Name */}
                <div>
                  <label htmlFor={fullNameId} className="block font-semibold text-royal mb-1 flex items-center gap-1.5">
                    <User className="h-3.5 w-3.5 text-saffron" />
                    Full Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id={fullNameId}
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className={`w-full rounded-2xl border bg-ivory/40 px-4 py-2.5 text-royal font-medium placeholder:text-muted-foreground focus:outline-none ${
                      errors.fullName ? "border-rose-400 bg-rose-50/30" : "border-royal/20 focus:border-royal"
                    }`}
                  />
                  {errors.fullName && (
                    <p className="mt-1 text-[0.72rem] text-rose-600 font-medium">{errors.fullName}</p>
                  )}
                </div>

                {/* 2 & 3: Email and Phone in a 2-col row */}
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor={emailId} className="block font-semibold text-royal mb-1 flex items-center gap-1.5">
                      <Mail className="h-3.5 w-3.5 text-saffron" />
                      Email Address <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id={emailId}
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email address"
                      className={`w-full rounded-2xl border bg-ivory/40 px-4 py-2.5 text-royal font-medium placeholder:text-muted-foreground focus:outline-none ${
                        errors.email ? "border-rose-400 bg-rose-50/30" : "border-royal/20 focus:border-royal"
                      }`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-[0.72rem] text-rose-600 font-medium">{errors.email}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor={phoneId} className="block font-semibold text-royal mb-1 flex items-center gap-1.5">
                      <Phone className="h-3.5 w-3.5 text-saffron" />
                      Phone Number <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id={phoneId}
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter your phone number"
                      className={`w-full rounded-2xl border bg-ivory/40 px-4 py-2.5 text-royal font-medium placeholder:text-muted-foreground focus:outline-none ${
                        errors.phone ? "border-rose-400 bg-rose-50/30" : "border-royal/20 focus:border-royal"
                      }`}
                    />
                    {errors.phone && (
                      <p className="mt-1 text-[0.72rem] text-rose-600 font-medium">{errors.phone}</p>
                    )}
                  </div>
                </div>

                {/* 4 & 5: Destination & Preferred Date */}
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor={destinationId} className="block font-semibold text-royal mb-1 flex items-center gap-1.5">
                      <MapPin className="h-3.5 w-3.5 text-saffron" />
                      Select Destination <span className="text-rose-500">*</span>
                    </label>
                    <select
                      id={destinationId}
                      name="destination"
                      value={formData.destination}
                      onChange={handleChange}
                      className="w-full rounded-2xl border border-royal/20 bg-ivory/40 px-3.5 py-2.5 text-royal font-medium focus:border-royal focus:outline-none"
                    >
                      <option value="Agra">Agra (Taj Mahal Tours)</option>
                      <option value="Delhi">Delhi (Capital Tours)</option>
                      <option value="Jaipur">Jaipur (Pink City Tours)</option>
                      <option value="Golden Triangle">Golden Triangle (Combined Circuit)</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor={travelDateId} className="block font-semibold text-royal mb-1 flex items-center gap-1.5">
                      <Calendar className="h-3.5 w-3.5 text-saffron" />
                      Preferred Travel Date
                    </label>
                    <input
                      id={travelDateId}
                      type="date"
                      name="travelDate"
                      min={todayStr}
                      value={formData.travelDate}
                      onChange={handleChange}
                      className="w-full rounded-2xl border border-royal/20 bg-ivory/40 px-3.5 py-2.5 text-royal font-medium focus:border-royal focus:outline-none"
                    />
                  </div>
                </div>

                {/* 6 & 7: Number of Travellers & Type of Enquiry */}
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor={travellersId} className="block font-semibold text-royal mb-1 flex items-center gap-1.5">
                      <Users className="h-3.5 w-3.5 text-saffron" />
                      Number of Travellers
                    </label>
                    <select
                      id={travellersId}
                      name="travellers"
                      value={formData.travellers}
                      onChange={handleChange}
                      className="w-full rounded-2xl border border-royal/20 bg-ivory/40 px-3.5 py-2.5 text-royal font-medium focus:border-royal focus:outline-none"
                    >
                      <option value="1">1 Person (Solo)</option>
                      <option value="2">2 People (Couple / Pair)</option>
                      <option value="3">3 People</option>
                      <option value="4">4 People (Small Family)</option>
                      <option value="5">5 People</option>
                      <option value="6-10">6–10 People (Group)</option>
                      <option value="10+">10+ People (Large Group)</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor={enquiryTypeId} className="block font-semibold text-royal mb-1 flex items-center gap-1.5">
                      <HelpCircle className="h-3.5 w-3.5 text-saffron" />
                      Type of Enquiry
                    </label>
                    <select
                      id={enquiryTypeId}
                      name="enquiryType"
                      value={formData.enquiryType}
                      onChange={handleChange}
                      className="w-full rounded-2xl border border-royal/20 bg-ivory/40 px-3.5 py-2.5 text-royal font-medium focus:border-royal focus:outline-none"
                    >
                      <option value="Tour Package Enquiry">Tour Package Enquiry</option>
                      <option value="Customized Tour">Customized Private Tour</option>
                      <option value="Golden Triangle Tour">Golden Triangle Tour</option>
                      <option value="General Question">General Question</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                {/* 8. Message */}
                <div>
                  <label htmlFor={messageId} className="block font-semibold text-royal mb-1 flex items-center gap-1.5">
                    <MessageSquare className="h-3.5 w-3.5 text-saffron" />
                    Your Message <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    id={messageId}
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us a little about your travel plans (e.g., preferred monuments, pickup location, hotel requirements)..."
                    className={`w-full rounded-2xl border bg-ivory/40 px-4 py-2.5 text-royal font-medium placeholder:text-muted-foreground focus:outline-none ${
                      errors.message ? "border-rose-400 bg-rose-50/30" : "border-royal/20 focus:border-royal"
                    }`}
                  />
                  {errors.message && (
                    <p className="mt-1 text-[0.72rem] text-rose-600 font-medium">{errors.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <Button
                    type="submit"
                    variant="saffron"
                    size="pill-lg"
                    disabled={isSubmitting}
                    className="w-full shadow-saffron font-bold text-sm sm:text-base h-12 sm:h-14"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="h-4 w-4 rounded-full border-2 border-paper border-t-transparent animate-spin" />
                        Sending Your Enquiry...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        Send My Enquiry <ArrowRight className="h-4 w-4" />
                      </span>
                    )}
                  </Button>
                </div>

                <p className="text-[0.68rem] text-center text-muted-foreground pt-1">
                  🔒 We respect your privacy. Your information is strictly used for tour coordination.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
