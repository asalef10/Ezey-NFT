import "./Steps.css";
const Steps = ({ step1, step2 }) => {
  return (
    <div class="containerSteps">
      <ul class="progressbar">
        <li className={step1}> Create Collection.</li>
        <li className={step2}> Uploading works.</li>
      </ul>
    </div>
  );
};
export default Steps;
