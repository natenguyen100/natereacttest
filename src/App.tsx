import PersonTable from "./components/PersonTable";
import Hello from "./components/Hello";
import Test from "./test";

export default function App() {
  return (
    <>
      <h1>Welcome</h1>
      <button
        onClick={() => {
          console.log("Test");
        }}
      >
        Test
      </button>
      <Hello name="David" age={1} />
      <Hello name="Nate" age={29} />
      <PersonTable />
      <PersonTable />
    </>
  );
}
