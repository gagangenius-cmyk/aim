import Link from "next/link";

export default function NotFound() {
  return (
    <section className="grid min-h-[70vh] place-items-center px-5 text-center">
      <div>
        <p className="text-gradient font-display text-8xl font-semibold">404</p>
        <h1 className="mt-4 text-2xl font-semibold">This page took a wrong turn</h1>
        <Link href="/" className="mt-6 inline-block rounded-full bg-gradient-to-r from-brand to-brand-2 px-6 py-3 font-semibold text-white">
          Back to home
        </Link>
      </div>
    </section>
  );
}
