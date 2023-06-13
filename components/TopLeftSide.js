import { useState } from "react";
import { streamReader } from "openai-edge-stream";

export default function TopLeftSide({ onApiResponse }) {
    const [questions, setQuestions] = useState([
        { text: "Where do you want to go...?", answer: "" },
        { text: "For how many days?", answer: "" },
        { text: "What are your interests?", answer: "" },
    ]);
    const [currentQuestion, setCurrentQuestion] = useState(0);

    const handleSubmit = async (e) => {
      e.preventDefault();
      
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        return;
      }
      
      const message = `Hi, I'm visiting ${questions[0].answer} for ${questions[1].answer} and I'm interested in ${questions[2].answer}. Please build me a travel itinerary.`;
      const response = await fetch(`/api/chat/sendMessage`, {
        method: "POST",
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ message }),
      });
  
      const data = response.body;
      if (!data) { return; }
  
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
              value={questions[currentQuestion].answer}
              onChange={e => {
                const newQuestions = [...questions];
                newQuestions[currentQuestion].answer = e.target.value;
                setQuestions(newQuestions);
              }}
              placeholder={questions[currentQuestion].text}
              className="w-full resize-none rounded-md bg-JSGCream p-2 text-white border-JSGBlue focus:border-cyan-600 focus:bg-pink-200 focus:outline focus:outline-cyan-600 "
            />
            <button type="submit" className="btn">Send</button>
          </fieldset>
        </form>
      </div>
    );
}
