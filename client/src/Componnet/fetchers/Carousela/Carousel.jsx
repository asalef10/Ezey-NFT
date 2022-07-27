import "./Carousel.css";
import { useEffect } from "react";

const CarouselNFT = () => {
  const data = [
    {
      id: 1,
      imgURI:
        "https://www.business2community.com/wp-content/uploads/2022/05/rare-golden-bored-ape-nft-2177.png",
    },
    {
      id: 2,
      imgURI:
        "https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/j-cole-miracle-studio.jpg",
    },
    {
      id: 3,
      imgURI:
        "https://bitcoinist.com/wp-content/uploads/2021/11/vector-tupac-wpap.jpg",
    },
    {
      id: 4,
      imgURI:
        "https://lh3.googleusercontent.com/Go1x0M3i52tYeyMDONlo2aBxHe09ZlmojCrll0cMuV1WNKH97eCmhbiqwVayjWyxDp6qF4rHQ1KB0ReWE7A0bTllqqqhmc4fKP1t1pc=w600",
    },
    {
      id: 5,
      imgURI:
        "https://pbs.twimg.com/profile_images/1494527557332611072/Fyrx80Gz_400x400.jpg",
    },
    {
      id: 6,
      imgURI:
        "https://sp-ao.shortpixel.ai/client/q_glossy,ret_img/https://jingdaily.com/wp-content/uploads/2022/03/NFT-opensea-1240x698.jpg",
    },
    {
      id: 7,
      imgURI:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb7QXO2UZsP_zGTd_0Y-_ZHiYr6rJzOCY5c5E3S5uvkS7t5p-2zZ54YbDaq8nKlzJH3AU&usqp=CAU",
    },
    { id: 8, imgURI: "https://miro.medium.com/max/800/0*LucR_F6l1NhxKqNO.jpg" },
    {
      id: 9,
      imgURI:
        "https://cdna.artstation.com/p/assets/images/images/045/772/398/large/aathithan-luckeeswaran-ash02.jpg?1643499761",
    },
    {
      id: 10,
      imgURI:
        "https://preview.redd.it/9ukkfo3t4f081.jpg?auto=webp&s=f5a9f1df3ab31c5de35831b5c1c10949fcd49a23",
    },
    {
      id: 11,
      imgURI:
        "eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzlhODFmODdkLTE4ZDItNDdiYy1iYzNkLTQ0YjMzZTlhM2ZiMFwvZGV2dmlpai1iZmQ3NWJiYy0yN2NkLTQ1YjUtYTYyMy0yZTQ2MzNhMjQxN2UucG5nIiwiaGVpZ2h0IjoiPD0xMjgwIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uud2F0ZXJtYXJrIl0sIndtayI6eyJwYXRoIjoiXC93bVwvOWE4MWY4N2QtMThkMi00N2JjLWJjM2QtNDRiMzNlOWEzZmIwXC9uZWxzaW5pMHMtNC5wbmciLCJvcGFjaXR5Ijo5NSwicHJvcG9ydGlvbnMiOjAuNDUsImdyYXZpdHkiOiJjZW50ZXIifX0",
    },
    {
      id: 12,
      imgURI:
        "eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzlhODFmODdkLTE4ZDItNDdiYy1iYzNkLTQ0YjMzZTlhM2ZiMFwvZGV2dmlpai1iZmQ3NWJiYy0yN2NkLTQ1YjUtYTYyMy0yZTQ2MzNhMjQxN2UucG5nIiwiaGVpZ2h0IjoiPD0xMjgwIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uud2F0ZXJtYXJrIl0sIndtayI6eyJwYXRoIjoiXC93bVwvOWE4MWY4N2QtMThkMi00N2JjLWJjM2QtNDRiMzNlOWEzZmIwXC9uZWxzaW5pMHMtNC5wbmciLCJvcGFjaXR5Ijo5NSwicHJvcG9ydGlvbnMiOjAuNDUsImdyYXZpdHkiOiJjZW50ZXIifX0",
    },
    {
      id: 13,
      imgURI:
        "https://mintspace-media.fra1.digitaloceanspaces.com/wp-content/uploads/2021/12/17141610/unnamed-1-2.jpg",
    },
  ];
  useEffect(() => {
    try {
    } catch (error) {
      console.log(error);
    }
  }, []);

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
            return (
              <>
                <div key={item.id.toString()} className="slide imgs ">
                  <img id="img" src={item.imgURI} alt="img" />
                </div>
              </>
            );
          })}
          {data?.length === 0 && (
            <h4 style={{ textAlign: "center" }}>Loading...</h4>
          )}
        </div>
      </div>
    </>
  );
};
export default CarouselNFT;
