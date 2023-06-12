import Head from "next/head";
import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0/client";
import { getSession } from "@auth0/nextjs-auth0";

export default function Home() {

  const { isLoading, error, user } = useUser();

  if(isLoading) return <div>Loading...</div>
  if(error) return <div>{error.message}</div>

  return (
    <>
      <Head>
        <title>Jet Set Go!</title>
      </Head> 
      <div className="flex justify-center items-center min-h-screen w-full bg-white text-black text-center">
      <div>
      {!!user && <Link href="/api/auth/logout">Logout</Link> }
      {!user && (
        <> 
      <Link href="/api/auth/login" 
      className="rounded-md bg-cyan-400 px-4 py-2 text-white hover:bg-cyan-600">Login</Link>
      <Link href="/api/auth/signup"
      className="rounded-md bg-cyan-400 px-4 py-2 text-white hover:bg-cyan-600">Sign Up</Link>
      </>
        )}
      </div>
      </div>
    </>
  );
}


// export const getServerSideProps = async (ctx) => {
//   const session = await getSession(ctx.req, ctx.res);
//   if(!!session){
//     return {
//       redirect: {
//         destination: "/chat",
//       },
//     };
//   }
//     return { 
//       props: {}, 
//     };
// };