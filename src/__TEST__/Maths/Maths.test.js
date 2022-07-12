// test('hhh',()=>{
//     const myMockFn = jest.fn(cb => cb(null, true));

//     // myMockFn((err, val) => console.log(val));
// })

// test('foo',()=>{
//     jest.mock('./foo');
//     const foo = require('./foo');
//     // console.log(foo)
//     foo.mockImplementation((a,b)=> a+b)
//     expect(foo(2,1)).toEqual(3)
//     // console.log(foo(3,5))
// })

// test('mockImplementationOnce',()=>{
//     const funMock = jest.fn(()=> 'default').mockImplementationOnce(()=>3).mockImplementationOnce(()=> 2)
//     // console.log(funMock(),funMock(),funMock())

//     const funcMock1 = jest.fn();
//     funcMock1.mockReturnValue(()=> '3333')
//     funcMock1.mockReturnValueOnce(233)

//     // console.log(funcMock1(),funcMock1())

// })

// test("this mock function",()=>{
//     const mockFunc = jest.fn((a,b)=> a+b).mockImplementationOnce((a,b) => a/b)
//     mockFunc(3,5)
//     mockFunc(4,2)

//     expect(mockFunc).toHaveBeenCalled();
//     expect(mockFunc).toHaveBeenCalledWith(3, 5);
//     expect(mockFunc).toHaveBeenLastCalledWith(4,2)
//     // expect(mockFunc).toHaveBeenFirstCalledWith(3,5)
//     expect(mockFunc).toMatchSnapshot();

// })
// jest.mock('./math.js')

test('adding floating point numbers', () => {
  const value = 0.1 + 0.2;
  // expect(value).toBe(0.3);
  // expect(value).toBeCloseTo(0.3); // This works.
});

test('Tobe truethy', () => {
  expect(true).not.toBeFalsy();
});
