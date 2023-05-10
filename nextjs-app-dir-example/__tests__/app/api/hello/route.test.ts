/**
 * @jest-environment node
 */
import { GET } from "../../../../src/app/api/hello/route";

jest.mock('next/server', () => {
  const originalNextServer = jest.requireActual('next/server');
  return {
    ...originalNextServer,
    NextResponse: {
      ...originalNextServer.NextResponse,
      json: jest.fn().mockImplementation((data, { status }) => {
        return { ...originalNextServer.NextResponse, data, status };
      }),
    },
  };
});

describe('/hello API', () => {
  it('should return message', async () => {
    const res = await GET();

    expect(res.status).toBe(200);
    // @ts-ignore
    expect(res.data.message).toBe("hello");
  });
});