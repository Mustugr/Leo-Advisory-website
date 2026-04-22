import { LegalLayout } from "./_LegalLayout";
import { site } from "../data/site";

export function DisclaimerPage() {
  return (
    <LegalLayout
      eyebrow="Disclaimer"
      title="Important notes about the content on this site."
      updated="September 30, 2025"
      sections={[
        {
          heading: "Informational only",
          paragraphs: [
            `Content on leo-advisory.com — articles, calculators, templates, and any other material — is provided for general information and educational purposes only.`,
            `It is not accounting, tax, legal, or financial advice, and it should not be relied upon as a substitute for advice from a qualified professional who understands your specific situation.`,
          ],
        },
        {
          heading: "No engagement formed",
          paragraphs: [
            `Reading, downloading, or interacting with this site does not create a client relationship with ${site.legalName}. Engagements begin only after a signed agreement.`,
          ],
        },
        {
          heading: "Accuracy and timeliness",
          paragraphs: [
            `We strive to keep content accurate and current, but tax, regulatory, and economic conditions change. Information on the site may not reflect the most recent developments. Always verify with a qualified professional before acting.`,
          ],
        },
        {
          heading: "Third-party content",
          paragraphs: [
            `Links to third-party resources are provided for convenience. We don't control those sites and can't guarantee the accuracy, completeness, or timeliness of their content.`,
          ],
        },
        {
          heading: "Limitation of liability",
          paragraphs: [
            `To the fullest extent permitted by law, ${site.legalName} is not liable for any loss or damage arising from reliance on information obtained through this site.`,
          ],
        },
        {
          heading: "Contact",
          paragraphs: [
            `For advice specific to your business, reach us at ${site.email} or ${site.phone}.`,
          ],
        },
      ]}
    />
  );
}
