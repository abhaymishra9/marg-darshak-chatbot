import Link from 'next/link';
import { Github } from 'lucide-react'; // Using lucide-react for GitHub icon

export default function Home(): JSX.Element {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start pt-20 bg-gradient-to-b from-blue-100 to-blue-200">
      {/* Navbar */}
      <div className="absolute top-4 left-4 text-lg font-bold text-blue-600">
        Marg Darshak
      </div>
      <div className="absolute top-4 right-4 flex gap-4 text-gray-700">
        <Link href="/roadmap" className="hover:underline">Roadmap</Link>
        <Link href="/faq" className="hover:underline">FAQ</Link>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <Github className="w-6 h-6" />
        </a>
      </div>
      {/* Main Content */}
      <div className="text-center mt-16">
        <h1 className="text-4xl font-bold text-gray-800">
          Your Brilliant AI-Powered Research Companion
        </h1>
        <p className="mt-4 text-gray-600">
          Unlock the Power of AI: Seamlessly Interact with PDFs to Gain Instant Understanding and Answers
        </p>
        <Link
          href="/login"
           
          className="mt-7 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700">
          Login to get Started!
        </Link>
      </div>
    </div>
  );
}
