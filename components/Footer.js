import Link from "next/link";

export default function Footer() {
    return (
      <div className=" bg-sky-400 p-6">
        <h1 className="text-center">Built in Edinburgh! {"\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74\uDB40\uDC7F"} </h1>
      <Link href="/api/auth/logout">
        Logout
      </Link>
      </div>
    )
  }