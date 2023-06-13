import { useState, useEffect } from "react";
import { streamReader } from "openai-edge-stream";

export default function LeftSide({ onApiResponse }) {
    const [questions, setQuestions] = useState([
        { text: "Where do you want to go...?", answer: "" },
        { text: "For how many days?", answer: "" },
        { text: "What are your interests?", answer: "" },
    ]);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [countdown, setCountdown] = useState("");
    const [countdownIndex, setCountdownIndex] = useState(0);

    useEffect(() => {
        const countdownArr = ["5,", "4,", "3,", "2,", "1,", "...", "🌴"];
        if (formSubmitted && countdownIndex < countdownArr.length) {
            setCountdown((prevCountdown) => prevCountdown + " " + countdownArr[countdownIndex]);
            const timeoutId = setTimeout(() => setCountdownIndex(countdownIndex + 1), 1000);
            return () => clearTimeout(timeoutId);
        }
    }, [formSubmitted, countdownIndex]);
    const handleSubmit = async (e) => {
      e.preventDefault();
      
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        return;
      }
      
      setFormSubmitted(true);

      const message = `Hi, I'm visiting ${questions[0].answer} for ${questions[1].answer} and I'm interested in ${questions[2].answer}. Please build me a travel itinerary.`;
      console.log("message:", message);
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

    const resetForm = () => {
      setQuestions([
        { text: "Where do you want to go...?", answer: "" },
        { text: "For how many days?", answer: "" },
        { text: "What are your interests?", answer: "" },
      ]);
      setCurrentQuestion(0);
      setFormSubmitted(false);
      setCountdown("");
    };

    return (
      <div className="rounded-lg pl-20 pt-16">
        <h1 className="text-5xl mb-7 font-bold font-gafata text-JSGBlue">{formSubmitted ? "Hold tight! We're planning the trip of your dreams! 😎" : "Need inspiration for your next big trip?"}</h1>
        <h1 className="text-5xl mb-10 font-bold font-gafata text-JSGCream">{formSubmitted ? countdown : "Let us help you!"}</h1>
        {formSubmitted ? (
          <button onClick={resetForm} className="btn">Try Again</button>
        ) : (
          <form onSubmit={handleSubmit}>
            <fieldset className="flex gap-2">
              <textarea
                value={questions[currentQuestion].answer}
                onChange={e => {
                  const newQuestions = [...questions];
                  newQuestions[currentQuestion].answer = e.target.value;
                  setQuestions(newQuestions);
                }}
                onKeyDown={e => {
                  if (e.key === 'Enter') {
                    e.preventDefault();
                    handleSubmit(e);
                  }
                }}
                placeholder={questions[currentQuestion].text}
                className="w-full resize-none rounded-md text-3xl bg-JSGCream p-2 text-JSGBlue border-JSGBlue focus:border-cyan-600 focus:bg-cyan-100 focus:outline focus:outline-cyan-600 "
              />
              <button type="submit" className="btn">Send</button>
            </fieldset>
          </form>
        )}
      </div>
    );
}
