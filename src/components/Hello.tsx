interface HelloProps {
  name: string;
  age: number;
}

export default function Hello(props: HelloProps) {
  return (
    <>
      <p>
        <b>Hello</b>
      </p>
      {/* <p> {props.name} </p> */}
      {/* <p> {props.age} </p> */}
    </>
  );
}
