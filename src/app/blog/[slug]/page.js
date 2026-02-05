import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

// Mock data fetcher
const getPost = (slug) => {
  const posts = {
    "benefits-of-school-management-system": {
       title: "5 Benefits of a Digital School Management System",
       content: `
         <p class="mb-4">Managing a school involves juggling countless tasks—admissions, fees processing, attendance, examinations, and parent-teacher communication.</p>
         <h2 class="text-2xl font-bold text-white mt-8 mb-4">1. Automated Admissions</h2>
         <p class="mb-4">Gone are the days of long queues. Digital systems allow seamless online applications.</p>
         <h2 class="text-2xl font-bold text-white mt-8 mb-4">2. Real-time Communication</h2>
         <p class="mb-4">Parents get instant updates about their child's progress via SMS or App notifications.</p>
       `,
       date: "2024-03-15"
    },
    "why-your-business-needs-a-website": {
      title: "Why Your Small Business Needs a Website in 2024",
      content: `
        <p class="mb-4">81% of people research a business or service online prior to making a purchase decision. If you don't have a website, you have no chance at capturing that share of the market.</p>
        <h2 class="text-2xl font-bold text-white mt-8 mb-4">Credibility and Trust</h2>
        <p class="mb-4">A professional website makes your business look legitimate and trustworthy.</p>
      `,
      date: "2024-03-20"
    }
  };
  return posts[slug];
};

export default async function BlogPost({ params }) {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) {
    return <div className="text-white text-center py-20">Post not found</div>;
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <article className="container mx-auto px-6 py-32 max-w-3xl">
        <Link href="/blog" className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors">
           <ArrowLeft className="w-4 h-4" /> Back to Blog
        </Link>
        
        <h1 className="text-3xl md:text-5xl font-bold mb-6 text-blue-500 leading-tight">{post.title}</h1>
        <p className="text-gray-500 mb-10 border-b border-white/10 pb-6">{post.date}</p>
        
        <div 
          className="prose prose-invert prose-lg max-w-none text-gray-300"
          dangerouslySetInnerHTML={{ __html: post.content }} 
        />
        
      </article>
      <Footer />
    </div>
  );
}
