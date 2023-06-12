import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="font-sans flex flex-col text-center sm:flex-row sm:text-left sm:justify-between py-4 px-6 bg-white shadow sm:items-baseline w-full">
      <div className="mb-2 sm:mb-0">
        <Link href="/home">
          Jet Set Go!
        </Link>
      </div>
      <div>
        <Link href="/one">
          One
        </Link>
        <Link href="/two">
          Two
        </Link>
        <Link href="/three">
          Three
        </Link>
      </div>
    </nav>
  );
}
