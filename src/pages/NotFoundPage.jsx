import { Link } from 'react-router-dom'
import SEO from '../components/SEO'

export default function NotFoundPage() {
  return (
    <>
      <SEO
        title="Page Not Found"
        description="The page you are looking for does not exist."
        path="/404"
      />
      <div className="min-h-screen bg-[#f5f0e8] flex flex-col items-center justify-center px-4 text-center">
        <div className="w-16 h-16 bg-amber-500 rounded-2xl flex items-center justify-center mb-8">
          <span className="text-gray-900 font-extrabold text-2xl">B</span>
        </div>
        <h1 className="text-gray-900 font-extrabold text-6xl mb-4">404</h1>
        <p className="text-gray-500 text-lg mb-8 max-w-sm">
          This page doesn't exist. Let's get you back on track.
        </p>
        <Link
          to="/"
          className="px-7 py-3.5 bg-gray-900 text-white font-bold text-sm rounded-xl hover:bg-gray-700 transition-colors"
        >
          ← Back to Home
        </Link>
      </div>
    </>
  )
}
