import "./Message.css";

const Message = ({ text }) => {
  return (
    <>
      <div className="info-msg">
        <i className="fa fa-info-circle"></i>
        &nbsp;{" "}
        <span style={{ textAlign: "center" }} id="span">
          {text}
        </span>
      </div>
    </>
  );
};
export default Message;
