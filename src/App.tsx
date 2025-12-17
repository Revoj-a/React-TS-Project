import { useRef } from "react";
import Button from "./components/Button";
import Container from "./components/Container";
import Input from "./components/Input";
import Form from "./components/Form";

function App() {
  function handleSave(data: unknown) {
    const extractedData = data as { name: string; age: string; test: string };
    console.log(extractedData);
  }

  const input = useRef<HTMLInputElement>(null);
  return (
    <main>
      <Form onSave={handleSave}>
        <Input id="name" label="Your name" type="text" />
        <Input id="age" label="Your age" type="number" />
        <Input label="Test" id="test" ref={input} type="text" />
        <p>
          <Button>Save</Button>
        </p>
      </Form>
      <p>
        <Button href="https://google.com">A Link</Button>
      </p>
      <Container as={Button}>Click Me</Container>
    </main>
  );
}

export default App;
