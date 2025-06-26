export default function Icons({ title, svgPath, color }) {
    return (
    <div className="tech-icons w-16 h-16 flex items-center justify-center" title={title}>
      <svg
        role="img"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        fill={color}
      >
        <title>{title}</title>
        <path d={svgPath} />
      </svg>
    </div>
  );
}