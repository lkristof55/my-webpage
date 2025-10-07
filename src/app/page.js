export default function Home() {
    return (
        <main className="relative bg-[#f8f5f0] text-[#1a1a1a] min-h-screen flex flex-col items-center justify-center font-serif px-6">

            {/* CA text in top-right corner */}
            <div className="absolute top-4 right-6 text-sm tracking-wide text-[#004225] font-semibold">
                CA: <span className="text-[#d4af37]">71Vjwjd2i5ic48PDsy9Eufj1MCkzVysG7uixSBXpzwwZ</span>
            </div>

            {/* Decorative side elements */}
            <div className="absolute left-4 top-1/4 h-1/2 w-px bg-[#d4af37] opacity-40"></div>
            <div className="absolute right-4 top-1/4 h-1/2 w-px bg-[#d4af37] opacity-40"></div>

            {/* Animated Dot */}
            <div className="w-12 h-12 bg-[#004225] rounded-full flex items-center justify-center shadow-md border border-[#d4af37] animate-bounce">
                <span className="text-xl text-[#d4af37]">•</span>
            </div>

            {/* Title */}
            <h1 className="text-5xl font-bold mt-6 text-[#004225] tracking-wide">
                DotCoin
            </h1>
            <p className="mt-3 text-lg italic text-[#3a3a3a]">
                The elegance of simplicity.
            </p>

            {/* Button */}
            <div className="flex mt-10">
                <a
                    href="/DotCoin_Whitepaper.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-10 py-3 border border-[#d4af37] text-[#004225] hover:bg-[#d4af37] hover:text-white transition rounded"
                >
                    Whitepaper
                </a>
            </div>

            {/* Footer */}
            <footer className="mt-16 text-[#555] text-sm text-center">
                © {new Date().getFullYear()} DotCoin — A timeless digital asset
            </footer>
        </main>
    );
}
