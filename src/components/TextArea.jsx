export default function TextArea({ heading, children }) {
  return (
    <div className="education-section">
      <div className="flex flex-col items-center justify-center text-center">
        <div className="heading-img-div mb-4"></div>
        <h1 className="text-4xl font-fredoka text-white mt-0">{heading}</h1>
      </div>

      <div className="mt-8 p-6 rounded-xl shadow-lg bg-white max-w-4xl mx-auto text-black">
        {typeof children === "string" ? (
          <div className="whitespace-pre-wrap bg-white p-6 rounded-md shadow-md text-black">
            {children}
          </div>
        ) : (
          children
        )}
      </div>
    </div>
  );
}

