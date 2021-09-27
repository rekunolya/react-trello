import { Bigcard } from "../Bigcard";
import { Dashboard } from "../Dashboard";
import { Modal } from "../Modal";
import { Button } from "./common/Button";
import { Header } from "./Header";
import { Date } from "./common/Date";
import { Input } from "./common/Input";


export function App() {
  return (
    <div>
    <span>Hello World</span>
    <div>
      <Header/>
      <Dashboard/>
      <Modal 
      title = "Перемещение карточки" 
      text = "Переместить?"/>
      <Bigcard title = "New card"/>
      <Date />
      <Input/>
    </div>
    </div>
  );
}

//export default App;
