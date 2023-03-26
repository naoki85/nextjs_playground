import type { NextApiRequest, NextApiResponse } from 'next';
import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

interface Data {
  message: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const content = req.query.content;
  console.log(content);

  if (!content) {
    res.status(400).json({ message: 'not enough parameters' });
    return;
  }

  const response = await openai.createChatCompletion({
    model: 'gpt-3.5-turbo-0301',
    messages: [{ role: 'user', content: content as string }],
  });

  const answer = response.data.choices[0].message?.content;
  console.log(answer);
  res.status(200).json({ message: answer as string });
}
