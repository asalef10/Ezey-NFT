import { useState } from "react";
import { useEffect } from "react";
import "./AllNFTs.css";
const AllNFTs = () => {
  useEffect(() => {
    fetchData();
  }, []);

  const [image, setImage] = useState([]);

  const fetchData = async () => {
    let result = await fetch("http://209.250.225.186:3000/getAllData");
    let data = await result.json();
    setImage(data.res);
    return data;
  };

  return (
    <>
      <h1 id="titleCN">Uploads of NFT collections</h1>
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
