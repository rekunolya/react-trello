import { Bigcard } from "../Bigcard";
import { Dashboard } from "../Dashboard";
import { Modal } from "../Modal";
import { Button } from "./common/Button";
import { Header } from "./Header";
import { Date } from "./common/Date";
import { Input } from "./common/Input";
import "../css/styles.css"


export function App() {
  return (
    <div>
      <Header/>
      <Dashboard/>
      <Modal 
      title = "Перемещение карточки" 
      isVisible = {false}> 
      Переместить? 
      </Modal>
      <Bigcard title = "New card" isVisible = {true}/>
      
    </div>
  );
}

//export default App;
