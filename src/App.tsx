import { EllipsisVertical, MoveRight } from "lucide-react";
import {
  Accordion,
  Button,
  Card,
  Checkbox,
  Input,
  Label,
  Popover,
  Select,
  Textarea,
  Toggle,
} from "mogo-ui";
import { useEffect, useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("remember");
    console.log(name);
    alert(`I choose "${name}"`);
  };

  const [onPressed, setOnPressed] = useState(false);

  return (
    <div className="dark:bg-slate-800 bg-white min-h-screen p-10">
      <Card className="">
        <Card.Picture src="https://flowbite.com/docs/images/blog/image-1.jpg" />
        <Card.Header className="flex items-center justify-between">
          <Card.Title>Noteworthy technology acquisitions 2021</Card.Title>
          <Popover>
            <Popover.Trigger className="cursor-pointer">
              <button className="cursor-pointer hover:bg-gray-200 size-8 flex items-center justify-center rounded-md">
                <EllipsisVertical size={20} />
              </button>
            </Popover.Trigger>
            <Popover.Content align="left" className="w-32">
              <button className="hover:bg-gray-300 rounded-md w-full py-1">
                Edit
              </button>
              <button className="hover:bg-gray-300 rounded-md w-full py-1">
                Delete
              </button>
              <button className="hover:bg-gray-300 rounded-md w-full py-1">
                Add
              </button>
            </Popover.Content>
          </Popover>
        </Card.Header>
        <Card.Content>
          <p>
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
        </Card.Content>
        <Card.Footer>
          <Button className="flex items-center gap-2" variant={"primary"}>
            Read more <MoveRight size={20} />
          </Button>
        </Card.Footer>
      </Card>
      <div className="p-10">
        <Toggle pressed={onPressed} onPressedChange={setOnPressed}>
          B
        </Toggle>
        <Textarea theme={"danger"} />
      </div>
      <div className="p-10">
        <form onSubmit={onSubmit}>
          <Checkbox name="remember" size={"sm"} variant={"primary"} />
          <Label htmlFor="remember">goncang</Label>
          <Button type="submit" variant={"clicki"} size={"small"}>
            on Click
          </Button>
        </form>
      </div>
      <div className="p-5">
        <Button
          variant={"clicki"}
          size={"small"}
          onClick={() => setDarkMode(!darkMode)}
        >
          on Click
        </Button>
        <div className="w-[50%] pt-3 flex gap-3">
          <div className="w-full">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              theme={"info"}
              variant={"underline"}
              placeholder="jhon doe"
            />
          </div>
        </div>
      </div>
      <div className="h-screen"></div>
      <div className="h-screen">
        <div className="grid grid-cols-3">
          <form onSubmit={onSubmit} className="w-full flex flex-col gap-2 pl-5">
            <Select name="name" className="rounded-lg w-full">
              <Select.Trigger className="w-full">
                <Button variant={"primary"} className="w-full" type="button">
                  Choose
                </Button>
              </Select.Trigger>
              <Select.Content>
                <Select.Item value={"goncang"}>goncang</Select.Item>
                <Select.Item value={"samudera"}>samudera</Select.Item>
              </Select.Content>
            </Select>
            <Button type="submit">submit</Button>
          </form>
        </div>
      </div>

      <div className="h-screen grid grid-cols-4 gap-3 px-10">
        {Array.from({ length: 4 }).map(() => {
          return (
            <div>
              <Popover>
                <Popover.Trigger>
                  <Button variant={"primary"} className="w-full" type="button">
                    klik
                  </Button>
                </Popover.Trigger>
                <Popover.Content className="flex flex-col gap-2">
                  <Button>Edit</Button>
                  <Button>Delete</Button>
                </Popover.Content>
              </Popover>
            </div>
          );
        })}
        <div>
          <Accordion>
            <Accordion.Item value={"item-1"}>
              <Accordion.Trigger>Is it accessible?</Accordion.Trigger>
              <Accordion.Content>hello goncang</Accordion.Content>
              <Accordion.Content>hello goncang</Accordion.Content>
            </Accordion.Item>
            <Accordion.Item value={"item-2"}>
              <Accordion.Trigger>Is it accessible?</Accordion.Trigger>
              <Accordion.Content>hello samudera</Accordion.Content>
              <Accordion.Content>hello samudera</Accordion.Content>
            </Accordion.Item>
            <Accordion.Item value={"item-3"}>
              <Accordion.Trigger>Is it accessible?</Accordion.Trigger>
              <Accordion.Content>hello samudera</Accordion.Content>
              <Accordion.Content>hello samudera</Accordion.Content>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
    </div>
  );
}

export default App;
