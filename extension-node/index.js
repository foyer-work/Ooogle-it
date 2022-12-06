const express = require("express");
const OpenAI = require("openai-api");
const app = express();
const port = 3000;

// load API_KEY from env
const OPENAI_API_KEY = "API_KEY";
const openai = new OpenAI(OPENAI_API_KEY);

const sendMessage = async (message) => {
  const gptResponse = await openai.complete({
    engine: "text-davinci-003",
    prompt: message,
    temperature: 0,
    top_p: 1,
    n: 1,
    stream: true,
    logprobs: null,
    //stop: "\n",
  });

  return gptResponse.data;
};

app.get("/", (req, res) => {
  const { q } = req.query;

  sendMessage(q).then((value) => {
    res.send(value);
  });
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
