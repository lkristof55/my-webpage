"use client";
import { motion } from "framer-motion";

export default function Home() {
    return (
        <main className="bg-[#0b0d1a] text-white min-h-screen flex flex-col">

            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-center">
                <img
                    src="/header.jpeg"
                    alt="Dream Lottery Background"
                    className="absolute inset-0 w-full h-full object-cover opacity-40"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-[#0b0d1a]/95" />

                <motion.div
                    className="relative z-10 text-center px-6"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <h1 className="text-5xl md:text-7xl font-bold mb-4 drop-shadow-lg">
                        Enter your dream. <br /> Win the jackpot.
                    </h1>
                    <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8">
                        Dream Lottery is a provably fair, community-owned lottery built on Solana.
                        Your dreams become <span className="text-purple-400">on-chain tickets</span>.
                    </p>
                    <div className="flex flex-col md:flex-row gap-4 justify-center">
                        <a
                            href="/Dream_Lottery_Whitepaper.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-medium transition"
                        >
                            📄 Read Whitepaper
                        </a>
                        <a
                            href="#about"
                            className="px-6 py-3 border border-purple-400 text-purple-400 rounded-lg hover:bg-purple-400 hover:text-black transition"
                        >
                            Learn More
                        </a>
                    </div>
                </motion.div>
            </section>

            {/* About Section */}
            <section id="about" className="py-20 px-6 bg-[#0f1125]">
                <div className="max-w-5xl mx-auto text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">What is Dream Lottery?</h2>
                    <p className="text-gray-300">
                        A blockchain-powered lottery where imagination meets reality. Built on
                        <span className="text-purple-400"> Solana</span>, designed for fairness, transparency, and community.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    <div className="bg-[#161830] p-6 rounded-xl shadow-lg hover:scale-105 transition">
                        <h3 className="text-xl font-semibold mb-2">⚡ Fast & Cheap</h3>
                        <p className="text-gray-400">Thanks to Solana, transactions are instant and cost fractions of a cent.</p>
                    </div>
                    <div className="bg-[#161830] p-6 rounded-xl shadow-lg hover:scale-105 transition">
                        <h3 className="text-xl font-semibold mb-2">🎲 Fair Lottery</h3>
                        <p className="text-gray-400">Every draw is verifiable on-chain. No middlemen, no hidden tricks.</p>
                    </div>
                    <div className="bg-[#161830] p-6 rounded-xl shadow-lg hover:scale-105 transition">
                        <h3 className="text-xl font-semibold mb-2">🌍 Community-Owned</h3>
                        <p className="text-gray-400">Driven by token holders — $DREAM powers governance and rewards.</p>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-6 bg-black text-center text-gray-400 text-sm">
                © {new Date().getFullYear()} Dream Lottery — Built on Solana 🚀
            </footer>
        </main>
    );
}
