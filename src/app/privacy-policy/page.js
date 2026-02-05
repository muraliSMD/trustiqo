import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <div className="container mx-auto px-6 py-32 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 text-blue-500">Privacy Policy</h1>
        <div className="space-y-6 text-gray-300 leading-relaxed">
           <p>Last updated: {new Date().toLocaleDateString()}</p>
           
           <h2 className="text-2xl font-semibold text-white mt-8">1. Introduction</h2>
           <p>Welcome to Trustiqo. We respect your privacy and are committed to protecting your personal data.</p>
           
           <h2 className="text-2xl font-semibold text-white mt-8">2. Data We Collect</h2>
           <p>We may collect personal identification information (Name, email address, phone number, etc.) when you fill out forms on our site.</p>
           
           <h2 className="text-2xl font-semibold text-white mt-8">3. How We Use Your Data</h2>
           <p>We collect your data to provide our services, communicate with you, and improve our website functionality.</p>
           
           <h2 className="text-2xl font-semibold text-white mt-8">4. Data Security</h2>
           <p>We implement appropriate security measures to protect against unauthorized access, alteration, disclosure, or destruction of your personal data.</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
