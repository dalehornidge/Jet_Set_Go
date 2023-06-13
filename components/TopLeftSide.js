import { useState } from "react";
import { streamReader } from "openai-edge-stream";

export default function TopLeftSide({ onApiResponse }) {
    const [messageText, setMessageText] = useState("");

    const handleSubmit = async (e) => {
      e.preventDefault();
      console.log("Message Text:", messageText);
      const response = await fetch(`/api/chat/sendMessage`, {
          method: "POST",
          headers: {
              'content-type': 'application/json'
          },
          body: JSON.stringify({ message: messageText }),
      });
  
      const data = response.body;
      if(!data){
          return
      }
  
      let completeResponse = '';
      const reader = data.getReader();
      await streamReader(reader, (chunk) => {
          completeResponse += chunk.content;
      });
  
      onApiResponse({ content: completeResponse });
  };


    return (
      <div className="rounded-lg p-16">
        <h1 className="text-5xl mb-7 font-bold font-gafata text-JSGBlue">Need inspiration for your next big trip?</h1>
        <h1 className="text-5xl mb-10 font-bold font-gafata text-JSGCream">Let us help you!</h1>
        <form onSubmit={handleSubmit}>
        <fieldset className="flex gap-2">
        <textarea
        value={messageText}
        onChange={e => setMessageText(e.target.value)}
    
         placeholder="Where do you want to go...?" className="w-full resize-none rounded-md bg-JSGCream p-2 text-white border-JSGBlue focus:border-cyan-600 focus:bg-pink-200 focus:outline focus:outline-cyan-600 "/>
        <button type="submit"
        className="btn"
        >Send</button>
        </fieldset>
      </form>

      </div>
    )
  }