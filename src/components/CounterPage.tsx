let count = 5;

export default function CounterPage() {
  return (
    <>
      <button
        onClick={() => {
          console.log("Click");
          count = count + 1;
          console.log("counter:", count);
        }}
      >
        {count}
      </button>
    </>
  );
}
