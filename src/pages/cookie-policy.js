import * as React from "react";

import Layout from "../components/layout";
import Seo from "../components/seo";

const NotFoundPage = () => (
  <Layout>
    <h1>Cookie Policy</h1>
    <p>Effective Date: [Insert Date]</p>

    <h2>1. What are Cookies?</h2>
    <p>
      Cookies are small pieces of data stored on your device (computer or mobile
      device) when you visit a website. They are widely used to make websites
      work more efficiently and to provide information to the website owners.
    </p>

    <h2>2. How We Use Cookies</h2>
    <p>
      We use cookies for various purposes including:
      <ul>
        <li>
          Authentication: To identify you when you visit our website and as you
          navigate our website
        </li>
        <li>Personalization: To remember your preferences and settings</li>
        <li>
          Analytics: To analyze how you use our website and to improve its
          functionality and user experience
        </li>
      </ul>
    </p>

    <h2>3. Your Choices Regarding Cookies</h2>
    <p>
      You can control and manage cookies in various ways. Please note that
      removing or blocking cookies may affect your user experience and some
      parts of the website may not function properly.
    </p>

    <h2>4. Third-Party Cookies</h2>
    <p>
      We may also use third-party cookies provided by trusted partners for
      analytics, advertising, and other purposes. These cookies may collect
      information about your online activities over time and across different
      websites. Please review the privacy policies of these third-party services
      to understand how they use cookies.
    </p>

    <h2>5. Updates to Cookie Policy</h2>
    <p>
      We reserve the right to update or modify this Cookie Policy at any time.
      Any changes will be effective immediately upon posting the revised Cookie
      Policy on the Website.
    </p>

    <h2>6. Contact Us</h2>
    <p>
      If you have any questions or concerns regarding this Cookie Policy or the
      use of cookies on our website, please contact us at [Your Contact
      Information].
    </p>

    <p>
      By continuing to use our website, you consent to the use of cookies as
      described in this Cookie Policy.
    </p>
  </Layout>
);

export const Head = () => <Seo title="Cookie Policy" />;

export default NotFoundPage;
