import PersonTable from "./components/PersonTable";
import Hello from "./components/Hello";

export default function App() {
  return (
    <>
      <h1>Welcome</h1>
      <button
        onMouseEnter={() => {
          alert("Enter");
        }}
        onClick={() => {
          console.log("Test!");
        }}
      >
        Test
      </button>
      <Hello name="David" age={2} />
      <Hello name="Nate" age={29} />
      <PersonTable onMouseEnter={() => {
        console.log("persontable")
      }}/>
      <PersonTable />
    </>
  );
}
