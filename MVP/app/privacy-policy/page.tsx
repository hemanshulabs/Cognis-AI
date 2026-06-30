import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Cognis",
  description: "Privacy Policy for the Cognis financial engagement platform.",
};

const sections = [
  {
    title: "1. What We Collect",
    body: `Cognis processes banking events such as transactions, balance changes, login activity, and EMI status updates. These events are used solely to build a unified customer profile and to determine the next best action within the platform. We do not collect data beyond what is required for the platform to function.`,
  },
  {
    title: "2. How We Use It",
    body: `Collected data is used to detect money moments, score customer context, rank eligible actions, and deliver timely engagement through approved channels. Every action passes through compliance checks before it reaches a customer. No data is used for purposes outside the Cognis pipeline without explicit consent.`,
  },
  {
    title: "3. Data Sharing",
    body: `Cognis does not sell, rent, or share personal data with third parties for marketing purposes. Data may be shared with integrated banking systems, channel delivery providers, and compliance services strictly as part of the platform's operational workflow.`,
  },
  {
    title: "4. Data Security",
    body: `All data in transit is encrypted using industry-standard TLS. Data at rest is stored in encrypted databases with access controls limited to authorised services. The platform follows SOC 2 and RBI compliance guidelines for data handling in financial systems.`,
  },
  {
    title: "5. Data Retention",
    body: `Customer profiles and event histories are retained for as long as the customer relationship is active. Historical action logs and audit trails are maintained for regulatory compliance. Data is purged in accordance with applicable data retention policies upon account closure.`,
  },
  {
    title: "6. Your Rights",
    body: `Customers have the right to request access to their data, request correction of inaccuracies, or request deletion of their profile. Such requests can be raised through the bank's existing customer support channels. Cognis processes these requests through the integrated CRM workflow.`,
  },
  {
    title: "7. Cookies and Tracking",
    body: `The Cognis platform does not use cookies or tracking technologies on end-user devices. All event data is sourced directly from integrated banking systems and authenticated APIs.`,
  },
  {
    title: "8. Changes to This Policy",
    body: `We may update this policy from time to time. Material changes will be communicated through the platform's admin console and, where required, directly to affected customers through their preferred channel.`,
  },
];

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[#f1ece8] text-[#322c2b]">
      <nav className="fixed inset-x-0 top-0 z-50 flex justify-center pt-[clamp(12px,1.05vw,20px)]">
        <Link
          href="/"
          className="flex h-[clamp(50px,3.55vw,68px)] items-center gap-3 rounded-full bg-white px-8 text-[clamp(15px,1.03vw,19px)] font-semibold tracking-[-0.02em] text-[#322c2b] transition-opacity hover:opacity-75"
        >
          <span className="h-2 w-2 bg-[#827367]" />
          Cognis
        </Link>
      </nav>

      <main className="mx-auto max-w-[780px] px-5 pt-[160px] pb-[180px]">
        <h1 className="text-[clamp(36px,3.2vw,56px)] font-semibold leading-[1.02] tracking-[-0.05em] text-black">
          Privacy Policy
        </h1>
        <p className="mt-4 text-[15px] leading-[1.32] tracking-[-0.02em] text-[#827367]">
          Effective date: June 2026
        </p>

        <div className="mt-[56px] space-y-[52px]">
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="text-[clamp(20px,1.4vw,26px)] font-semibold leading-[1.1] tracking-[-0.035em] text-black">
                {section.title}
              </h2>
              <p className="mt-4 text-[clamp(15px,0.95vw,17px)] leading-[1.55] tracking-[-0.01em] text-[#4a4a4a]">
                {section.body}
              </p>
            </section>
          ))}
        </div>

        <div className="mt-[72px] h-px w-full bg-[#c6b8ae]" />

        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 text-[15px] font-medium tracking-[-0.02em] text-[#827367] transition-colors hover:text-[#322c2b]"
        >
          <span>&larr;</span> Back to Cognis
        </Link>
      </main>

      <footer className="bg-[#322c2b] px-5 py-10 text-center">
        <p className="text-[15px] leading-none tracking-[-0.03em] text-[#827367]">
          Cognis 2026
        </p>
      </footer>
    </div>
  );
}
