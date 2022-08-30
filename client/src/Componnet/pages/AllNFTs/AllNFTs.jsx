import { useState } from "react";
import { useEffect } from "react";
import { useGlobalContext } from "../../../UseContext/UseContext";
import NavBar from "../../fetchers/NavBar/NavBar";
import Spinner from "../../fetchers/Spinner/Spinner";
import Message from "../../fetchers/Message/Message";
import "./AllNFTs.css";
const AllNFTs = () => {
  const { account } = useGlobalContext();
  useEffect(() => {
    window.scrollTo(0, 0);
    fetchData();
  }, []);

  const [image, setImage] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const fetchData = async () => {
    let result = await fetch("http://209.250.225.186:3000/getAllData");
    let data = await result.json();
    setImage(data.res);
    setLoading(false);
    return data;
  };

  return (
    <>
      {!account && <NavBar />}

      <h1 id="titleCN">Uploads of NFT collections</h1>
      {image[0] && <Message text={`--- Click on the image for more details ---`} />}
      {isLoading && (
        <div id="spinner">
          <Spinner />
        </div>
      )}

      <section class="grid-containerA">
        {image.map((item) => {
          return (
            <figure class="itemA r-span2A">
              <a
                target={"_blank"}
                href={`https://testnets.opensea.io/assets/mumbai/${item.contractAddress}/${item.tokenIds}`}
              >
                <img src={item.NFTUrl} alt="img NFT" />
              </a>
            </figure>
          );
        })}
      </section>
    </>
  );
};

export default AllNFTs;
