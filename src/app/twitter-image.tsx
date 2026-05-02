/* Twitter/X share card — Next.js requires route segment config (runtime,
   size, etc.) to be statically declared, not re-exported. So we just
   re-import the OG component and the rest is duplicated literally. */
import OpenGraphImage from "./opengraph-image";
import { SITE_NAME } from "@/lib/constants";

export const runtime = "edge";
export const alt = `${SITE_NAME} — Baking an African Champion`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default OpenGraphImage;
