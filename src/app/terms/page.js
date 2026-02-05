import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <div className="container mx-auto px-6 py-32 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 text-blue-500">Terms of Service</h1>
        <div className="space-y-6 text-gray-300 leading-relaxed">
           <p>Last updated: {new Date().toLocaleDateString()}</p>
           
           <h2 className="text-2xl font-semibold text-white mt-8">1. Acceptance of Terms</h2>
           <p>By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.</p>
           
           <h2 className="text-2xl font-semibold text-white mt-8">2. Intellectual Property</h2>
           <p>The content, organization, graphics, design, and other matters related to the Site are protected under applicable copyrights and other proprietary laws.</p>
           
           <h2 className="text-2xl font-semibold text-white mt-8">3. Limitation of Liability</h2>
           <p>In no event shall Trustiqo be liable for any damages (including, without limitation, damages for loss of data or profit) arising out of the use or inability to use the materials on Trustiqo's website.</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
