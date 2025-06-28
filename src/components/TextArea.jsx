export default function TextArea({ heading, children }) {
  return (
    <div className="education-section">
      <div className="flex flex-col items-center justify-center text-center">
        <div className="heading-img-div mb-4">{/* optional image */}</div>
        <h1 className="text-4xl font-bold text-[#5d2a42] mt-0">{heading}</h1>
      </div>

      <div className="mt-8 p-6 rounded-xl shadow-lg bg-[#f4e2d8] max-w-4xl mx-auto text-[#5d2a42]">
        {typeof children === "string" ? (
          <div className="whitespace-pre-wrap bg-white p-6 rounded-md shadow-md text-gray-900">
            {children}
          </div>
        ) : (
          children
        )}
      </div>
    </div>
  );
}

