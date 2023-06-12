import Head from 'next/head';
import NavBar from 'components/NavBar';
import LeftSide from 'components/LeftSide';
import RightSide from 'components/RightSide';
import Footer from 'components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Jet Set Go! - New Itinerary</title>
      </Head>
      <div className="h-screen w-screen mx-auto grid grid-cols-12 grid-rows-8 gap-0 bg-zinc-50">
        <div className="col-span-12 row-span-1">
          <NavBar />
        </div>
        <div className="col-span-7 row-span-4 object-right ">
          <LeftSide />
        </div>
        <div className="col-span-5 row-span-4">
          <RightSide />
        </div>
        <div className="col-span-12 row-span-1">
          <Footer className="align-bottom" />
        </div>
      </div>   
    </>
  );
}

