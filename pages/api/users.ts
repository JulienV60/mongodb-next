import type { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
  name: string;
}[];
export default function handler(
  request: NextApiRequest,
  response: NextApiResponse<ResponseData>
) {
  if (request.method === "GET") {
    response.status(200).json([{ name: "John Doe" }]);
  } else if (request.method === "POST") {
    response.status(201).json([{ name: "Jane Doe" }]);
  }
}
