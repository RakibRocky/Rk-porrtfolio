import "./Animate.scss";
import "animate.css";
const AnimatedLetters = ({ letterClass, nameArray, idx }) => {
  return (
    <span>
      {nameArray.map((char, i) => (
        <span key={char + i} className={`${letterClass} _${i + idx}`}>
          {char}
        </span>
      ))}
    </span>
  );
};
export default AnimatedLetters;
