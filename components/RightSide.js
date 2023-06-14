import clsx from 'clsx';

export default function RightSide({ apiResponse }) {
  const boxClasses = clsx({
    'font-sans rounded-lg p-7 shadow-lg object-right bg-gray-200 text-gray-900': apiResponse,
    'max-h-[600px] overflow-y-scroll': apiResponse, 
  });

  return (
    <div className={boxClasses}>
      {apiResponse && 
        <h1 className="font-caveat text-amber-500 text-4xl">Ooooft sounds nice! Here's what I think you should do</h1>
      }
      <br/>
      {apiResponse && <pre className="whitespace-pre-wrap">{apiResponse}</pre>}
    </div>
  );
}
