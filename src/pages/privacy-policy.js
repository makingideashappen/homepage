import * as React from "react";

import Layout from "../components/layout";
import Seo from "../components/seo";

const NotFoundPage = () => (
  <Layout>
    <h1>Privacy Policy</h1>
    <p>Effective Date: [Insert Date]</p>

    <h2>1. Information Collection</h2>
    <p>
      We may collect personal information that you voluntarily provide, such as
      your name, email address, and any other information you choose to provide
      when contacting us or subscribing to our newsletter. Additionally, certain
      information may be automatically collected when you visit the Website,
      including your IP address, browser type, operating system, and browsing
      activity.
    </p>

    <h2>2. Use of Information</h2>
    <p>
      Personal information collected may be used to communicate with you,
      respond to your inquiries, and provide you with updates and information
      related to the Website. We may also use collected information to analyze
      trends, improve the Website's content and functionality, and customize
      your experience.
    </p>

    <h2>3. Cookies</h2>
    <p>
      The Website may use cookies and similar tracking technologies to enhance
      your browsing experience. You can set your browser to refuse cookies or
      alert you when cookies are being sent.
    </p>

    <h2>4. Third-Party Links</h2>
    <p>
      The Website may contain links to third-party websites. We are not
      responsible for the privacy practices or content of such websites. We
      encourage you to review the privacy policies of these third-party sites.
    </p>

    <h2>5. Data Security</h2>
    <p>
      We implement reasonable security measures to protect the confidentiality
      and integrity of your personal information. However, no method of
      transmission over the internet or electronic storage is entirely secure,
      and we cannot guarantee absolute security.
    </p>

    <h2>6. Children's Privacy</h2>
    <p>
      The Website is not directed to individuals under the age of 13. We do not
      knowingly collect personal information from children. If you are a parent
      or guardian and believe that your child has provided us with personal
      information, please contact us, and we will promptly delete such
      information.
    </p>

    <h2>7. Updates to Privacy Policy</h2>
    <p>
      We reserve the right to update or modify this Privacy Policy at any time.
      Any changes will be effective immediately upon posting the revised Privacy
      Policy on the Website.
    </p>

    <h2>8. Contact Us</h2>
    <p>
      If you have any questions or concerns regarding this Privacy Policy or the
      handling of your personal information, please contact us at [Your Contact
      Information].
    </p>

    <p>
      By continuing to use the Website, you acknowledge that you have read and
      understand this Privacy Policy and agree to its terms.
    </p>
  </Layout>
);

export const Head = () => <Seo title="Privacy Policy" />;

export default NotFoundPage;
