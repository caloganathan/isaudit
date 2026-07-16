/**
 * JCSS Indonesia brand tokens.
 *
 * JCSS Orange is sampled from the supplied wordmark (jcss-logo.png); if the
 * production logo asset ships with a slightly different value, update
 * `ORANGE` here and in app/globals.css (`--jcss-orange`) — every component
 * reads from these two places only.
 */
export const ORANGE = "#E9531E";
export const ORANGE_SOFT = "#F0855C"; // desaturated tint for data viz
export const GREY = "#6E6F72"; // matches the "Delivering Transparency" tagline grey
export const GREY_SOFT = "#9A9BA0";

export const DARK_BG = "#0A0E14";
export const LIGHT_BG = "#FBFAF8";

export type ThemeName = "dark" | "light";

export const themeMeta: Record<ThemeName, { label: string }> = {
  dark: { label: "Dark" },
  light: { label: "Light" },
};
