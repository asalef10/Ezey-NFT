import "./Carousel.css";
import UseEzeyFunctions from "../../../Hook/useEzeyFunctionAPI";
import { useEffect, useState } from "react";

const CarouselNFT = () => {
  const { getAllData } = UseEzeyFunctions();
  const [data, setData] = useState([]);

  useEffect(() => {
    try {
      getData();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const getData = async () => {
    try {
      let res = await getAllData();
      setData(res?.res);

      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div>
        <h3 style={{ textAlign: "center" }}>
          The collections already on the site
        </h3>
      </div>
      <div class="slider">
        <div class="slide-track">
          {data?.map((item,i) => {
             return (
              <>

                <div key={item.id}  className="slide imgs " >
                  {/* <div className="caption"> */}

                  <img  id="img" src={item?.NFTUrl} alt="img" />
                  </div>
                  {/* <p className="opacity-low">dbz</p> */}

                {/* </div> */}
              </>
            );
          })}
          {data?.length ==0 && <h4 style={{textAlign:"center"}}>Loading...</h4>}
        </div>
      </div>
    </>
  );
};
export default CarouselNFT;
