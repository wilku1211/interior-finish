const Arrow = ({ fill = "black", className = "" }) => {
  return (
    <svg
      className={className}
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.5132 9.04715L9.00023 17.028L0.48727 9.04715L1.51318 7.95285L8.25023 14.2688V0L9.75023 0V14.2688L16.4873 7.95285L17.5132 9.04715Z"
        fill={fill}
      />
    </svg>
  );
};

export default Arrow;
