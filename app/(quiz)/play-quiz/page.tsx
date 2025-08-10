"use client";
import { useSearchParams, useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { quiz } from "@/app/lib/data";

const PlayQuizPage = () => {

  const router = useRouter();


  const [phase, setPhase] = useState<"instructions" | "quiz" | "result">("instructions");
  const [score, setScore] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0); 

  useEffect(() => {
    if (phase === "quiz" && quiz.type === "exam") {
      if (timeLeft <= 0) {
        setPhase("result");
        return;
      }
      const timer = setInterval(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [phase, timeLeft, quiz.type]);

  const handleAnswer = (selectedIndex: number, correctIndex: number) => {
    if (selectedIndex === correctIndex) {
      setScore(prev => prev + 1);
    }
    if (currentQuestionIndex + 1 < quiz.questions.length) {
      setDirection(1);
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      setPhase("result");
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  return (
    <div className="min-h-screen bg-primary9 flex justify-center items-center px-4 py-10">
     
      {phase === "instructions" && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl shadow-lg p-6 md:p-8 max-w-lg w-full text-center"
        >
          <h1 className="text-2xl font-bold mb-4">{quiz.title}</h1>
          <ul className="list-disc list-inside text-left mb-6 text-gray-600">
            {quiz.instructions.map((rule, i) => (
              <li key={i}>{rule}</li>
            ))}
          </ul>
          <button
            onClick={() => {
              setPhase("quiz");
              if (quiz.type === "exam") setTimeLeft(quiz.totalTime);
            }}
            className="bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700"
          >
            Start Quiz
          </button>
        </motion.div>
      )}

      {/* PHASE 2: Quiz */}
      {phase === "quiz" && (
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 max-w-lg w-full text-center">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold">
              Question {currentQuestionIndex + 1} of {quiz.questions.length}
            </h2>
            {quiz.type === "exam" && (
              <div className="bg-red-100 text-red-600 px-3 py-1 rounded-full font-bold">
                ⏳ {formatTime(timeLeft)}
              </div>
            )}
          </div>

          <div className="relative min-h-[120px]">
            <AnimatePresence mode="wait" initial={false} custom={direction}>
              <motion.div
                key={quiz.questions[currentQuestionIndex].id}
                custom={direction}
                initial={{ x: direction === 1 ? 300 : -300, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: direction === 1 ? -300 : 300, opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="absolute w-full"
              >
                <p className="mb-6">{quiz.questions[currentQuestionIndex].question}</p>
                <div className="flex flex-col gap-3">
                  {quiz.questions[currentQuestionIndex].options.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => handleAnswer(index, quiz.questions[currentQuestionIndex].answer)}
                      className="border border-gray-300 px-4 py-2 rounded hover:bg-primary3 hover:text-white transition"
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      )}


      {phase === "result" && (
        <motion.div
          key="result"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl shadow-lg p-6 md:p-8 max-w-lg w-full text-center"
        >
          <h2 className="text-2xl font-bold mb-4">Quiz Completed!</h2>
          <p className="mb-6">Your Score: {score} / {quiz.questions.length}</p>
          {quiz.type === "exam" && timeLeft <= 0 && (
            <p className="text-red-500 font-semibold">Time&apos;s up! Quiz ended automatically.</p>
          )}
          <button
            onClick={() => router.push("/dashboard")}
            className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700"
          >
            Go to Dashboard
          </button>
        </motion.div>
      )}
    </div>
  );
};

export default PlayQuizPage;
