import React from "react";
import "./About.css";

function Privacy() {
  return (
    <>
      <div className="privacy">
        <div className="privacyHeading">
          <h2>Privacy Policy & Data Protection</h2>
          <p>
            We prioritize your privacy by safeguarding your data with
            transparency and responsibility.
          </p>
        </div>
        <div className="privacyContainer">
          <div className="privacyIntro flex direction gap margin">
            <h3>Introduction</h3>
            <p>
              Welcome to Portfolio Builder. We value your privacy and are
              committed to protecting your personal information. This Privacy
              Policy explains how we collect, use, disclose, and safeguard your
              information when you visit our website and use our
              portfolio-building services.
            </p>
          </div>
          <div className="privacyPersonal flex direction gap margin">
            <h3>Personal Information</h3>
            <p>
              When you register on our Site or use our services, we may collect
              personal information that you provide, such as:
              <li>Name</li>
              <li>Email Address</li>
              <li>Phone Number</li>
              <li>Portfolio Content</li>
              <li>Any other information you provide</li>
            </p>
          </div>
          <div className="privacyUse flex direction gap margin">
            <h3>Data Usage</h3>
            <p>
              We may collect information about your interication Lorem ipsum dolor sit:
              <li>IP Address</li>
              <li>Browser data</li>
              <li>Phone Number</li>
              <li>Portfolio Content</li>
              <li>Any other information you provide</li>
            </p>
          </div>
          <div className="privacyIntro flex direction gap margin">
            <h3>3. Cookies and Tracking Technologies</h3>
            <p>
            We use cookies and similar tracking technologies to enhance your experience on our Site. Cookies are small files placed on your device to track activity and remember preferences. You can adjust your browser settings to refuse cookies, but this may affect your ability to use some features of our Site.
            </p>
          </div>
          <div className="privacyPersonal flex direction gap margin">
            <h3>How We Use Your Information</h3>
            <p>
            We use your personal information for the following purposes:
              <li>To provide and maintain our services</li>
              <li>To respond to your inquiries and support needs</li>
              <li>To personalize your experience</li>
              <li>To send you updates, newsletters, and promotional materials (if you have opted in)</li>
              <li>Any other information you provide</li>
            </p>
          </div>
          <div className="privacyPersonal flex direction gap margin">
            <h3>5. How We Share Your Information</h3>
            <p>
            We do not sell or rent your personal information to third parties. We may share your information with:
              <li>Service Providers: Third parties who assist us in operating our Site and providing services, subject to confidentiality agreements.</li>
              <li>Legal Requirements: If required by law or in response to legal processes, or to protect our rights and the rights of others.</li>
            </p>
          </div>

        </div>
      </div>
    </>
  );
}

export default Privacy;
