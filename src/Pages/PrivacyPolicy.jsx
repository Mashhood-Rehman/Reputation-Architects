import { useEffect } from "react";
import Navbar from "../Header/Navbar";
import Footer from "../Footer/Footer";
import { Helmet } from "react-helmet";

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col justify-between">
      <Helmet>
        <title>Privacy Policy | Reputation Architects LLC</title>
        <meta
          name="description"
          content="Privacy Policy for Reputation Architects LLC explaining our data collection, compliance, and privacy practices in the United States."
        />
      </Helmet>

      <Navbar />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-20 w-full">
        <div className="bg-[#18181b] border border-zinc-800 rounded-3xl p-6 sm:p-12 space-y-8 shadow-2xl">
          <div className="border-b border-zinc-700 pb-4">
            <h1 className="text-3xl sm:text-4xl font-bold text-white">Privacy Policy</h1>
            <p className="mt-2 text-sm text-gray-400">
              Effective Date: January 1, 2026 | Reputation Architects LLC (Austin, TX)
            </p>
          </div>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-orange-400">1. Introduction & Scope</h2>
            <p className="text-sm text-gray-300 leading-relaxed">
              Reputation Architects LLC ("we", "our", or "us") is dedicated to protecting your privacy in compliance with US privacy laws (including CCPA/CPRA where applicable). This policy explains how we collect, store, protect, and use your personal information.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-orange-400">2. Information We Collect</h2>
            <p className="text-sm text-gray-300 leading-relaxed">
              We collect information provided directly by you when submitting contact forms, booking consultations, or subscribing to our newsletters:
            </p>
            <ul className="list-disc ml-6 space-y-2 text-sm text-gray-300">
              <li><strong>Contact Identifiers:</strong> Name, email address, phone number, company name.</li>
              <li><strong>Service Requests:</strong> Project requirements, marketing goals, consultation notes.</li>
              <li><strong>SMS Consent Preferences:</strong> Explicit opt-in records for transactional or promotional text messages.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-orange-400">3. TCPA & SMS Consent Policy</h2>
            <p className="text-sm text-gray-300 leading-relaxed">
              Phone numbers obtained for SMS messaging are never sold or shared with third parties for promotional purposes. SMS messaging is used strictly for appointment confirmations, updates, and user-authorized alerts. You may text <strong>STOP</strong> at any time to opt out.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-orange-400">4. Contact Information</h2>
            <p className="text-sm text-gray-300 leading-relaxed">
              Reputation Architects LLC<br />
              5900 Balcones Drive # 20546, Austin, TX 78731<br />
              Email: <a href="mailto:info@rep-architects.com" className="text-orange-400 hover:underline">info@rep-architects.com</a><br />
              Phone: <a href="tel:+12148987958" className="text-orange-400 hover:underline">+1 (214) 898-7958</a>
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
