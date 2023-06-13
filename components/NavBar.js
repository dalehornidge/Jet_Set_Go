import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="flex flex-col mb-16 text-center sm:flex-row border-b border-JSGBlue sm:text-left sm:justify-between py-4 px-6 sm:items-baseline w-full">
      <div className="font-dm text-5xl text-JSGBlue mb-2 sm:mb-0">
        <Link href="/home">
          Jet Set Go!
        </Link>
      </div>
      <div>
      <Link className="btn" href="/api/auth/logout">
        Logout
      </Link>
      </div>
    </nav>
  );
}
