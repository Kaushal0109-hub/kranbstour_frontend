import Image from "next/image";
import { Lightbulb, Camera } from "lucide-react";
import { images } from "@/data/tours";

export function BlogArticleBody({ sections = [], destination = "Agra" }) {
  if (!sections || sections.length === 0) return null;

  // Curated inline images fallback by destination
  const destLower = (destination || "").toLowerCase();
  const defaultInlinePhotos = destLower.includes("delhi")
    ? [
        {
          src: images.humayunsTomb,
          alt: "Humayun's Tomb Persian Charbagh gardens in Delhi",
          caption: "Mughal symmetrical gardens and red sandstone facade at Humayun's Tomb.",
        },
        {
          src: images.qutubMinar,
          alt: "The fluted red sandstone minaret of Qutub Minar",
          caption: "The 12th-century victory minaret of Qutub Minar, towering 73 metres over Delhi.",
        },
      ]
    : destLower.includes("jaipur")
    ? [
        {
          src: images.amberFort,
          alt: "Amber Fort bastion overlooking Maota Lake at dusk",
          caption: "Amber Fort's formidable hilltop ramparts and Sheesh Mahal mirror palace.",
        },
        {
          src: images.hawaMahal,
          alt: "The pink honeycomb facade of Hawa Mahal",
          caption: "Hawa Mahal's 953 ornate jharokha latticework windows in Jaipur.",
        },
      ]
    : [
        {
          src: images.tajArchway,
          alt: "The Taj Mahal framed through the arched entryway of the Great Gate",
          caption: "First glimpse: The Taj Mahal framed through the Great Gate (Darwaza-i-Rauza).",
        },
        {
          src: images.agraFort,
          alt: "The red sandstone ramparts of Agra Fort",
          caption: "The formidable military bastions and imperial marble quarters of Agra Fort.",
        },
      ];

  return (
    <article className="space-y-10">
      {sections.map((sec, idx) => {
        // Supporting inline photo on 2nd and 4th section if available
        const inlinePhoto =
          sec.image ||
          (idx === 1
            ? defaultInlinePhotos[0]
            : idx === 3
            ? defaultInlinePhotos[1]
            : null);

        return (
          <section
            key={sec.id || idx}
            id={sec.id}
            className="scroll-mt-24 space-y-4"
          >
            {/* Section Heading (H2: 26px - 30px) */}
            <h2 className="font-display text-2xl sm:text-[1.75rem] font-bold text-royal leading-snug tracking-tight pt-2">
              {sec.heading}
            </h2>

            {/* Paragraphs (16px - 17px, line-height 1.75) */}
            <div className="space-y-4">
              {sec.paragraphs &&
                sec.paragraphs.map((p, pIdx) => (
                  <p
                    key={pIdx}
                    className="text-[16px] sm:text-[17px] leading-[1.75] text-[#2c333e] font-sans"
                  >
                    {p}
                  </p>
                ))}
            </div>

            {/* Inline Editorial Photograph */}
            {inlinePhoto && inlinePhoto.src && (
              <figure className="my-6 overflow-hidden">
                <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl shadow-sm bg-ivory">
                  <Image
                    src={inlinePhoto.src}
                    alt={inlinePhoto.alt || sec.heading}
                    fill
                    sizes="(max-width: 1024px) 100vw, 760px"
                    className="object-cover"
                  />
                </div>
                {inlinePhoto.caption && (
                  <figcaption className="mt-2 flex items-center gap-1.5 text-xs text-foreground/60 italic font-sans px-1">
                    <Camera className="h-3 w-3 text-royal/40 shrink-0" />
                    <span>{inlinePhoto.caption}</span>
                  </figcaption>
                )}
              </figure>
            )}

            {/* Editorial Pull Quote (Compact) */}
            {sec.quote && (
              <figure className="relative my-6 py-3.5 pl-4 sm:pl-5 border-l-3 border-saffron bg-ivory/50 rounded-r-xl">
                <blockquote className="font-display italic text-lg sm:text-xl text-royal leading-relaxed">
                  &ldquo;{sec.quote}&rdquo;
                </blockquote>
              </figure>
            )}

            {/* Travel Tip (Compact) */}
            {sec.tip && (
              <div className="relative my-6 overflow-hidden rounded-xl border-l-3 border-saffron bg-[#FAF7EE] p-4 sm:p-5 shadow-xs">
                <div className="flex items-start gap-3">
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-saffron text-paper">
                    <Lightbulb className="h-4 w-4" />
                  </div>
                  <div className="space-y-1">
                    <p className="font-display text-[11px] font-bold uppercase tracking-wider text-saffron-deep">
                      KRANBSTOUR TRAVEL TIP
                    </p>
                    <p className="text-[15px] sm:text-[16px] leading-relaxed text-[#2c333e] font-sans">
                      {sec.tip}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </section>
        );
      })}
    </article>
  );
}
