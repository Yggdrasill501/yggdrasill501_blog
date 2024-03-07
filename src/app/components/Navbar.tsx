import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-10 bg-slate-600 p-4 drop-shadow-xl">
      <div className="prose prose-xl mx-auto flex flex-col justify-between">
        <Link href="/" className="no text-white/90 underline hover:text-white">
          Yggdrasill501
        </Link>
      </div>
    </nav>
  );
}
