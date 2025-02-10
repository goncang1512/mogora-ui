import { Button } from "mogo-ui";

function App() {
  return (
    <>
      <div className="p-5 ">
        <Button
          variant={"clicki"}
          size={"small"}
          onClick={() => console.log("Hello world")}
        >
          on Click
        </Button>
      </div>
    </>
  );
}

export default App;
