function Button({ label, color, size = "medium",onClick }) {
  return (
    <button
      className={size}
      style={{ backgroundColor: color }}
      onClick={onClick}
    >
      {label}
    </button>
  );
}

export default Button;