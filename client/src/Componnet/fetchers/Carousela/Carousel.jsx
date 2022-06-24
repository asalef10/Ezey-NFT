import "./Carousel.css";
import UseEzeyFunctions from "../../../Hook/useEzeyFunctionAPI";
import { useEffect, useState } from "react";

const CarouselNFT = () => {
  const { getAllData } = UseEzeyFunctions();
  const [data, setData] = useState([
    "https://www.business2community.com/wp-content/uploads/2022/05/rare-golden-bored-ape-nft-2177.png",
    "https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/j-cole-miracle-studio.jpg",
    "https://bitcoinist.com/wp-content/uploads/2021/11/vector-tupac-wpap.jpg",
    "https://lh3.googleusercontent.com/Go1x0M3i52tYeyMDONlo2aBxHe09ZlmojCrll0cMuV1WNKH97eCmhbiqwVayjWyxDp6qF4rHQ1KB0ReWE7A0bTllqqqhmc4fKP1t1pc=w600",
    "https://pbs.twimg.com/profile_images/1494527557332611072/Fyrx80Gz_400x400.jpg",
    "https://sp-ao.shortpixel.ai/client/q_glossy,ret_img/https://jingdaily.com/wp-content/uploads/2022/03/NFT-opensea-1240x698.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb7QXO2UZsP_zGTd_0Y-_ZHiYr6rJzOCY5c5E3S5uvkS7t5p-2zZ54YbDaq8nKlzJH3AU&usqp=CAU",
    "https://miro.medium.com/max/800/0*LucR_F6l1NhxKqNO.jpg",
    "https://cdna.artstation.com/p/assets/images/images/045/772/398/large/aathithan-luckeeswaran-ash02.jpg?1643499761",
    "https://preview.redd.it/9ukkfo3t4f081.jpg?auto=webp&s=f5a9f1df3ab31c5de35831b5c1c10949fcd49a23",
    "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9a81f87d-18d2-47bc-bc3d-44b33e9a3fb0/devviij-bfd75bbc-27cd-45b5-a623-2e4633a2417e.png/v1/fill/w_894,h_894,q_70,strp/infernal_ape_nft_by_nelsini0s_devviij-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzlhODFmODdkLTE4ZDItNDdiYy1iYzNkLTQ0YjMzZTlhM2ZiMFwvZGV2dmlpai1iZmQ3NWJiYy0yN2NkLTQ1YjUtYTYyMy0yZTQ2MzNhMjQxN2UucG5nIiwiaGVpZ2h0IjoiPD0xMjgwIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uud2F0ZXJtYXJrIl0sIndtayI6eyJwYXRoIjoiXC93bVwvOWE4MWY4N2QtMThkMi00N2JjLWJjM2QtNDRiMzNlOWEzZmIwXC9uZWxzaW5pMHMtNC5wbmciLCJvcGFjaXR5Ijo5NSwicHJvcG9ydGlvbnMiOjAuNDUsImdyYXZpdHkiOiJjZW50ZXIifX0._goZF9pAlKFLL2ZM3yDnhfPIxiABLc998E_UMUJ8Qeg",
    "https://mintspace-media.fra1.digitaloceanspaces.com/wp-content/uploads/2021/12/17141610/unnamed-1-2.jpg",
  ]);
  useEffect(() => {
    try {
      // getData();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const getData = async () => {
    try {
      // let res = await getAllData();
      // setData(res?.res);

      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  let count = 0
  return (
    <>
      <div>
        <h3 style={{ textAlign: "center" }}>
          The collections already on the site
        </h3>
      </div>
      <div className="slider">
        <div className="slide-track">
          {data?.map((item, i) => {
            {count+=1}
            return (
              <>
                {/* {console.log(item)} */}

                <div key={count} className="slide imgs ">
                  <img id="img" src={item} alt="img" />
                </div>
              </>
            );
          })}
          {data?.length == 0 && (
            <h4 style={{ textAlign: "center" }}>Loading...</h4>
          )}
        </div>
      </div>
    </>
  );
};
export default CarouselNFT;
