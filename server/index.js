/* This JavaScript code snippet sets up a server using Express to handle API requests. Here's a
breakdown of what the code does: */

const PORT = 8000;
const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const cors = require("cors");
const { default: OpenAI } = require("openai");
const helmet = require("helmet");
const path = require("path");

const port = process.env.PORT || PORT;
const app = express();
app.use(express.static(path.join(__dirname, "build")));
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(cors());

const openai = new OpenAI({
  apiKey: process.env.OPEN_AI_API_KEY,
  organization: process.env.ORGANIZATION_ID,
  project: process.env.PROJECT_ID,
});

app.post("/completions", async (req, res) => {
  try {
    /**
     * Represents the response from the OpenAI chat completions API.
     * @typedef {Object} OpenAiChatResponse
     * @property {string} id - The unique identifier of the chat completion.
     * @property {number} object - The object type, which is always "chat.completion".
     * @property {number} created - The timestamp when the chat completion was created.
     * @property {number} model - The model used for the chat completion.
     * @property {Array} choices - The list of chat completion choices.
     */

    const responseOpenAi = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "user",
          content: [{ type: "text", text: req.body.message }],
        },
      ],
      max_tokens: 256,
      temperature: 1,
      top_p: 1,
    });
    res.status(200).send({ message: responseOpenAi.choices[0].message });
  } catch (error) {
    console.warn("Error ==> ", error);
  }
});

app.post("/api", (req, res) => {
  res
    .status(200)
    .send({ message: { role: "assistant", content: req.body.message } });
});

app.get("/api", (_req, res) => {
  res.json({ message: "Hello, world!" });
});

app.listen(port, () => {
  console.log("\x1b[36m[ Your Server is running on PORT :", port, "\x1b[36m]");
});
