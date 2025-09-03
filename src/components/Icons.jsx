export default function Icons({ title, svgPath, color }) {
  return (
    <div className="tech-icons flex flex-col items-center justify-center w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32" title={title}>
      <svg
        role="img"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        className="w-3/4 h-3/4"
        fill={color}
      >
        <title>{title}</title>
        <path d={svgPath} />
      </svg>
      <p className="mt-1 text-sm text-center">{title}</p>
    </div>
  );
}
