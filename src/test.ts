//intersection types
//union types
interface Input {
  count: number;
  id: number;
}

interface Output {
  label: string;
  id: string;
}

type InputOrOutput = Input | Output;
type InputAndOutput = Input & Output;

type Test = string | number | Input;
const test1: Test = "Hello";
const test2: Test = 5;
const test3: Test = true;
const test4 = {
  count: 1,
  label: "hello",
  id: 1,
};

const test5: InputAndOutput = test4;
console.log(test1);
console.log(test2);
console.log(test3);
console.log(test4);
console.log(test5.id);

export default 1;
