import { Dashboard } from "../Dashboard";
import { Button } from "./common/Button";
import { Header } from "./Header";


export function App() {
  return (
    <div>
    <span>Hello World</span>
    <div>
      <Header/>
      <Dashboard/>
      <Button title ="Добавить"/>
    </div>
    </div>
  );
}

//export default App;
