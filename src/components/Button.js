const Button = (props) => {
  return (
    <button
      style={{ backgroundColor: props.color }}
      className="btn"
      onClick={props.helper}
    >
      {props.title}
    </button>
  );
};
export default Button;
