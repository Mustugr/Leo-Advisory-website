import { LegalLayout } from "./_LegalLayout";
import { site } from "../data/site";

export function TermsPage() {
  return (
    <LegalLayout
      eyebrow="Terms of Service"
      title="The terms that govern your use of this website."
      updated="September 30, 2025"
      sections={[
        {
          heading: "Acceptance",
          paragraphs: [
            `By accessing leo-advisory.com you agree to these terms. If you don't agree, please discontinue use of the site.`,
          ],
        },
        {
          heading: "Informational only",
          paragraphs: [
            `The content on this website is provided for general information. Nothing on the site constitutes accounting, tax, legal, or financial advice, and no client relationship is formed by reading it.`,
            `For advice specific to your business, contact us directly to establish an engagement.`,
          ],
        },
        {
          heading: "Intellectual property",
          paragraphs: [
            `All content — text, images, logos, templates, and the arrangement of the site — is the property of ${site.legalName} or used with permission. You may view and share with attribution, but may not reproduce, modify, or redistribute the content for commercial purposes without written permission.`,
          ],
        },
        {
          heading: "User conduct",
          paragraphs: [
            `Don't attempt to interfere with the site's operation, probe for vulnerabilities, or use it in ways that violate applicable law.`,
          ],
        },
        {
          heading: "Third-party content",
          paragraphs: [
            `We link to third-party sites for reference. We don't control those sites, endorse their content, or take responsibility for their policies.`,
          ],
        },
        {
          heading: "Disclaimers",
          paragraphs: [
            `The site is provided "as is" without warranties of any kind. We disclaim all warranties to the extent permitted by law, including warranties of merchantability, fitness for a particular purpose, and non-infringement.`,
          ],
        },
        {
          heading: "Limitation of liability",
          paragraphs: [
            `${site.legalName} will not be liable for any indirect, incidental, or consequential damages arising from your use of the site. Our maximum aggregate liability for any claim related to the website is limited to $100.`,
          ],
        },
        {
          heading: "Governing law",
          paragraphs: [
            `These terms are governed by the laws of the State of New York, without regard to conflict-of-laws principles. Any dispute will be resolved in the state or federal courts located in New York County, New York.`,
          ],
        },
        {
          heading: "Changes",
          paragraphs: [
            `We may update these terms. The "last updated" date reflects the most recent revision.`,
          ],
        },
        {
          heading: "Contact",
          paragraphs: [
            `Questions? Reach us at ${site.email}, ${site.phone}, or ${site.address}.`,
          ],
        },
      ]}
    />
  );
}
