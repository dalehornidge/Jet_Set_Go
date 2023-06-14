import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0/client";

export default function NavBar() {
  const { user } = useUser();

  return (
    <nav className="flex flex-col mt-7 mb-16 sm:flex-row border-b border-JSGBlue sm:text-left sm:justify-between py-4 px-6 sm:items-center w-full">
      <div className="font-dm pl-10 font-semibold text-5xl text-JSGBlue sm:mb-0">
        <Link href="/home">
          Jet Set Go!
        </Link>
      </div>
      <div>
        {user && (
          <Link className="btn mr-16 " href="/api/auth/logout">
            Logout
          </Link>
        )}
      </div>
    </nav>
  );
}
