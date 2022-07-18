import { Routes, Route } from "react-router-dom";
import AddToCollection from "../Componnet/pages/AddToCollection/AddToCollection";
import CreateCollection from "../Componnet/pages/CreateCollection/CreateCollection";
import CreateNFT from "../Componnet/pages/CreateNFT/CreateNFT";
import Footer from "../Componnet/pages/Footer/Footer";
import HomePage from "../Componnet/pages/HomePage/HomePage";
import UserCollection from "../Componnet/pages/UserCollection/UserCollection";

const AppRouter = ({ account }) => {
  return (
    <>
      <Routes>
        <Route path="*" element={<HomePage />} />
        {account && (
          <Route path="/Create-Collection" element={<CreateCollection />} />
        )}
        {account && <Route path="/Create-NFT" element={<CreateNFT />} />}
        {account && (
          <Route path="/My-Collection" element={<UserCollection />} />
        )}
        {account && <Route path="/Add-Item" element={<AddToCollection />} />}
        {account && <Route path="/Contact-Us" element={<Footer />} />}
        
      </Routes>
    </>
  );
};
export default AppRouter;
