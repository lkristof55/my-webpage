import "./globals.css";

export const metadata = {
    title: "DotCoin",
    description: "One coin. One dot. Infinite meaning.",
    icons: {
        icon: "/DotCoin_Logo.png",      // tvoj logo u public/
        shortcut: "/DotCoin_Logo.png",
        apple: "/DotCoin_Logo.png",
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <body>{children}</body>
        </html>
    );
}
