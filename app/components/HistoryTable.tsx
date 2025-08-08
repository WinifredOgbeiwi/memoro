import React from "react";
import { QuizHistory } from "../lib/data";


const HistoryTable = () => {
  return (
    <div className="overflow-x-auto w-full">
      <table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-primary2 text-white">
            <th className="py-2 px-4 text-left">Quiz Name</th>
            <th className="py-2 px-4 text-left">Score</th>
            <th className="py-2 px-4 text-left">Date</th>
            <th className="py-2 px-4 text-left">Status</th>
            <th className="py-2 px-4 text-left">Type</th>
          </tr>
        </thead>
        <tbody>
          {QuizHistory.map((row, idx) => (
            <tr
              key={row.name + row.date}
              className={idx % 2 === 0 ? "bg-grey6" : "bg-white"}
            >
              <td className="py-2 px-4">{row.name}</td>
              <td className={`py-2 px-4 ${row?.score < 50 ? 'text-red-500':'text-text-primary'}`}>{row.score}</td>
              <td className="py-2 px-4">{row.date}</td>
              <td className={`py-2 px-4 ${row.status === 'Complete'? 'text-green-600': 'text-red-600'}`}>
                {row.status}
              </td>
              <td className={`py-2 px-4 rounded w-fit ${row.type === 'Exam'? 'text-secondary': 'text-accent'}`}>
                {row.type}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HistoryTable;