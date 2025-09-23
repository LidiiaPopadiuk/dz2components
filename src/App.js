import "./App.css";
import { Greeting } from "./components/Greeting";
import { Messaga } from "./components/Messaga";
import { Button } from "./components/Button";

function App() {
  const userName = 'Lidiia'
  return (
    <div>
      <Greeting name={userName} />
      <Messaga textLogin='Увійти' textAuth='Зареєструватися'/>
      <Button onClick={() => alert("You have pressed this button")}/>
      {/* <Button onClick={(e) => console.log(e.target)}/> */}
    </div>
  );
}

export default App;
