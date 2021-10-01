import "./styles/style.css";
import { useList } from "./states/ListProvider";
import logo from "./assets/images/logo.png";
import WelcomeScreen from "./components/WelcomeScreen";
import ShoppingScreen from "./components/shopping/ShoppingScreen";

function App() {
  const { list } = useList();
  return (
    <div className="App">
      <img className="logo" src={logo} alt="eika" />
      <h1>Eika shopping list</h1>
      {list.length > 0 ? <ShoppingScreen /> : <WelcomeScreen />}
    </div>
  );
}

export default App;
