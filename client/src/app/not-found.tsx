import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-20 text-center">
      <p className="font-sans text-xs font-black uppercase tracking-[0.18em] text-[#ff6b00]">404</p>
      <h1 className="mt-3 text-4xl font-black text-white">Page not found</h1>
      <p className="mt-4 font-sans leading-7 text-[#a0a0a0]">
        This static page is not part of the current Chhatrapati Shivaji Maharaj knowledge hub.
      </p>
      <Link href="/shivaji-maharaj" className="mt-8 inline-block rounded-md bg-[#ff6b00] px-5 py-3 font-sans text-sm font-bold text-white hover:bg-[#ff8c00] transition-colors">
        Open main guide
      </Link>
    </main>
  );
}
