'use client'
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UploadPdfQuiz = () => {
  const [pdfFile, setPdfFile] = useState<File | null>(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("learning");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.type !== "application/pdf") {
        toast.error("Please upload a PDF file only");
        return;
      }
      setPdfFile(file);
      toast.success("PDF uploaded successfully!");
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({
      title,
      description,
      type,
      pdfFileName: pdfFile?.name || "No file uploaded",
    });
  };

  return (
    <div className=" p-6 bg-white rounded-md shadow-md ">
      <ToastContainer position="top-right" autoClose={3000} />
      <h1 className="text-2xl font-semibold mb-6 text-center">
        Upload PDF to Generate Quiz
      </h1>

      <form onSubmit={handleSubmit} className="space-y-6">

        <div>
          <label className="block mb-2 font-medium" htmlFor="pdf-upload">
            Upload PDF
          </label>

          <label
            htmlFor="pdf-upload"
            className="cursor-pointer flex flex-col items-center justify-center border-2 border-dashed border-gray-400 rounded-md p-6 text-center hover:border-primary4 transition relative"
          >
           
            <input
              id="pdf-upload"
              type="file"
              accept="application/pdf"
              onChange={handleFileChange}
              className="absolute inset-0 opacity-0 cursor-pointer"
            />

            {/* Upload Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-12 h-12 mb-3 text-primary3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M12 12v8m0 0l-4-4m4 4l4-4M12 4v8"
              />
            </svg>

            {/* Info Text */}
            <p className="text-text-secondary font-bold">Choose a file or drag & drop it here</p>
              <p className="text-text-secondary mb-2 text-sm">pdf up to 10mb</p>

        
            {pdfFile && (
              <p className="text-secondary font-semibold mb-2">
                {pdfFile.name} ({(pdfFile.size / 1024 / 1024).toFixed(2)} MB)
              </p>
            )}

            {/* Browse Button */}
            <button
              type="button"
              onClick={() => document.getElementById("pdf-upload")?.click()}
              className="mt-1 px-4 py-1 bg-primary3 text-white rounded hover:bg-primary3 transition hover:scale-105"
            >
              Browse File
            </button>
          </label>
        </div>

        {/* Title Input */}
        <div>
          <label className="block mb-2 font-medium" htmlFor="title">
            Quiz Title
          </label>
          <input
            id="title"
            type="text"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter quiz title"
            className="border p-2 w-full rounded"
          />
        </div>

     
        <div>
          <label className="block mb-2 font-medium" htmlFor="description">
            Quiz Description
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter quiz description"
            className="border p-2 w-full rounded resize-none"
            rows={3}
          />
        </div>


        <div>
          <label className="block mb-2 font-medium" htmlFor="type">
            Quiz Type
          </label>
          <select
            id="type"
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="border p-2 w-full rounded"
          >
            <option value="learning">Learning</option>
            <option value="exam">Exam</option>
          </select>
        </div>


        <button
          type="submit"
          disabled={!pdfFile || !title}
          className="w-full bg-primary4 text-white font-semibold py-2 rounded hover:bg-primary3 transition disabled:opacity-50"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default UploadPdfQuiz;
