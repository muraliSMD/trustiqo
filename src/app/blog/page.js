import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";

const posts = [
  {
    slug: "benefits-of-school-management-system",
    title: "5 Benefits of a Digital School Management System",
    excerpt: "Discover how automating school operations improves efficiency, communication, and student outcomes.",
    date: "2024-03-15",
    image: "/blog/school.jpg"
  },
  {
    slug: "why-your-business-needs-a-website",
    title: "Why Your Small Business Needs a Website in 2024",
    excerpt: "In the digital age, a professional website is not efficient—it's essential. Here's why.",
    date: "2024-03-20",
    image: "/blog/website.jpg"
  },
  {
    slug: "boost-sales-with-crm",
    title: "How to Boost Sales with a Verified CRM Solution",
    excerpt: "Learn how tracking leads and automating follow-ups can skyrocket your conversion rates.",
    date: "2024-04-05",
    image: "/blog/crm.jpg"
  }
];

export default function BlogList() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <div className="container mx-auto px-6 py-32">
        <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Trustiqo Insights
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
             <Link key={post.slug} href={`/blog/${post.slug}`} className="group block bg-zinc-900 rounded-2xl overflow-hidden border border-white/10 hover:border-blue-500/50 transition-all">
                <div className="aspect-video bg-zinc-800 relative">
                   {/* Placeholder for real images */}
                   <div className="absolute inset-0 flex items-center justify-center text-zinc-600 font-bold">
                      [Image: {post.title}]
                   </div>
                </div>
                <div className="p-6">
                   <p className="text-sm text-gray-500 mb-2">{post.date}</p>
                   <h2 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors">{post.title}</h2>
                   <p className="text-gray-400 text-sm">{post.excerpt}</p>
                   <span className="inline-block mt-4 text-blue-500 text-sm font-semibold group-hover:translate-x-1 transition-transform">Read Article &rarr;</span>
                </div>
             </Link>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
