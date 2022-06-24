import "./Steps.css";
const Steps = () => {
  return (
    <>
     <a className="btn btn-primary" data-popup-open="popup-1" href="#">Open Popup #1</a>
 
 <div className="popup" data-popup="popup-1">
     <div className="popup-inner">
         <h2>SOUPS</h2>
        <div className="popup-scroll"><p>
          
          </p></div>
         <p><a data-popup-close="popup-1" href="#">Close</a></p>
         <a className="popup-close" data-popup-close="popup-1" href="#">x</a>
     </div>
 </div>
    </>
  );
};
export default Steps;
