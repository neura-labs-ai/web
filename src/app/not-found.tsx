import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col h-screen items-center justify-center bg-gray-100">
      <h1 className="text-2xl md:text-4xl font-bold text-gray-800 mb-8 text-center">
        404 - Page Not Found
      </h1>
      <div className="px-4 py-2 rounded-md bg-gray-800 text-white hover:bg-gray-900 text-sm md:text-base">
        <Link href={"/"}>Return Home</Link>
      </div>
    </div>
  );
}
