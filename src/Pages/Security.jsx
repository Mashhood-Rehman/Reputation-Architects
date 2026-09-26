import { useEffect } from "react";
import Navbar from "../Header/Navbar";
import Footer from "../Footer/Footer";
import { Helmet } from "react-helmet";

const Security = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col justify-between">
      <Helmet>
        <title>Security & Protection | Reputation Architects LLC</title>
        <meta
          name="description"
          content="Learn about Reputation Architects LLC security standards, encryption, and data protection measures."
        />
      </Helmet>

      <Navbar />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-20 w-full">
        <div className="bg-[#18181b] border border-zinc-800 rounded-3xl p-6 sm:p-12 space-y-8 shadow-2xl">
          <div className="border-b border-zinc-700 pb-4">
            <h1 className="text-3xl sm:text-4xl font-bold text-white">Security & Data Protection</h1>
            <p className="mt-2 text-sm text-gray-400">
              Enterprise data encryption, privacy protection, and secure infrastructure standards.
            </p>
          </div>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-orange-400">1. Data Encryption</h2>
            <p className="text-sm text-gray-300 leading-relaxed">
              We protect all client communication and sensitive data with TLS 1.3 encryption in transit and AES-256 encryption at rest across our digital marketing and client management infrastructure.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-orange-400">2. Secure Hosting & Compliance</h2>
            <p className="text-sm text-gray-300 leading-relaxed">
              Our cloud services are deployed in SOC 2 Type II certified United States data centers with active firewalls, intrusion detection, and automatic DDoS mitigation.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Security;
