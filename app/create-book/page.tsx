// pages/upload-photos.tsx
"use client";
import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { UploadCloud } from "lucide-react";

const UploadPhotos: React.FC = () => {
  const [images, setImages] = useState<File[]>([]);
  const [previews, setPreviews] = useState<string[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFiles = (files: FileList) => {
    const filesArray = Array.from(files);
    const imageFiles = filesArray.filter((file) =>
      file.type.startsWith("image/")
    );

    setImages((prev) => [...prev, ...imageFiles]);
    const newPreviews = imageFiles.map((file) =>
      URL.createObjectURL(file)
    );
    setPreviews((prev) => [...prev, ...newPreviews]);

    // Revoke object URLs to avoid memory leaks
    return () => {
      newPreviews.forEach((preview) => URL.revokeObjectURL(preview));
    };
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) handleFiles(e.target.files);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (e.dataTransfer.files) handleFiles(e.dataTransfer.files);
  };

  const handleUpload = () => {
    console.log("Uploading:", images);
    // TODO: Replace with real upload logic
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white p-6">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-8">
        <h1 className="text-3xl font-bold text-center text-blue-800 mb-6">
          Upload Your Photos
        </h1>

        {/* Dropzone */}
        <div
          onClick={() => fileInputRef.current?.click()}
          onDragOver={(e) => e.preventDefault()}
          onDrop={handleDrop}
          className="border-4 border-dashed border-blue-300 rounded-xl p-10 text-center cursor-pointer hover:border-blue-500 transition"
        >
          <UploadCloud className="mx-auto mb-4 text-blue-500" size={44} />
          <p className="text-blue-700 font-medium">
            Click or drag and drop images here
          </p>
          <input
            type="file"
            accept="image/*"
            multiple
            ref={fileInputRef}
            onChange={handleImageChange}
            className="hidden"
          />
        </div>

        {/* Preview Grid */}
        <AnimatePresence>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 my-6">
            {previews.map((src, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="overflow-hidden rounded-xl shadow"
              >
                <img
                  src={src}
                  alt={`Preview ${index + 1}`}
                  className="w-full h-40 object-cover transition-transform duration-200 hover:scale-105"
                />
              </motion.div>
            ))}
          </div>
        </AnimatePresence>

        {/* Upload Button */}
        {images.length > 0 && (
          <div className="text-center mt-4">
            <button
              onClick={handleUpload}
              className="bg-blue-600 text-white px-6 py-2 rounded-xl font-semibold hover:bg-blue-700 shadow-md transition"
            >
              Upload {images.length} Photo{images.length > 1 && "s"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default UploadPhotos;
