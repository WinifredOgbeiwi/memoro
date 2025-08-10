"use client";
import React, { useState } from "react";
import HistoryTable from "@/app/components/HistoryTable";
import FolderCard from "@/app/components/ui/FolderCard";
import { createQuizzes } from "@/app/lib/data";
import { useRouter } from "next/navigation";
import Modal from "@/app/components/ui/Modal";

type Quiz = (typeof createQuizzes)[number];
const HistoryPage = () => {
  const [selectedQuiz, setSelectedQuiz] = useState<Quiz | null>(null);
  const router = useRouter();

  const handlePlayQuiz = () => {
    if (selectedQuiz) {
      router.push(`/play-quiz?id=${selectedQuiz.id}`);
    }
  };

  return (
    <section className="w-full h-full p-4">
      <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center sm:justify-start items-center gap-10 w-full mx-auto h-full">
        {createQuizzes.map((quiz) => (
          <FolderCard
            key={quiz.id}
            title={quiz.title}
            description={quiz.description}
            onClick={() => setSelectedQuiz(quiz)}
          />
        ))}
      </div>

      <div className="mt-10">
        <HistoryTable />
      </div>

      <Modal isOpen={!!selectedQuiz} onClose={() => setSelectedQuiz(null)}>
        {selectedQuiz && (
          <>
            <h2 className="text-xl font-bold mb-2">{selectedQuiz.title}</h2>
            <p className="text-gray-600 mb-4">{selectedQuiz.description}</p>
            <p className="text-sm text-gray-500 mb-1">
              <strong>Type:</strong> {selectedQuiz.type}
            </p>
            <p className="text-sm text-gray-500 mb-4">
              <strong>Played:</strong> {selectedQuiz.timesPlayed} times
            </p>
            <div className="flex justify-between">
              <button
                onClick={handlePlayQuiz}
                className="bg-secondary text-white px-4 py-2 rounded hover:bg-blue-700 transition"
              >
                Play Quiz
              </button>
              <button
                disabled
                onClick={handlePlayQuiz}
                className="bg-grey3  text-text-secondary px-4 py-2 rounded transition"
              >
                Edit Quiz
              </button>
            </div>
          </>
        )}
      </Modal>
    </section>
  );
};

export default HistoryPage;
