import type { NextApiRequest, NextApiResponse } from 'next';
import { Configuration, OpenAIApi } from 'openai';

// const configuration = new Configuration({
//   apiKey: process.env.OPENAI_API_KEY,
// });
// const openai = new OpenAIApi(configuration);

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

  // const response = await openai.createChatCompletion({
  //   model: 'gpt-3.5-turbo-0301',
  //   messages: [
  //     {
  //       role: 'system',
  //       content: `
  //     あなたはアナリストを助けるチャットボットです。
  //     以下のルールを守って回答してください。
  //
  //     - あなたの名前はアナリシスヘルパーです。
  //     - 全て丁寧語で回答してください。
  //     - 1 行ずつ改行を入れてください。
  //     - 不明な点がある場合は、「分かりません」と回答してください。
  //     `,
  //     },
  //     { role: 'user', content: content as string },
  //   ],
  // });
  //
  // const answer = response.data.choices[0].message?.content;
  // console.log(answer);
  // res.status(200).json({ message: answer as string });
  res.status(200).json({ message: 'こんにちは' });
}
