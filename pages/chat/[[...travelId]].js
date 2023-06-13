import { useState } from "react";
import Head from 'next/head';
import NavBar from 'components/NavBar';
import LeftSide from 'components/LeftSide';
import Footer from 'components/Footer';
import NewRightImage from "components/NewRightImage";
import RightSide from "components/RightSide";


export default function ChatPage() {
  const [apiResponse, setApiResponse] = useState("");

  const handleApiResponse = (response) => {
    const newResponse = apiResponse + response.content;
    console.log("newResponse:", newResponse);
    setApiResponse(newResponse);
  }

  return (
    <>
      <Head>
        <title>Jet Set Go! - New Itinerary</title>
      </Head>
      {/* <div className="flex flex-col h-screen bg-[url('/background5.png')] w-screen mx-auto"> */}
      <div className="flex flex-col pb-16 h-screen bg-JSGOrange w-screen mx-auto">
        <div className="">
          <NavBar />
        </div>
        <div className="flex-grow lg:flex md:block">
        <div className="lg:w-5/12 md:w-full">
            <LeftSide onApiResponse={handleApiResponse} />
          </div>
          <div className="flex lg:w-7/12 md:w-full justify-end items-center">
            <RightSide apiResponse={apiResponse} />
            <NewRightImage/> 
          </div>

        </div>
        <div className="">
          <Footer className="align-bottom" />
        </div>
      </div>   
    </>
  );
}
