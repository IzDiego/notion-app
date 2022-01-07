/* eslint-disable import/no-anonymous-default-export */
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
require("dotenv").config();
import { Client } from '@notionhq/client';

const notion = new Client({ auth: process.env.NOTION_API_KEY });

export default async(req, res) => {
  const titulo = req.body.tarea;
  const status = req.body.status;
  const proyecto = req.body.proyecto;

  try {
    const response = await notion.pages.create({
      parent: { database_id: process.env.NOTION_DATABASE_ID },
      properties: {
        Proyecto: {
          type:"rich_text",
          rich_text: [
            {
              text: {
                content: proyecto,
              },
            },
          ],
        },
        Status: {
          id: "%5EOE%40",
          type: "select",
          select: { name: status},
        },
        title: {
          title: [
            {
              text: {
                content: titulo,
              },
            },
          ],
        },
      },
    });
    console.log(response);
    console.log("Success! Entry added.");
    res.status(200).json("Success! Entry added.");
  } catch (error) {
    console.error(error.body);
    res.status(400).json("Error! Entry not added.");
  }
};
