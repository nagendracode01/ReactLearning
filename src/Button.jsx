function Button({ label, color, size = "medium",onClick }) {
  return (
    <button
      className={size}
      style={{ backgroundColor: color }}
       onClick={e => {
        e.stopPropagation();       // don't let the click reach the card
        if (onClick) onClick();    // run the handler, if one was given
      }}
    >
      {label}
    </button>
  );
}

export default Button;