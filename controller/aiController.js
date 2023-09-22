import "dotenv/config";

const API_KEY = process.env.GPT_KEY2;

export async function gptModel(req, res, next) {
console.log(req.body)
  const role = req.body.sender === "ChatGPT" ? "assistant" : "user";
  const apiMessages = [{ role, content: req.body.question }];

  const apiRequestBody = {
    model: "gpt-4",
    messages: [
      { role: "system", content: "I'm a Student using ChatGPT for learning" },
      ...apiMessages, 
    ],
  };

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: "Bearer " + API_KEY,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(apiRequestBody),
  });

  try {
    console.log(response)
    res.send(response.body);
  } catch (e) {
    res.status(500).send(e.message);
  }
}
