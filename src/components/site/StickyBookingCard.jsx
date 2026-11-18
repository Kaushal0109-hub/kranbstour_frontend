"use client";

import { useId, useState } from "react";
import {
  ArrowUpRight,
  Calendar,
  Car,
  CheckCircle2,
  Clock,
  HelpCircle,
  MapPin,
  MessageCircle,
  Minus,
  Phone,
  Plus,
  ShieldCheck,
  UserCheck,
  Users,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { formatPrice } from "@/data/tours";

export function StickyBookingCard({ tour }) {
  const [travelers, setTravelers] = useState(2);
  const [selectedDate, setSelectedDate] = useState(() => {
    // Tomorrow as default
    const d = new Date();
    d.setDate(d.getDate() + 1);
    return d.toISOString().split("T")[0];
  });
  const [selectedOption, setSelectedOption] = useState(
    tour.options?.[0]?.id || "standard"
  );
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const [pickupLocation, setPickupLocation] = useState("");

  const hasNumericPrice = tour.price && !isNaN(tour.price);
  const totalPrice = hasNumericPrice ? tour.price * travelers : null;

  const todayStr = new Date().toISOString().split("T")[0];

  const travelDateId = useId();
  const optionSelectId = useId();
  const langSelectId = useId();
  const pickupInputId = useId();

  // Generate mailto and WhatsApp text
  const inquirySubject = `Booking Request: ${tour.title}`;
  const inquiryBody = `Hello KranbsTour Team,

I would like to book/enquire about the following tour:
Tour: ${tour.title}
Travel Date: ${selectedDate}
Number of Travellers: ${travelers}
Option/Time: ${selectedOption}
Preferred Language: ${selectedLanguage}
Pickup Location: ${pickupLocation || "To be confirmed"}

Please confirm availability and share details. Thank you!`;

  const mailtoUrl = `mailto:hello@kranbstour.com?subject=${encodeURIComponent(
    inquirySubject
  )}&body=${encodeURIComponent(inquiryBody)}`;

  const whatsappMessage = `Hello KranbsTour, I am interested in booking "${tour.title}" on ${selectedDate} for ${travelers} travellers. Option: ${selectedOption}. Please share availability and details.`;
  const whatsappUrl = `https://wa.me/910000000000?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <>
      <aside className="sticky top-24 rounded-[2rem] border border-royal/10 bg-paper p-6 sm:p-7 shadow-photo">
        {/* Header: Price */}
        <div className="border-b border-royal/10 pb-5">
          <p className="eyebrow text-xs text-muted-foreground uppercase font-semibold">
            {hasNumericPrice ? "Starting from" : "Pricing"}
          </p>
          <div className="mt-1 flex items-baseline gap-2">
            {hasNumericPrice ? (
              <>
                <span className="font-display text-3xl sm:text-4xl font-extrabold text-royal">
                  {formatPrice(tour.price)}
                </span>
                <span className="text-xs text-muted-foreground font-normal">/ person</span>
              </>
            ) : (
              <span className="font-display text-2xl sm:text-3xl font-extrabold text-royal">
                Enquire for Price
              </span>
            )}
          </div>
          <p className="mt-1 text-xs text-foreground/70">
            {hasNumericPrice
              ? "All taxes, private vehicle, fuel & tolls included."
              : "Final quote depends on group size, vehicle and customization."}
          </p>
        </div>

        {/* Interactive Booking Controls */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            window.location.href = mailtoUrl;
          }}
          className="mt-6 space-y-4 text-xs sm:text-sm"
        >
          {/* Date Picker */}
          <div>
            <label
              htmlFor={travelDateId}
              className="block font-semibold text-royal mb-1.5 flex items-center gap-1.5"
            >
              <Calendar className="h-3.5 w-3.5 text-saffron" />
              Select Date
            </label>
            <input
              id={travelDateId}
              type="date"
              min={todayStr}
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              required
              className="w-full rounded-2xl border border-royal/20 bg-ivory/50 px-3.5 py-2.5 text-royal font-medium focus:border-royal focus:outline-none"
            />
          </div>

          {/* Number of Travellers Selector */}
          <div>
            <label className="block font-semibold text-royal mb-1.5 flex items-center justify-between">
              <span className="flex items-center gap-1.5">
                <Users className="h-3.5 w-3.5 text-saffron" />
                Travellers
              </span>
              <span className="text-xs text-muted-foreground font-normal">
                {travelers} {travelers === 1 ? "Person" : "People"}
              </span>
            </label>
            <div className="flex items-center justify-between rounded-2xl border border-royal/20 bg-ivory/50 px-4 py-2">
              <span className="font-medium text-royal">Adults (12+ yrs)</span>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setTravelers((prev) => Math.max(1, prev - 1))}
                  disabled={travelers <= 1}
                  className="grid h-7 w-7 place-items-center rounded-full bg-paper border border-royal/15 text-royal disabled:opacity-40"
                  aria-label="Decrease travellers"
                >
                  <Minus className="h-3.5 w-3.5" />
                </button>
                <span className="font-display text-base font-bold text-royal w-4 text-center">
                  {travelers}
                </span>
                <button
                  type="button"
                  onClick={() => setTravelers((prev) => Math.min(20, prev + 1))}
                  className="grid h-7 w-7 place-items-center rounded-full bg-paper border border-royal/15 text-royal"
                  aria-label="Increase travellers"
                >
                  <Plus className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* Tour Option / Departure Time */}
          {tour.options && tour.options.length > 0 && (
            <div>
              <label
                htmlFor={optionSelectId}
                className="block font-semibold text-royal mb-1.5 flex items-center gap-1.5"
              >
                <Clock className="h-3.5 w-3.5 text-saffron" />
                Tour Option & Timing
              </label>
              <select
                id={optionSelectId}
                value={selectedOption}
                onChange={(e) => setSelectedOption(e.target.value)}
                className="w-full rounded-2xl border border-royal/20 bg-ivory/50 px-3.5 py-2.5 text-xs text-royal font-medium focus:border-royal focus:outline-none"
              >
                {tour.options.map((opt) => (
                  <option key={opt.id} value={opt.id}>
                    {opt.name}
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* Language Selection */}
          <div>
            <label
              htmlFor={langSelectId}
              className="block font-semibold text-royal mb-1.5 flex items-center gap-1.5"
            >
              <UserCheck className="h-3.5 w-3.5 text-saffron" />
              Guide Language
            </label>
            <select
              id={langSelectId}
              value={selectedLanguage}
              onChange={(e) => setSelectedLanguage(e.target.value)}
              className="w-full rounded-2xl border border-royal/20 bg-ivory/50 px-3.5 py-2.5 text-xs text-royal font-medium focus:border-royal focus:outline-none"
            >
              <option value="English">English (Standard)</option>
              <option value="Hindi">Hindi</option>
              <option value="Spanish">Spanish (On Request)</option>
              <option value="French">French (On Request)</option>
              <option value="German">German (On Request)</option>
            </select>
          </div>

          {/* Pickup Address */}
          <div>
            <label
              htmlFor={pickupInputId}
              className="block font-semibold text-royal mb-1.5 flex items-center gap-1.5"
            >
              <MapPin className="h-3.5 w-3.5 text-saffron" />
              Pickup Location
            </label>
            <input
              id={pickupInputId}
              type="text"
              placeholder="Hotel name or Airport"
              value={pickupLocation}
              onChange={(e) => setPickupLocation(e.target.value)}
              className="w-full rounded-2xl border border-royal/20 bg-ivory/50 px-3.5 py-2.5 text-xs text-royal font-medium placeholder:text-muted-foreground focus:border-royal focus:outline-none"
            />
          </div>

          {/* Price Calculation Summary (if price exists) */}
          {hasNumericPrice && (
            <div className="rounded-2xl bg-mint/30 p-3.5 border border-mint/60">
              <div className="flex items-center justify-between text-xs text-foreground/75">
                <span>
                  {formatPrice(tour.price)} × {travelers} travellers
                </span>
                <span className="font-display font-bold text-royal text-sm">
                  {formatPrice(totalPrice)}
                </span>
              </div>
              <div className="mt-1 flex items-center justify-between text-[0.7rem] text-muted-foreground border-t border-royal/10 pt-1.5">
                <span>Taxes & AC Transport</span>
                <span className="text-mint-deep font-semibold">Included</span>
              </div>
            </div>
          )}

          {/* Book Now Button */}
          <Button type="submit" variant="saffron" size="pill-lg" className="w-full mt-2 font-bold shadow-saffron">
            Check Availability & Book <ArrowUpRight className="h-4 w-4" />
          </Button>

          {/* WhatsApp Quick Link */}
          <Button
            asChild
            variant="outline-royal"
            size="pill"
            className="w-full gap-2 border-emerald-600/30 text-emerald-800 hover:bg-emerald-50 hover:text-emerald-900"
          >
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="h-4 w-4 text-emerald-600 fill-emerald-100" />
              Enquire on WhatsApp
            </a>
          </Button>
        </form>

        {/* Confidence Section (Section 8) */}
        <div className="mt-6 border-t border-royal/10 pt-5 space-y-3">
          <p className="eyebrow text-[0.65rem] text-muted-foreground uppercase font-semibold">
            Book With Confidence
          </p>
          <ul className="space-y-2.5 text-xs text-foreground/80">
            <li className="flex items-start gap-2.5">
              <ShieldCheck className="h-4 w-4 text-mint-deep shrink-0 mt-0.5" />
              <span>
                <strong>Govt. Certified Historians:</strong> Authentic stories, no unauthorized
                touts.
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <Car className="h-4 w-4 text-mint-deep shrink-0 mt-0.5" />
              <span>
                <strong>Dedicated AC Transport:</strong> Doorstep pickup, clean vehicle, verified
                chauffeur.
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="h-4 w-4 text-mint-deep shrink-0 mt-0.5" />
              <span>
                <strong>Transparent Pricing:</strong> No hidden costs, toll taxes & parking
                pre-covered.
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <Phone className="h-4 w-4 text-saffron shrink-0 mt-0.5" />
              <span>
                <strong>Dedicated Trip Assistance:</strong> Reach our desk directly at{" "}
                <a href="tel:+910000000000" className="underline font-semibold text-royal">
                  +91 00000 00000
                </a>
              </span>
            </li>
          </ul>
        </div>
      </aside>

      {/* Mobile Sticky Floating Bottom Booking Bar */}
      <div className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-paper/95 backdrop-blur-md border-t border-royal/15 p-3.5 shadow-lift">
        <div className="flex items-center justify-between gap-3 max-w-md mx-auto">
          <div>
            <p className="text-[0.65rem] uppercase text-muted-foreground font-semibold">
              {hasNumericPrice ? "From" : "Pricing"}
            </p>
            <p className="font-display text-lg font-bold text-royal leading-none">
              {hasNumericPrice ? formatPrice(tour.price) : "Enquire for Price"}
              {hasNumericPrice && (
                <span className="text-[0.65rem] font-normal text-muted-foreground"> / person</span>
              )}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <Button asChild variant="outline-royal" size="pill" className="text-xs px-3 h-10">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-3.5 w-3.5 text-emerald-600" />
              </a>
            </Button>
            <Button asChild variant="saffron" size="pill" className="text-xs px-5 h-10">
              <a href={mailtoUrl}>Book Now</a>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
