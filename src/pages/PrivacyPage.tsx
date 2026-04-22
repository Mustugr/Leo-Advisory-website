import { LegalLayout } from "./_LegalLayout";
import { site } from "../data/site";

export function PrivacyPage() {
  return (
    <LegalLayout
      eyebrow="Privacy Policy"
      title="How we collect, use, and protect your information."
      subtitle="Plain-language overview of the data we gather and your rights as a visitor or client."
      updated="September 30, 2025"
      sections={[
        {
          heading: "Information we collect",
          paragraphs: [
            `We collect information you provide directly — name, email, phone, company, and any details you include in a contact form submission or client intake. For active clients, we also receive financial data necessary to deliver services, always through secure channels.`,
            `We collect usage data automatically, including pages viewed, referring URL, browser type, device type, and approximate location based on IP. This helps us understand what's useful and what isn't.`,
          ],
        },
        {
          heading: "How we use information",
          paragraphs: [
            `Inquiry data is used to respond to you and, if you become a client, to deliver services. Client financial data is used only for the engagement you've contracted — never repurposed or analyzed for unrelated reasons.`,
            `We do not sell personal information. We never rent, share with marketers, or use your data for advertising that isn't about Leo Advisory's own services.`,
          ],
        },
        {
          heading: "Cookies and analytics",
          paragraphs: [
            `We use cookies and analytics to measure website performance and traffic patterns in aggregate. You can disable cookies in your browser without losing core functionality.`,
          ],
        },
        {
          heading: "Sharing with third parties",
          paragraphs: [
            `We may share information with service providers (e.g., hosting, email, payroll platforms) strictly as needed to deliver services. Those providers are bound by confidentiality obligations.`,
            `We disclose information only when required by law — for example, in response to a valid subpoena or regulatory request.`,
          ],
        },
        {
          heading: "Security",
          paragraphs: [
            `We protect client and visitor data using industry-standard safeguards — encrypted transit, access controls, and secure document portals for sensitive exchanges. No system is perfectly secure, so we also limit the data we hold to what we need.`,
          ],
        },
        {
          heading: "Your rights",
          paragraphs: [
            `Depending on your jurisdiction, you may have the right to access, correct, or delete the personal information we hold about you. To exercise those rights, email ${site.email}.`,
          ],
        },
        {
          heading: "Third-party links",
          paragraphs: [
            `Our site links to external resources for your convenience. Those sites have their own privacy practices, and we aren't responsible for their handling of your data.`,
          ],
        },
        {
          heading: "Updates to this policy",
          paragraphs: [
            `We update this policy as our practices or applicable laws change. Material changes are reflected in the "last updated" date at the top of this page.`,
          ],
        },
        {
          heading: "Contact",
          paragraphs: [
            `Questions about this policy? Reach us at ${site.email} or ${site.phone}. Office: ${site.address}.`,
          ],
        },
      ]}
    />
  );
}
