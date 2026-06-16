import Hello from "./Hello"

export default function HomePage() {
  return (
    <>
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
    </>
  );
}
