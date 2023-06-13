import clsx from 'clsx';

export default function RightSide({ apiResponse }) {
  const boxClasses = clsx({
    'font-sans rounded-lg p-7 shadow-lg object-right bg-gray-200 text-gray-900': apiResponse,
  });

  return (
    <div className={boxClasses}>
        <h1 className="font-caveat text-amber-500 text-xl">Ooooft sounds nice! Here's what I think you should do</h1>
      {apiResponse && <pre className="whitespace-pre-wrap">{apiResponse}</pre>}
    </div>
  );
}
