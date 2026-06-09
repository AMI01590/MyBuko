"use client"

import Link from 'next/link'
import { Target, ArrowLeft, FileText } from 'lucide-react'

export default function TermsOfServicePage() {
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
                        <FileText className="w-4 h-4" />
                        Please read carefully
                    </div>
                    <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Terms of Service</h1>
                    <p className="text-gray-500 dark:text-slate-400 text-sm">Last updated: {lastUpdated}</p>
                </div>
            </section>

            {/* CONTENT */}
            <section className="py-16">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="space-y-10 text-gray-700 dark:text-slate-300">

                        <div>
                            <p className="text-lg leading-relaxed">
                                These Terms of Service ("Terms") govern your use of MYBUKO ("the Service"), operated by the MYBUKO team. By creating an account or using the Service, you agree to be bound by these Terms. If you do not agree, please do not use MYBUKO.
                            </p>
                        </div>

                        <Section title="1. Eligibility">
                            <p>
                                You must be at least 13 years old to use MYBUKO. By using the Service, you confirm that you meet this requirement. If you are under 18, you should have parental or guardian consent.
                            </p>
                        </Section>

                        <Section title="2. Your Account">
                            <ul>
                                <li>You are responsible for maintaining the confidentiality of your login credentials.</li>
                                <li>You agree to provide accurate information when registering.</li>
                                <li>You must not share your account with others or use someone else's account.</li>
                                <li>You are responsible for all activity that occurs under your account.</li>
                                <li>Notify us immediately at <a href="mailto:team@mybuko.com" className="text-blue-600 dark:text-blue-400 hover:underline">team@mybuko.com</a> if you suspect unauthorized access.</li>
                            </ul>
                        </Section>

                        <Section title="3. Acceptable Use">
                            <p>You agree to use MYBUKO only for lawful purposes. You must not:</p>
                            <ul>
                                <li>Post content that is harmful, offensive, abusive, threatening, or discriminatory</li>
                                <li>Harass, bully, or intimidate other users</li>
                                <li>Share false or misleading information</li>
                                <li>Upload content that violates copyright or intellectual property rights</li>
                                <li>Attempt to hack, reverse-engineer, or interfere with the Service</li>
                                <li>Use automated bots or scrapers to access the platform</li>
                                <li>Create multiple accounts to circumvent bans or restrictions</li>
                                <li>Upload illegal content of any kind</li>
                            </ul>
                            <p>We reserve the right to suspend or terminate accounts that violate these rules.</p>
                        </Section>

                        <Section title="4. User Content">
                            <p>
                                You retain ownership of content you create on MYBUKO — your goals, notes, stories, and posts are yours. By posting content, you grant MYBUKO a non-exclusive, royalty-free, worldwide license to display and store your content as needed to operate the Service.
                            </p>
                            <p>
                                You are solely responsible for the content you post. MYBUKO does not endorse user-generated content and is not liable for any content posted by users.
                            </p>
                        </Section>

                        <Section title="5. Community & Social Features">
                            <p>
                                MYBUKO includes community features such as public goals, stories, likes, comments, and a following system. When you mark content as public, it may be visible to all MYBUKO users. Be respectful of others in the community.
                            </p>
                            <p>
                                We may remove content that violates these Terms or our community standards at our discretion, without prior notice.
                            </p>
                        </Section>

                        <Section title="6. AI Features">
                            <p>
                                MYBUKO uses AI-powered features to suggest goals, generate milestones, and provide progress tips. These are suggestions only — we do not guarantee their accuracy, suitability, or completeness. AI-generated content should not be taken as professional advice (financial, medical, legal, or otherwise).
                            </p>
                        </Section>

                        <Section title="7. Privacy">
                            <p>
                                Your use of MYBUKO is also governed by our{' '}
                                <Link href="/privacy" className="text-blue-600 dark:text-blue-400 hover:underline">Privacy Policy</Link>,
                                which is incorporated into these Terms by reference.
                            </p>
                        </Section>

                        <Section title="8. Intellectual Property">
                            <p>
                                All content, design, branding, and code that makes up MYBUKO — excluding user-generated content — is owned by the MYBUKO team. You may not copy, reproduce, or distribute any part of the Service without our written permission.
                            </p>
                        </Section>

                        <Section title="9. Account Termination">
                            <p>
                                You may delete your account at any time from your account settings. We may suspend or terminate your account at our discretion if you violate these Terms, with or without notice.
                            </p>
                            <p>
                                Upon termination, your access to the Service will cease. We may retain certain data as required by law or for legitimate business purposes.
                            </p>
                        </Section>

                        <Section title="10. Disclaimer of Warranties">
                            <p>
                                MYBUKO is provided "as is" and "as available" without warranties of any kind, either express or implied. We do not guarantee that the Service will be uninterrupted, error-free, or completely secure. Use the Service at your own risk.
                            </p>
                        </Section>

                        <Section title="11. Limitation of Liability">
                            <p>
                                To the fullest extent permitted by law, the MYBUKO team shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of the Service, including loss of data, loss of profits, or any other damages, even if we have been advised of the possibility of such damages.
                            </p>
                        </Section>

                        <Section title="12. Changes to These Terms">
                            <p>
                                We may update these Terms from time to time. We will update the "Last updated" date when we do. Continued use of MYBUKO after changes constitutes acceptance of the revised Terms. If you disagree with a change, you should stop using the Service.
                            </p>
                        </Section>

                        <Section title="13. Governing Law">
                            <p>
                                These Terms are governed by the laws of India. Any disputes shall be resolved under the jurisdiction of Indian courts.
                            </p>
                        </Section>

                        <Section title="14. Contact Us">
                            <p>
                                If you have questions about these Terms, contact us at{' '}
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
                        <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
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
