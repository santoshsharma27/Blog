export default function Button({
  type = "button",
  bgColor = "bg-blue-600",
  textColor = "text-white",
  className = "",
  children,
  ...props
}) {
  return (
    <button
      className={`px-4 py-2 rounded-lg ${bgColor} ${textColor} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
