import { useState } from 'react';

export default function TextArea({ text, heading }) {
  return (
    <div className="max-w-xl mx-auto my-8 px-4">
      <h2 className="text-xl font-semibold mb-3 text-gray-800">{heading}</h2>
      <div className="w-full p-6 bg-white rounded-md shadow-md text-gray-900 whitespace-pre-wrap">
        {text}
      </div>
    </div>
  );
}

