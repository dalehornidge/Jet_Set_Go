import Head from "next/head";
import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0/client";
import { getSession } from "@auth0/nextjs-auth0";
import NavBar from "components/NavBar";
import Footer from 'components/Footer';
import NewRightImage from "components/NewRightImage";

export default function Home() {
  const { isLoading, error, user } = useUser();

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>{error.message}</div>

  return (
    <>
      <Head>
        <title>Jet Set Go!</title>
      </Head> 
      <div className="flex flex-col pb-16 h-screen bg-JSGOrange w-screen mx-auto">
        <div className="">
          <NavBar/>
        </div>
        <div className="flex-grow lg:flex md:block">
          <div className="lg:w-5/12 md:w-full pl-20 pt-16">
            <h1 className="text-5xl mb-7 font-bold font-gafata text-JSGBlue">Need inspiration for your next big trip?</h1>
            <h1 className="text-5xl mb-14 font-bold font-gafata text-JSGCream" style={{ transitionDelay: "2s" }}>Let us help you!</h1>
            {!!user && <Link href="/api/auth/logout">Logout</Link>}
            {!user && (
              <> 
                <Link href="/api/auth/login" className="btn">Login</Link>
                <Link href="/api/auth/signup" className="btn">Sign Up</Link>
              </>
            )}
          </div>
          <div className="flex lg:w-7/12 justify-end items-center">
            <div className="ml-10">
              <NewRightImage/>
            </div>
          </div>
        </div>
        <div className="">
          <Footer className="align-bottom" />
        </div>
      </div>
    </>
  );
}

export const getServerSideProps = async (ctx) => {
  const session = await getSession(ctx.req, ctx.res);
  if (!!session) {
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
