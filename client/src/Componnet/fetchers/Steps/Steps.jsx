import "./Steps.css";
const Steps = ({ step1, step2,text }) => {
  return (
    <div class="containerSteps">
      <ul class="progressbar">
        <li className={step1}> {text?text:"Create Collection."}</li>
        <li className={step2}> Uploading NFT`S.</li>
      </ul>
    </div>
  );
};
export default Steps;
