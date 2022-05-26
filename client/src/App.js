import "./App.css";
import AppRouter from "./Router/AppRouter";
import { BrowserRouter } from "react-router-dom";
import { useContext } from "react";
import { MyContext } from "../src/UseContext/UseContext";
import NavBar from "./Componnet/fetchers/NavBar/NavBar";
const App = () => {
  const { account } = useContext(MyContext);
  return (
    <>
      <div id="body" data-spy="scroll" data-target=".header">
        
        <BrowserRouter>
          {account&&<NavBar />}
          <AppRouter account={account} />
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;
