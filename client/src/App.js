import "./App.css";
import AppRouter from "./Router/AppRouter";
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./Componnet/fetchers/NavBar/NavBar";
import { useWeb3React } from "@web3-react/core";
 

const App = () => {
  const { account } = useWeb3React();

  return (
    <>
      <div id="body" data-spy="scroll" data-target=".header">
        <Router>
          {account && <NavBar />}
          <AppRouter account={account} />
        </Router>
      </div>
    </>
  );
};

export default App;
