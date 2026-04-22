import { LegalLayout } from "./_LegalLayout";
import { site } from "../data/site";

export function AccessibilityPage() {
  return (
    <LegalLayout
      eyebrow="Accessibility Statement"
      title="We're working to make this site usable for everyone."
      updated="September 30, 2025"
      sections={[
        {
          heading: "Our commitment",
          paragraphs: [
            `${site.legalName} is committed to digital accessibility. We want visitors of all abilities to be able to find the information they need and contact us without barriers.`,
          ],
        },
        {
          heading: "Standards",
          paragraphs: [
            `We aim to align with the Web Content Accessibility Guidelines (WCAG) 2.1 at Level AA and follow accessibility best practices across design, content, and development.`,
          ],
        },
        {
          heading: "Accessibility features",
          paragraphs: [
            `This site is built with accessibility in mind, including:`,
            `• Keyboard navigability across every interactive element`,
            `• Text alternatives for meaningful images`,
            `• Sufficient contrast between text and background`,
            `• Scalable typography and responsive layouts`,
            `• Semantic HTML and ARIA attributes where appropriate`,
          ],
        },
        {
          heading: "Ongoing review",
          paragraphs: [
            `Accessibility is an ongoing effort. We review the site regularly and address issues as we find them or as users report them.`,
          ],
        },
        {
          heading: "Feedback",
          paragraphs: [
            `If you run into an accessibility barrier on the site — or if you have a suggestion for improving access — please email ${site.email} or call ${site.phone}. We take feedback seriously and aim to respond within one business day.`,
          ],
        },
        {
          heading: "Contact",
          paragraphs: [
            `${site.legalName} · ${site.address} · ${site.email} · ${site.phone}`,
          ],
        },
      ]}
    />
  );
}
