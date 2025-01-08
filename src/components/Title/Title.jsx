import "./Title.css";
const Title = ({ text1, text2 }) => {
  return (
    <>
      <div className="contenedor">
        <p className="contenedor__text">
          {text1}
          <span className="text__span"> {text2}</span>
        </p>
        <p className="contenedor__line"></p>
      </div>
    </>
  );
};

export default Title;
