"use client"

import Link from 'next/link'
import { Target, ArrowLeft, Lock } from 'lucide-react'

export default function PrivacyPolicyPage() {
    const lastUpdated = 'June 9, 2026'

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
            <section className="py-16 bg-gradient-to-br from-blue-50 to-teal-50 dark:from-slate-900 dark:to-slate-950">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full px-4 py-2 text-sm font-medium mb-6">
                        <Lock className="w-4 h-4" />
                        Your privacy matters
                    </div>
                    <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Privacy Policy</h1>
                    <p className="text-gray-500 dark:text-slate-400 text-sm">Last updated: {lastUpdated}</p>
                </div>
            </section>

            {/* CONTENT */}
            <section className="py-16">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="prose prose-gray dark:prose-invert max-w-none space-y-10 text-gray-700 dark:text-slate-300">

                        <div>
                            <p className="text-lg leading-relaxed">
                                Welcome to MYBUKO. We take your privacy seriously. This Privacy Policy explains what information we collect, how we use it, and your rights around it. By using MYBUKO, you agree to the practices described here.
                            </p>
                        </div>

                        <Section title="1. Information We Collect">
                            <p>We collect information to provide and improve our services:</p>
                            <ul>
                                <li><strong>Account Information:</strong> When you register, we collect your name, email address, and a hashed password.</li>
                                <li><strong>Profile Information:</strong> Any information you add to your profile, such as a bio or profile photo.</li>
                                <li><strong>Goal & Activity Data:</strong> Goals you create, milestones, notes, progress updates, budget information, and deadlines.</li>
                                <li><strong>Stories & Media:</strong> Photos and videos you upload to the stories feature, stored via Cloudinary.</li>
                                <li><strong>Social Interactions:</strong> Likes, comments, and follows on community posts and goals.</li>
                                <li><strong>Usage Data:</strong> Pages visited, features used, and general interaction patterns to help us improve the app.</li>
                            </ul>
                        </Section>

                        <Section title="2. How We Use Your Information">
                            <ul>
                                <li>To create and manage your account</li>
                                <li>To display your goals, milestones, and progress on your dashboard</li>
                                <li>To enable community features like explore, stories, likes, and comments</li>
                                <li>To power AI features (goal recommendations, milestone generation, progress tips)</li>
                                <li>To send important service notifications (e.g. account changes)</li>
                                <li>To improve MYBUKO's features and user experience</li>
                            </ul>
                            <p>We do <strong>not</strong> sell your data. We do not use your data for advertising.</p>
                        </Section>

                        <Section title="3. AI Features">
                            <p>
                                MYBUKO uses the Groq API to power AI-based features such as goal recommendations, milestone generation, and progress tips. When you use these features, relevant context (such as goal category and description) is sent to Groq's API to generate responses. No personally identifiable information is intentionally included in these requests. Please review Groq's privacy policy for their data handling practices.
                            </p>
                        </Section>

                        <Section title="4. Media Storage">
                            <p>
                                Photos and videos uploaded to the stories feature are stored using Cloudinary, a third-party media management service. By uploading content, you agree to Cloudinary's terms of service. We store the URLs of your uploaded media in our database.
                            </p>
                        </Section>

                        <Section title="5. Data Sharing">
                            <p>We only share your data with:</p>
                            <ul>
                                <li><strong>Service Providers:</strong> Railway (database hosting), Cloudinary (media storage), Groq (AI features) — only as necessary to run the platform.</li>
                                <li><strong>Legal Requirements:</strong> If required by law or to protect the rights and safety of our users.</li>
                            </ul>
                            <p>We never sell your personal data to third parties.</p>
                        </Section>

                        <Section title="6. Public vs Private Content">
                            <p>
                                Goals and posts you mark as <strong>public</strong> may be visible to other MYBUKO users on the Explore page. Goals marked as <strong>private</strong> are only visible to you. Please be mindful of what you share publicly.
                            </p>
                        </Section>

                        <Section title="7. Data Security">
                            <p>
                                We take reasonable measures to protect your data, including password hashing, JWT-based authentication, and secure HTTPS connections. However, no system is 100% secure. We encourage you to use a strong, unique password for your account.
                            </p>
                        </Section>

                        <Section title="8. Your Rights">
                            <p>You have the right to:</p>
                            <ul>
                                <li>Access the data we hold about you</li>
                                <li>Correct inaccurate information in your profile</li>
                                <li>Delete your account and associated data</li>
                                <li>Request a copy of your data</li>
                            </ul>
                            <p>
                                To exercise any of these rights, contact us at{' '}
                                <a href="mailto:team@mybuko.com" className="text-blue-600 dark:text-blue-400 hover:underline">team@mybuko.com</a>.
                            </p>
                        </Section>

                        <Section title="9. Cookies & Local Storage">
                            <p>
                                MYBUKO uses browser localStorage to store your authentication token and basic user info (name, email) for session management. We use a session cookie for authentication. We do not use third-party tracking cookies or advertising cookies.
                            </p>
                        </Section>

                        <Section title="10. Children's Privacy">
                            <p>
                                MYBUKO is not intended for children under the age of 13. We do not knowingly collect personal information from children. If you believe a child has created an account, please contact us at{' '}
                                <a href="mailto:team@mybuko.com" className="text-blue-600 dark:text-blue-400 hover:underline">team@mybuko.com</a>.
                            </p>
                        </Section>

                        <Section title="11. Changes to This Policy">
                            <p>
                                We may update this Privacy Policy from time to time. When we do, we'll update the "Last updated" date at the top. Continued use of MYBUKO after changes means you accept the updated policy.
                            </p>
                        </Section>

                        <Section title="12. Contact Us">
                            <p>
                                Questions about this policy? Reach out at{' '}
                                <a href="mailto:team@mybuko.com" className="text-blue-600 dark:text-blue-400 hover:underline">team@mybuko.com</a>{' '}
                                or visit our <Link href="/contact" className="text-blue-600 dark:text-blue-400 hover:underline">Contact page</Link>.
                            </p>
                        </Section>

                    </div>
                </div>
            </section>

            {/* FOOTER */}
            <footer className="bg-gray-900 text-gray-400 py-8">
                <div className="max-w-7xl mx-auto px-4 text-center text-sm">
                    <p>© 2026 MYBUKO. All rights reserved.</p>
                    <div className="flex justify-center gap-6 mt-4">
                        <Link href="/about" className="hover:text-white transition-colors">About</Link>
                        <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                        <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
                    </div>
                </div>
            </footer>
        </div>
    )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
    return (
        <div>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{title}</h2>
            <div className="space-y-3 leading-relaxed [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_strong]:text-gray-900 [&_strong]:dark:text-white">
                {children}
            </div>
        </div>
    )
}
