import { Roboto } from "next/font/google";
import { Inter } from 'next/font/google';
import { Lusitana } from 'next/font/google';

// setting the font
const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

export { roboto };
export const inter = Inter({ subsets: ['latin'] });
export const lusitana = Lusitana({ subsets: ['latin'], weight: ['400', '700'] });