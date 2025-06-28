import localFont from "next/font/local";

export const coolvetica = localFont({
  src: [
    {
      path: "../fonts/coolvetica/Coolvetica.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/coolvetica/Coolvetica_Italic.ttf",
      weight: "400",
      style: "italic",
    },
  ],
  variable: "--font-coolvetica",
});

export const timesNewRoman = localFont({
  src: [
    {
      path: "../fonts/timesNewRoman/TIMES_NEW_ROMAN.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/timesNewRoman/TIMES_NEW_ROMAN_ITALIC.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../fonts/timesNewRoman/TIMES_NEW_ROMAN_BOLD.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/timesNewRoman/TIMES_NEW_ROMAN_BOLD_ITALIC.ttf",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-times-new-roman",
});
