"use client"

import Link from 'next/link'
import { Target, Mail, ArrowLeft, MessageSquare } from 'lucide-react'

const Twitter = ({ className }: { className?: string }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
)

const Instagram = ({ className }: { className?: string }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
)

const Github = ({ className }: { className?: string }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
        <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
)


export default function ContactPage() {
    return (
        <div className="min-h-screen bg-white text-slate-950 dark:bg-slate-950 dark:text-slate-100 transition-colors duration-300">

            {/* NAVBAR */}
            <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200 dark:bg-slate-950/80 dark:border-slate-700">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <Link href="/" className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-teal-500 rounded-lg flex items-center justify-center">
                                <Target className="w-5 h-5 text-white" />
                            </div>
                            <span className="text-xl font-bold text-gray-900 dark:text-white">MYBUKO</span>
                        </Link>
                        <Link
                            href="/"
                            className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 dark:text-slate-300 dark:hover:text-white transition-colors"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            Back to Home
                        </Link>
                    </div>
                </div>
            </nav>

            {/* HERO */}
            <section className="py-20 bg-gradient-to-br from-blue-50 to-teal-50 dark:from-slate-900 dark:to-slate-950">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full px-4 py-2 text-sm font-medium mb-6">
                        <MessageSquare className="w-4 h-4" />
                        Get in Touch
                    </div>
                    <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
                        We'd love to
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-500">
                            hear from you
                        </span>
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-slate-300">
                        Got a question, feedback, or just want to say hi? Reach out — we're a small team and we actually read every message.
                    </p>
                </div>
            </section>

            {/* CONTACT OPTIONS */}
            <section className="py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-8 mb-16">

                        {/* Email */}
                        <div className="bg-gray-50 dark:bg-slate-900 rounded-2xl p-8 border border-gray-100 dark:border-slate-700">
                            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-teal-500 rounded-xl flex items-center justify-center mb-4">
                                <Mail className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Email Us</h3>
                            <p className="text-gray-600 dark:text-slate-400 mb-4 text-sm leading-relaxed">
                                For support, feedback, partnerships, or anything else — drop us a line. We aim to reply within 24–48 hours.
                            </p>
                            <a
                                href="mailto:team@mybuko.com"
                                className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold hover:underline"
                            >
                                <Mail className="w-4 h-4" />
                                team@mybuko.com
                            </a>
                        </div>

                        {/* Social */}
                        <div className="bg-gray-50 dark:bg-slate-900 rounded-2xl p-8 border border-gray-100 dark:border-slate-700">
                            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-4">
                                <MessageSquare className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Follow Us</h3>
                            <p className="text-gray-600 dark:text-slate-400 mb-6 text-sm leading-relaxed">
                                Stay updated with new features, inspiration, and community highlights.
                            </p>
                            <div className="flex flex-col gap-3">
                                <a
                                    href="https://twitter.com/mybuko"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 text-gray-700 dark:text-slate-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors text-sm font-medium"
                                >
                                    <Twitter className="w-5 h-5" />
                                    @mybuko on X (Twitter)
                                </a>
                                <a
                                    href="https://instagram.com/mybuko"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 text-gray-700 dark:text-slate-300 hover:text-pink-500 dark:hover:text-pink-400 transition-colors text-sm font-medium"
                                >
                                    <Instagram className="w-5 h-5" />
                                    @mybuko on Instagram
                                </a>
                                <a
                                    href="https://github.com/mybuko"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 text-gray-700 dark:text-slate-300 hover:text-gray-900 dark:hover:text-white transition-colors text-sm font-medium"
                                >
                                    <Github className="w-5 h-5" />
                                    mybuko on GitHub
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* FAQ nudge */}
                    <div className="bg-gradient-to-br from-blue-600 to-teal-600 rounded-2xl p-8 text-center text-white">
                        <h3 className="text-xl font-bold mb-2">Before you write to us —</h3>
                        <p className="text-blue-100 mb-4 text-sm">
                            Most questions about how the app works can be answered by exploring your dashboard. But if something is broken or you have a genuine concern, we're all ears.
                        </p>
                        <Link
                            href="/dashboard"
                            className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-2.5 rounded-xl font-semibold text-sm hover:shadow-lg transition-all"
                        >
                            Go to Dashboard
                        </Link>
                    </div>
                </div>
            </section>

            {/* FOOTER */}
            <footer className="bg-gray-900 text-gray-400 py-8">
                <div className="max-w-7xl mx-auto px-4 text-center text-sm">
                    <p>© 2026 MYBUKO. All rights reserved.</p>
                    <div className="flex justify-center gap-6 mt-4">
                        <Link href="/about" className="hover:text-white transition-colors">About</Link>
                        <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </footer>
        </div>
    )
}
