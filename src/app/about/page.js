import Link from "next/link";
export default function Contact() {
  return (
    <div className=" mt-16 min-h-screen flex items-start justify-center bg-gray-100 dark:bg-custom-blue dark:text-white">
      <div className="container mx-auto p-4 dark:bg-custom-blue dark:text-gray-100">
        <h1 className="text-6xl font-semibold text-center">Om oss</h1>
        <p className="text-center text-lg mt-4">
          Sidan gjord av Sanna Höglund.
        </p>
        <p className="text-center text-lg mt-4">
          <a 
            href="mailto:sanna@example.com" 
            className="relative inline-block text-[#3B82F6] hover:text-[#1E40AF] font-bold py-2 px-4"
          >
            <span className="absolute inset-0 transform scale-0 transition-transform duration-300 bg-[#3B82F6] opacity-50 rounded-md hover:scale-100"></span>
            <span className="relative">Kontakta mig via e-post</span>
          </a>
        </p>
      </div>
    </div>
  );
}
