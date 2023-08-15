import { Julius_Sans_One, Poppins } from "next/font/google";

// If loading a variable font, you don't need to specify the font weight
export const julius = Julius_Sans_One({ subsets: ["latin"], weight: "400" });

export const poppins = Poppins({ subsets: ["latin"], weight: "400" })
