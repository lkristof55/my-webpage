import "./globals.css";

export const metadata = {
    title: "DotCoin",
    description: "One coin. One dot. Infinite meaning.",
    icons: {
        icon: "/DotCoin_Logo.png", // koristi logo iz public/ foldera
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <body>{children}</body>
        </html>
    );
}
