import { SignInButton } from '@clerk/nextjs';
import Link from 'next/link';
import { Github } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start pt-24 bg-gradient-to-b from-blue-100 to-blue-200 relative">
      {/* Navbar */}
      <div className="absolute top-4 left-4 text-lg font-bold text-blue-600">
        Marg Darshak
      </div>
      <div className="absolute top-4 right-4 flex gap-4 text-gray-700">
  
      </div>

      {/* Main Content */}
      <div className="text-center mt-12 px-4">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-800">
          Your Brilliant AI-Powered Research Companion
        </h1>
        <p className="mt-4 text-lg text-gray-600 max-w-xl mx-auto">
          Unlock the Power of AI: Seamlessly Interact with PDFs to Gain Instant Understanding and Answers
        </p>

        <div className="mt-10">
          <SignInButton mode="modal">
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition">
              Login to get Started!
            </button>
          </SignInButton>
        </div>
      </div>
    </div>
  );
}
