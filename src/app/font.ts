import { Cinzel, Playfair_Display, Tenor_Sans , Lora} from "next/font/google";

export const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const playfair = Playfair_Display({
  subsets: ["latin"],
  style: ["italic"],
  display: "swap",
});
export const tenor_Sans_Caption = Tenor_Sans({
    subsets: ["latin"],
    weight: ["400"],
    display: "swap",
});
export const lora = Lora({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    display: "swap",
    style: ["italic"],
})
  