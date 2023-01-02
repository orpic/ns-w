import "./App.css";
import { ChatButton, MainNavbar, NumTextbox } from "./components";

function App() {
  return (
    <header className="app-container">
      <MainNavbar />
      <NumTextbox />
      <ChatButton />
    </header>
  );
}

export default App;
