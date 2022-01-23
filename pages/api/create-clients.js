import { table } from "../../lib/airtable/client";
import { parseBody } from "next/dist/next-server/server/api-utils";
const fs = require("fs");

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
require("dotenv").config();
const cors = require("cors");
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async (req, res) => {
  if (req.method !== "POST")
    return res.json({
      msg: "Method not allowed",
    });
  // console.log({req})

  const { fullName, email, phone, message, type } = JSON.parse(req.body);

  if (!email)
    return res.json({
      msg: "Email is required",
    });

  try {
    table.create(
      [
        {
          fields: { fullName, email, phone, message },
        },
      ],
      { typecast: true },
      (err, rec) => {
        if (err) return;
        // console.log({ rec })
      }
    );
    const userMsg = `
    Hey ${email},\r\n
    \r\n
    Thank you for being a part of our community and downloading one of our free resources. Please let us know if there is anything we can do for you to help propel your career and life to a new dimension.\r\n
    \r\n
    Very Respectfully,\r\n 
    Employ The V.E.T.S Staff\r\n
    Visit Us: <a href='https://www.employthevets.com' target='_blank' rel='no referrer noopener'>employthevets.com</a>\r\n
    Shop Merchandise: <a href='https://shop.employthevets.com' target='_blank' rel='no referrer noopener'>shop.employthevets.com</a>\r\n
    \r\n
    <em>“We are committed to proving our veterans with the top resources to ensure that they get out of the military and become successful.”</em>
`;
    const msg = `
Hey ${email},\r\n
\r\n
Thank you for being a part of our community. Please let us know if there is anything we can do for you to help propel your career and life to a new dimension.\r\n
\r\n
Very Respectfully,\r\n 
Employ The V.E.T.S Staff\r\n
Visit Us: <a href='https://www.employthevets.com' target='_blank' rel='no referrer noopener'>employthevets.com</a>\r\n
Shop Merchandise: <a href='https://shop.employthevets.com' target='_blank' rel='no referrer noopener'>shop.employthevets.com</a>\r\n
\r\n
<em>“We are committed to proving our veterans with the top resources to ensure that they get out of the military and become successful.”</em>
`;
    const filename = (type) => {
      switch (type) {
        case "resume-site":
          return "resume-site.zip";
        case "resume":
          return "resume-checklist.pdf";
        case "linkedIn":
          return "linkedIn-checklist.pdf";
        case "subscribe":
          "";
        default:
          "";
      }
    };

    const downloadData =
      type !== "subscribe"
        ? {
            to: email.toString(),
            bcc: "staff@employthevets.com",
            from: "staff@employthevets.com",
            subject: `Thank for joining the community, your file is attached.`,
            text: userMsg,
            attachments: [
              {
                content: fs
                  .readFileSync(`${__dirname}/${filename(type)}`)
                  .toString("base64"),
                filename: filename(type),
                type:
                  type === "resume-site"
                    ? "application/zip"
                    : "application/pdf",
                disposition: "attachment",
              },
            ],
            html: userMsg.replace(/\r\n/g, "<br>"),
          }
        : {
            to: email.toString(),
            bcc: "staff@employthevets.com",
            from: "staff@employthevets.com",
            subject: `Thank for joining the community`,
            text: msg,
            html: msg.replace(/\r\n/g, "<br>"),
          };
   const emailRes =  await sgMail.send(downloadData);

    // console.log({emailRes})
    res.statusCode = 200;
    res.json({ msg: `thank you ${email}`, status: true });
  } catch (err) {
    res.statusCode = 500;
    res.json({
      msg: "Method not allowed",
      err: `${err}`,
    });
  }
};
