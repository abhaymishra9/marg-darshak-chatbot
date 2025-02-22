'use client';

import { useRef, useState } from 'react';

const BotCard = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setSelectedFiles(Array.from(e.target.files));
    }
  };

  return (
    <div className="flex justify-center mt-8">
      <div className="bg-white rounded-lg p-6 w-full max-w-2xl shadow border">
        {/* Upload Area */}
        <div
          className="border-2 border-dashed border-gray-300 rounded-lg p-10 text-center bg-gray-50 cursor-pointer"
          onClick={() => fileInputRef.current?.click()}
        >
          <p className="text-gray-600 mb-1">Upload files to train Botsonic on your data</p>
          <p className="text-purple-600 font-medium mb-1 hover:underline">Click to upload</p>
          <p className="text-gray-400 text-sm">or drag and drop</p>
          <p className="text-gray-400 text-sm mt-1">Up to 100 MB in size. PDF, DOC, DOCX, TXT</p>
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileSelect}
            className="hidden"
            multiple
            accept=".pdf,.doc,.docx,.txt"
          />
        </div>

        {/* Upload Button */}
        <button className="mt-6 w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 transition">
          Upload and train
        </button>

        {/* Selected Files */}
        {selectedFiles.length > 0 && (
          <div className="mt-6 text-sm text-gray-700">
            <h3 className="font-semibold mb-2">Files</h3>
            <ul className="border rounded-md divide-y">
              {selectedFiles.map((file, index) => (
                <li key={index} className="px-4 py-2 flex justify-between items-center">
                  <span className="truncate max-w-[200px]">{file.name}</span>
                  <span className="text-gray-500 text-xs">{(file.size / 1024).toFixed(1)} KB</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default BotCard;
