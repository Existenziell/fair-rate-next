/**
**  Backend for Twilio SMS
**  https://www.twilio.com/blog/use-serverless-functions-send-sms-react-vercel-twilio
**/

const client = require("twilio")(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
)

export default async (req, res) => {
  res.statusCode = 200
  res.setHeader("Content-Type", "application/json")

  const accountSid = process.env.TWILIO_ACCOUNT_SID;
  const authToken = process.env.TWILIO_AUTH_TOKEN;
  const client = require('twilio')(accountSid, authToken);

  client.messages.create({
    from: process.env.TWILIO_PHONE_NUMBER,
    to: req.body.to,
    body: req.body.message,
  })
    .then(() => {
      res.send(JSON.stringify({ success: true }))
    })
    .catch((err) => {
      console.log(err)
      res.send(JSON.stringify({ success: false }))
    })
}
