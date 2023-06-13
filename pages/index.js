import Head from "next/head";
import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0/client";
import { getSession } from "@auth0/nextjs-auth0";
import NavBar from "components/NavBar";

export default function Home() {

  const { isLoading, error, user } = useUser();

  if(isLoading) return <div>Loading...</div>
  if(error) return <div>{error.message}</div>

  return (
    <>
      <Head>
        <title>Jet Set Go!</title>
      </Head> 
      <div className="bg-cover bg-center min-h-screen">
      <div className="flex justify-center items-center min-h-screen w-full text-black text-center">
      <div>
      <NavBar/>
      {!!user && <Link href="/api/auth/logout">Logout</Link> }
      {!user && (
        <> 
      <Link href="/api/auth/login" 
      className="btn">Login</Link>
      <Link href="/api/auth/signup"
      className="btn">Sign Up</Link>
      </>
        )}
      </div>
      </div>
      </div>
    </>
  );
}


export const getServerSideProps = async (ctx) => {
  const session = await getSession(ctx.req, ctx.res);
  if(!!session){
    return {
      redirect: {
        destination: "/chat",
      },
    };
  }
    return { 
      props: {}, 
    };
};