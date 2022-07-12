import axios from 'axios';
import Users from './Users';
import { waitFor } from '@testing-library/react';

jest.mock('axios');

const users = [
  {
    id: '112',
    name: 'hoang.cao',
  },
  {
    id: '223',
    name: 'position',
  },
];

test('Test API User', () => {
  // fake response
  const reps = axios.get.mockResolvedValue({ data: users });
  return Users.all().then((data) => expect(data).toEqual(users));
});

describe.each(['Status should return 200', 'Should return message'])(
  'Test Reject get API',
  (message) => {
    test('api user', function () {});
    test(message, async function () {
      const mockCallBack = jest.fn();
      await waitFor(() => {
        setupApiMock(mockCallBack);
      });
      const { calls } = mockCallBack.mock;
      expect(calls.length).toEqual(1);
      expect(calls[0][0].response.status).toEqual(200);
      expect(calls[0][0].response.message).toEqual('List empty users');
    });
  }
);

// test('Test API fail', async () => {
//     const mockCallBack = jest.fn();
//     await waitFor(()=>{
//         setupApiMock(mockCallBack);
//     })
//     console.log(mockCallBack.mock.calls,'omokom')
//     const {calls}=mockCallBack.mock;
//     test('Status should be 200', () => {
//         expect(calls.length).toEqual(1);
//     })
// })

function setupApiMock(cb) {
  const respError = {
    response: {
      status: 200,
      message: 'List empty users',
    },
  };
  axios.get.mockRejectedValueOnce({ ...respError });
  return Users.all().catch((error) => {
    cb(error);
  });
}
