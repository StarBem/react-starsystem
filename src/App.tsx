import { Button } from "./components";

const App = () => {
  return (
    <div>
      <h1>Buttons</h1>
      <Button title="Primary" variant="primary" />
      <br />
      <Button title="Secondary" />
      <br />
      <Button title="Black" variant="black" />
      <br />
      <Button title="Outline" type="outline" />
      <br />
      <Button title="Rounded" rounded />
      <br />
      <Button title="Clear" type="clear" />
    </div>
  );
};

export default App;
