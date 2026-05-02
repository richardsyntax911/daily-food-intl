import { ImageResponse } from "next/og";
import { SITE_NAME } from "@/lib/constants";

/*
 * Dynamic Open Graph image — 1200×630 branded card.
 *
 * What appears when dailyfoodinternational.com is shared on
 * WhatsApp / LinkedIn / Twitter / Facebook / iMessage / Slack:
 * coral brand voice + the deck headline + the company tagline.
 *
 * Generated at the edge on first request, then cached. Replaces the
 * old 346x340 monogram which was being stretched and cropped by
 * social platforms (which expect 1.91:1).
 */

export const runtime = "edge";
export const alt = `${SITE_NAME} — Baking an African Champion`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundImage:
            "linear-gradient(135deg, #F58B7A 0%, #EF6F5C 45%, #D85B4A 100%)",
          color: "white",
          padding: "70px 80px",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Decorative arc — top right */}
        <div
          style={{
            position: "absolute",
            top: "-200px",
            right: "-200px",
            width: "600px",
            height: "600px",
            borderRadius: "50%",
            border: "1px solid rgba(255,255,255,0.18)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "-280px",
            right: "-280px",
            width: "760px",
            height: "760px",
            borderRadius: "50%",
            border: "1px solid rgba(255,255,255,0.10)",
            display: "flex",
          }}
        />

        {/* Top row: eyebrow with accent line */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            fontSize: "20px",
            fontWeight: 800,
            letterSpacing: "4px",
            textTransform: "uppercase",
            color: "white",
          }}
        >
          <div
            style={{
              display: "flex",
              width: "70px",
              height: "2px",
              background: "rgba(255,255,255,0.7)",
            }}
          />
          Be Smart, Eat Smart
        </div>

        {/* Headline */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: "112px",
            fontWeight: 900,
            lineHeight: 1.02,
            letterSpacing: "-3px",
          }}
        >
          <span style={{ display: "flex" }}>Baking an</span>
          <span style={{ display: "flex" }}>African Champion</span>
        </div>

        {/* Bottom row: subtitle left, brand right */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            gap: "40px",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: "24px",
              fontWeight: 600,
              color: "rgba(255,255,255,0.9)",
              maxWidth: "640px",
              lineHeight: 1.35,
            }}
          >
            From Ghana to 15 markets across West &amp; Central Africa.
            Home to Boss Baker and Big Boss.
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              gap: "6px",
            }}
          >
            <div
              style={{
                display: "flex",
                fontSize: "32px",
                fontWeight: 900,
                letterSpacing: "-1px",
              }}
            >
              Daily Food
            </div>
            <div
              style={{
                display: "flex",
                fontSize: "16px",
                fontWeight: 700,
                letterSpacing: "3px",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.7)",
              }}
            >
              International
            </div>
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
