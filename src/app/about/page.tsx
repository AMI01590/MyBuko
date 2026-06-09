"use client"

import Link from 'next/link'
import { Target, Heart, Sparkles, Users, Globe, ArrowLeft } from 'lucide-react'

export default function AboutPage() {
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
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full px-4 py-2 text-sm font-medium mb-6">
                        <Sparkles className="w-4 h-4" />
                        Our Story
                    </div>
                    <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                        We believe every dream
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-500">
                            deserves a plan
                        </span>
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-slate-300 max-w-2xl mx-auto">
                        MYBUKO was born from a simple frustration — dreams stay dreams because no one shows you how to actually start.
                    </p>
                </div>
            </section>

            {/* MISSION */}
            <section className="py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Our Mission</h2>
                            <p className="text-gray-600 dark:text-slate-300 text-lg leading-relaxed mb-4">
                                At MYBUKO, we're on a mission to turn bucket lists from wishful thinking into real, lived experiences.
                            </p>
                            <p className="text-gray-600 dark:text-slate-300 text-lg leading-relaxed mb-4">
                                We built a space where you can set meaningful goals, track your progress with milestones, manage your budget, and share the journey with people who actually care.
                            </p>
                            <p className="text-gray-600 dark:text-slate-300 text-lg leading-relaxed">
                                Because a bucket list shouldn't just be a list — it should be a roadmap.
                            </p>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { icon: Target, label: 'Goals Tracked', value: '10,000+', color: 'text-blue-500' },
                                { icon: Users, label: 'Dreamers Joined', value: '2,500+', color: 'text-teal-500' },
                                { icon: Globe, label: 'Countries', value: '30+', color: 'text-purple-500' },
                                { icon: Heart, label: 'Dreams Achieved', value: '1,200+', color: 'text-pink-500' },
                            ].map(({ icon: Icon, label, value, color }) => (
                                <div key={label} className="bg-gray-50 dark:bg-slate-900 rounded-2xl p-6 text-center border border-gray-100 dark:border-slate-700">
                                    <Icon className={`w-6 h-6 ${color} mx-auto mb-2`} />
                                    <p className="text-2xl font-bold text-gray-900 dark:text-white">{value}</p>
                                    <p className="text-sm text-gray-500 dark:text-slate-400">{label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* STORY */}
            <section className="py-20 bg-gray-50 dark:bg-slate-900">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">How It Started</h2>
                    <div className="space-y-6 text-gray-600 dark:text-slate-300 text-lg leading-relaxed">
                        <p>
                            MYBUKO started as a college project with a question: <em>"Why do people write bucket lists but almost never finish them?"</em>
                        </p>
                        <p>
                            The answer was simple — there was no structure, no accountability, and no community. You'd write "travel to Japan" on a sticky note and forget about it in a week.
                        </p>
                        <p>
                            So we built MYBUKO — a full-stack platform where you can break goals into milestones, set deadlines, track budgets, and follow others on the same journey. We added AI to help you plan smarter, and a community to keep you inspired.
                        </p>
                        <p>
                            What started as a side project became something we genuinely use every day. We hope it becomes something you do too.
                        </p>
                    </div>
                </div>
            </section>

            {/* VALUES */}
            <section className="py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">What We Stand For</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                emoji: '🎯',
                                title: 'Intentional Living',
                                desc: 'We believe life is better when you\'re working toward something that excites you.'
                            },
                            {
                                emoji: '🤝',
                                title: 'Community First',
                                desc: 'Dreams are more achievable when shared. We built MYBUKO to be social at its core.'
                            },
                            {
                                emoji: '✨',
                                title: 'Progress over Perfection',
                                desc: 'A 10% completed goal is better than a goal never started. We celebrate every step.'
                            },
                        ].map(({ emoji, title, desc }) => (
                            <div key={title} className="text-center p-6 rounded-2xl bg-gray-50 dark:bg-slate-900 border border-gray-100 dark:border-slate-700">
                                <div className="text-4xl mb-4">{emoji}</div>
                                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{title}</h3>
                                <p className="text-gray-600 dark:text-slate-400 text-sm leading-relaxed">{desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* BUILT BY */}
            <section className="py-16 bg-gradient-to-br from-blue-600 to-teal-600">
                <div className="max-w-2xl mx-auto px-4 text-center">
                    <p className="text-blue-100 text-lg mb-2">This product is</p>
                    <p className="text-white text-2xl font-bold flex items-center justify-center gap-2">
                        Built with <Heart className="w-6 h-6 text-red-400 fill-red-400" /> by Ami and Akanksha
                    </p>
                    <p className="text-blue-100 mt-4 text-sm">
                        Two developers who believe the best projects are the ones you build for yourself first.
                    </p>
                </div>
            </section>

            {/* FOOTER */}
            <footer className="bg-gray-900 text-gray-400 py-8">
                <div className="max-w-7xl mx-auto px-4 text-center text-sm">
                    <p>© 2026 MYBUKO. All rights reserved.</p>
                    <div className="flex justify-center gap-6 mt-4">
                        <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                        <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
                    </div>
                </div>
            </footer>
        </div>
    )
}
