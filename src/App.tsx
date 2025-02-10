import { Button, Input, PasswordField } from "mogo-ui";

function App() {
  return (
    <>
      <div className="p-5">
        <Button
          variant={"clicki"}
          size={"small"}
          onClick={() => console.log("Hello world")}
        >
          on Click
        </Button>
        <div className="w-[50%] pt-3 flex gap-3">
          <div className="flex flex-col gap-3 w-full">
            <Input
              variant={"default"}
              placeholder="jhon doe"
              className="w-full"
              type="password"
              name="title"
            >
              Title
            </Input>
            <Input
              variant={"outlined"}
              placeholder=""
              className="w-full"
              type="password"
              name="title"
            >
              Title
            </Input>
            <Input variant={"standart"} name="goncang" placeholder=" ">
              Goncang
            </Input>
          </div>
          <div className="flex flex-col gap-3 w-full">
            <PasswordField
              placeholder="confirm"
              variant={"default"}
              className="w-full"
              name="nama"
            >
              Confirm
            </PasswordField>
            <PasswordField
              placeholder=" "
              variant={"outlined"}
              className="w-full"
              name="password"
            >
              Password
            </PasswordField>
            <PasswordField
              placeholder=" "
              variant={"standart"}
              className="w-full"
              name="confirm"
            >
              Confirm
            </PasswordField>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
