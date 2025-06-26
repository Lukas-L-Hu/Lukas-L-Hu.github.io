export default function Icons({ title, svgPath, color }) {
  return (
    <div className="tech-icons w-32 h-32 flex flex-col items-center justify-center" title={title}>
      <svg
        role="img"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        fill={color}
      >
        <title>{title}</title>
        <path d={svgPath} />
      </svg>
      <p className="mt-1 text-sm text-center">{title}</p>
    </div>
  );
}
