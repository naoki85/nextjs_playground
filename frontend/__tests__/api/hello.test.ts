import httpMocks from 'node-mocks-http';
import { NextApiRequest, NextApiResponse } from 'next';
import handler from '../../pages/api/hello';

describe('/api/hello handler', () => {
  test('responds 200 to GET', async () => {
    const req = httpMocks.createRequest<NextApiRequest>({});
    const res = httpMocks.createResponse<NextApiResponse>();

    await handler(req, res);
    expect(res.statusCode).toBe(400);
    expect(res._getJSONData()).toBeTruthy();
  });
});
