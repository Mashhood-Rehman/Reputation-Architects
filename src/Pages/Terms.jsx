import { useEffect } from "react";
import Navbar from "../Header/Navbar";
import Footer from "../Footer/Footer";
import { Helmet } from "react-helmet";

const Terms = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col justify-between">
      <Helmet>
        <title>Terms of Service | Reputation Architects LLC</title>
        <meta
          name="description"
          content="Terms of Service for Reputation Architects LLC marketing services, digital consulting, and client engagements."
        />
      </Helmet>

      <Navbar />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-20 w-full">
        <div className="bg-[#18181b] border border-zinc-800 rounded-3xl p-6 sm:p-12 space-y-8 shadow-2xl">
          <div className="border-b border-zinc-700 pb-4">
            <h1 className="text-3xl sm:text-4xl font-bold text-white">Terms of Service</h1>
            <p className="mt-2 text-sm text-gray-400">
              Last Updated: January 2026 | Reputation Architects LLC
            </p>
          </div>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-orange-400">1. Acceptance of Terms</h2>
            <p className="text-sm text-gray-300 leading-relaxed">
              By using our website, purchasing our marketing packages, or engaging our consulting services, you agree to comply with and be bound by these Terms of Service.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-orange-400">2. Marketing & Digital Services</h2>
            <p className="text-sm text-gray-300 leading-relaxed">
              Reputation Architects LLC provides SEO, digital advertising, review management, web design, and branding services. All deliverables and campaign timelines are outlined in individual client agreements.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-orange-400">3. SMS & Communication Terms</h2>
            <p className="text-sm text-gray-300 leading-relaxed">
              By opting in via web forms, you consent to receive customer care and service update texts. Message frequency varies. You may cancel at any time by texting STOP.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Terms;
