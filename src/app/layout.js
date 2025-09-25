import { Cinzel } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata = {
    title: "Dream Lottery",
    description: "Turning dreams into on-chain lottery tickets",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <body className={cinzel.className}>{children}</body>
        </html>
    );
}
