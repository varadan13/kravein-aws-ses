import express from "express";
import sendEmail from "./sendEmail.mjs";

const handler = async (request, response) => {
  const { to = "rcaesar1996@gmail.com", message = "Success" } = request.query;
  try {
    await sendEmail({ to, message });
    response.status(200).json({ to, message });
  } catch {
    response.status(500).send("Not able send email!");
  }
};

const app = express();
const port = 5000;

app.get("/send", (req, res) => {
  handler(req, res);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
