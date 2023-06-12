import { OpenAIEdgeStream } from 'openai-edge-stream';

export const config = {
    runtime: "edge",
};

export default async function handler(req){
    try{
    const {message} = await req.json();
    const stream = await OpenAIEdgeStream(
        "https://api.openai.com/v1/chat/completions", {
            headers: {
                'content-type': 'application/json',
                Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        },
        method: "POST",
        body: JSON.stringify({
        model: "gpt3.5-turbo",
        messages: [{content: message, role: "user"}],
        strea: true
        })
    }
    );
    return new Response(stream);
    }catch(error){
        console.log("AN ERROR OCCURRED IN SENDMESSAGE", error);
    }
}
     