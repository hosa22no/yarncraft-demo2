
import Link from 'next/link';

// The Sidebar component that's visible on smaller screens

export default function Sidebar({ isOpen }) {
 return (
    <div className={`fixed left-0 top-18 h-full w-64 bg-custom-blue text-white shadow-md z-10 transition-transform duration-300 ease-in-out transform ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
      <nav className="text-base font-semibold">
        <Link href="/" className="block p-4 hover:bg-gray-50 hover:text-custom-blue">Hem</Link>
        <Link href="/projects" className="block p-4 hover:bg-gray-50 hover:text-custom-blue">Projekt</Link>
        <Link href="/tools" className="block p-4 hover:bg-gray-50 hover:text-custom-blue">Verktyg</Link>
        <Link href="/about" className="block p-4 hover:bg-gray-50 hover:text-custom-blue">Om oss</Link>
      </nav>
    </div>
 );
}
