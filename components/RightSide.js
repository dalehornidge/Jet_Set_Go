import { useState } from "react";
import { streamReader } from "openai-edge-stream";

export default function RightSide() {
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

    const reader = data.getReader();
    await streamReader(reader, (message) => {
        console.log("Message:", message);
    });
    };


    return (
      <div className="rounded-lg border-white bg-white p-16">
        <h1>RIGHT SIDE! JET SET GO!</h1>
        <form onSubmit={handleSubmit}>
        <fieldset className="flex gap-2">
        <textarea
        value={messageText}
        onChange={e => setMessageText(e.target.value)}
    
         placeholder="Where do you want to go...?" className="w-full resize-none rounded-md bg-pink-300 p-2 text-white focus: border-pink-700 focus:bg-pink-200 focus:outline focus:outline-pink-700 "/>
        <button type="submit"
        className="btn"
        >Send</button>
        </fieldset>
      </form>

      </div>
    )
  }