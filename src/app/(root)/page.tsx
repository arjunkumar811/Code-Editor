"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import PricingFrontPage from "./_components/PricingFrontPage";
import Link from "next/link";

export default function CodeCraftLanding() {
  const [isClient, setIsClient] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white relative overflow-hidden">
      <header className="max-w-7xl mx-auto p-6 flex justify-between items-center relative z-10">
        <h1 className="text-3xl font-bold text-blue-400">CodeCraft</h1>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <a
                href="#features"
                className="hover:text-blue-400 transition duration-300"
              >
                Features
              </a>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("pricing")}
                className="hover:text-blue-400 transition duration-300"
              >
                Pricing
              </button>
            </li>
            <li>
              <a
                href="#how-it-works"
                className="hover:text-blue-400 transition duration-300"
              >
                How It Works
              </a>
            </li>
            <li>
              <Link href="/home" className="hover:text-blue-400 transition duration-300">
                Demo
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <section className="text-center py-20 px-6 relative z-10 animate-fade-in">
        <h2 className="text-5xl font-extrabold">The Future of Coding Starts Here</h2>
        <p className="text-lg text-gray-400 mt-4">
          Code smarter, faster, and better with AI-powered features.
        </p>
        <button
          onClick={() => router.push("/home")}
          className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-semibold transition transform hover:scale-105"
        >
          Get Started
        </button>
      </section>

      {/* Features Section */}
      <section id="features" className="max-w-6xl mx-auto py-20 px-6 grid md:grid-cols-2 lg:grid-cols-2 gap-10 relative z-10">
        {[
          {
            title: "Multiple Language Execution",
            description: "Run and test your code in multiple languages instantly.",
            color: "from-blue-500 to-indigo-500",
          },
          {
            title: "Code Sharing",
            description: "Easily share your code with others in real-time.",
            color: "from-green-500 to-teal-500",
          },
          {
            title: "Code Folder Search",
            description: "Quickly find your files using an advanced search bar.",
            color: "from-yellow-500 to-orange-500",
          },
          {
            title: "Secure Code Storage",
            description: "Keep your code safely organized in separate tabs.",
            color: "from-red-500 to-pink-500",
          },
        ].map((feature, index) => (
          <div
            key={index}
            className={`relative p-8 rounded-xl bg-gradient-to-br ${feature.color} shadow-lg transition-all transform hover:scale-105 hover:shadow-xl before:absolute before:inset-0 before:bg-black/50 before:rounded-xl before:backdrop-blur-xl`}
          >
            <h3 className="text-2xl font-bold relative z-10">{feature.title}</h3>
            <p className="text-gray-200 mt-4 relative z-10">{feature.description}</p>
          </div>
        ))}
      </section>

      {/* Pricing Section */}
      <section id="pricing">
        <PricingFrontPage />
      </section>

      <footer id="contact" className="text-center py-8 bg-gray-800 relative z-10 animate-fade-in">
        <p>© 2025 CodeCraft. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
