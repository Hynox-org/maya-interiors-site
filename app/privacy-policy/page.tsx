import React from 'react';
import Link from "next/link";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-[var(--color-background)] py-12 px-4 select-none">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-lg">
          <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
            <Link href="/" className="flex flex-col items-start cursor-pointer">
              <div className="text-3xl font-bold text-[#8BA186]">
                Livinza
              </div>
              <div className="text-lg font-light text-primary -mt-2">
                interior for you
              </div>
            </Link>
          </div>
        </header>
        <div className="mb-12">
        </div>

        {/* Effective Date */}
        <div className="mb-8">
          <p className="text-[var(--color-text)]">
            <strong>Effective Date:</strong> 17 September 2025
          </p>
        </div>

        {/* Introduction */}
        <div className="mb-8">
          <p className="text-[var(--color-text)] leading-relaxed">
            At Livinza Interiors ("we," "our," or "us"), we value your privacy. This page explains how we collect, use, and protect the personal information you provide when you visit{' '}
            <a href="https://livinza.in" className="text-[var(--color-primary)] hover:underline">
              https://livinza.in
            </a>
            , request a quote, or use our services.
          </p>
        </div>

        {/* Section 1 */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-[var(--color-text)] mb-4">
            1. Information We Collect
          </h2>
          <p className="text-[var(--color-text)] mb-4 leading-relaxed">
            We may collect:
          </p>
          <ul className="list-disc list-inside space-y-2 text-[var(--color-text)] ml-4">
            <li>Contact details (name, email, phone) when you fill out forms, request a quote, or call us.</li>
            <li>Project details (property type, design needs, budget) that you share voluntarily.</li>
            <li>Technical data (IP address, browser, device, pages visited) through cookies, analytics tools, and advertising tags.</li>
          </ul>
          <p className="text-[var(--color-text)] mt-4 leading-relaxed">
            We do not knowingly collect data from anyone under 18.
          </p>
        </section>

        {/* Section 2 */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-[var(--color-text)] mb-4">
            2. How We Use Your Information
          </h2>
          <p className="text-[var(--color-text)] mb-4 leading-relaxed">
            We use the information to:
          </p>
          <ul className="list-disc list-inside space-y-2 text-[var(--color-text)] ml-4">
            <li>Provide and improve our interior-design and fit-out services.</li>
            <li>Answer enquiries, prepare quotes, and deliver projects.</li>
            <li>Send updates, offers, or newsletters (only if you've opted in).</li>
            <li>Analyse website performance and run advertising campaigns.</li>
          </ul>
        </section>

        {/* Section 3 */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-[var(--color-text)] mb-4">
            3. Cookies & Remarketing
          </h2>
          <p className="text-[var(--color-text)] mb-4 leading-relaxed">
            We use cookies and similar technologies for analytics and personalised ads through Google Ads, Facebook/Instagram, and other platforms.
          </p>
          <p className="text-[var(--color-text)] mb-4 leading-relaxed">
            These cookies help us understand visitor behaviour and show relevant ads after you visit our site.
          </p>
          <p className="text-[var(--color-text)] leading-relaxed">
            You can opt out of personalised advertising at any time via Google Ads Settings or by adjusting your browser settings.
          </p>
        </section>

        {/* Section 4 */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-[var(--color-text)] mb-4">
            4. Sharing of Information
          </h2>
          <p className="text-[var(--color-text)] mb-4 leading-relaxed">
            We don't sell your personal information. We may share it only with:
          </p>
          <ul className="list-disc list-inside space-y-2 text-[var(--color-text)] ml-4">
            <li>Service providers who help us host our site, run analytics, or deliver services.</li>
            <li>Government or legal authorities, if required by law.</li>
          </ul>
        </section>

        {/* Section 5 */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-[var(--color-text)] mb-4">
            5. Your Rights
          </h2>
          <p className="text-[var(--color-text)] mb-4 leading-relaxed">
            You may:
          </p>
          <ul className="list-disc list-inside space-y-2 text-[var(--color-text)] ml-4">
            <li>Request a copy of your personal data.</li>
            <li>Ask us to update or delete your data.</li>
            <li>Withdraw consent for marketing at any time (unsubscribe link or email).</li>
          </ul>
        </section>

        {/* Section 6 */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-[var(--color-text)] mb-4">
            6. Data Security
          </h2>
          <p className="text-[var(--color-text)] leading-relaxed">
            We take reasonable measures to protect your personal information against loss, misuse, or unauthorised access.
          </p>
        </section>

        {/* Section 7 - Contact */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-[var(--color-text)] mb-4">
            7. Contact Us
          </h2>
          <p className="text-[var(--color-text)] mb-4 leading-relaxed">
            If you have any questions about this policy or how we handle your data, please contact:
          </p>
          <div className="text-[var(--color-text)] space-y-1">
            <p className="font-semibold">Livinza Interiors</p>
            <p>Chennai, India</p>
            <p>
              Email:{' '}
              <a href="mailto:livinzainteriors@gmail.com" className="text-[var(--color-primary)] hover:underline">
                livinzainteriors@gmail.com
              </a>
            </p>
            <p>
              Phone:{' '}
              <a href="tel:+919840808883" className="text-[var(--color-primary)] hover:underline">
                +91 9840808883
              </a>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
