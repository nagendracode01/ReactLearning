function Button({ label, color, size = "medium" }) {
  return (
    <button
      className={size}
      style={{ backgroundColor: color }}
    >
      {label}
    </button>
  );
}

export default Button;