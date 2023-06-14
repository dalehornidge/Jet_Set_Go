import { useState, useEffect } from "react";
import Head from 'next/head';
import NavBar from 'components/NavBar';
import Footer from 'components/Footer';
import clsx from 'clsx';

export default function ItinerariesPage() {
  const [itineraries, setItineraries] = useState([]);

  useEffect(() => {
    fetchItineraries();
  }, []);

  const fetchItineraries = async () => {
    try {
      const response = await fetch('/api/get-itineraries');
      const data = await response.json();
      setItineraries(data.itineraries);
    } catch (error) {
      console.error(error);
    }
  };

  const boxClasses = clsx(
    'font-gafata font-semibold rounded-lg p-7 shadow-lg object-right bg-gray-200 text-gray-900',
    'max-h-[600px] overflow-y-scroll',
  );

  return (
    <>
      <Head>
        <title>Jet Set Go! - Itineraries</title>
      </Head>
      <div className="flex flex-col pb-16 min-h-screen bg-JSGOrange w-screen mx-auto"> 
        <div>
          <NavBar />
          <h1 className="text-5xl pl-10 font-bold font-gafata text-JSGBlue">Your Saved Itineraries</h1>
        </div>
        <div className="flex-grow">
          <div className="grid grid-cols-2 gap-6 justify-center mt-16 mx-auto w-11/12">
            {itineraries.map((itinerary, index) => (
              <div
                key={itinerary._id}
                className={boxClasses}
              >
                <h2 className="font-caveat text-amber-500 text-4xl">Trip {index + 1}</h2>
                <br/>
                <p className="whitespace-pre-wrap">{itinerary.itinerary}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <Footer className="align-bottom" />
        </div>
      </div>
    </>
  );
}
