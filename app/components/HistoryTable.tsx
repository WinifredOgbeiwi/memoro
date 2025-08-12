'use client'
import React, { useState } from "react";
import { QuizHistory } from "../lib/data";

const HistoryTable = () => {
  const [filterType, setFilterType] = useState("All");
  const [filterStatus, setFilterStatus] = useState("All");

  const filteredHistory = QuizHistory.filter((row) => {
    const matchesType = filterType === "All" || row.type === filterType;
    const matchesStatus = filterStatus === "All" || row.status === filterStatus;
    return matchesType && matchesStatus;
  });

  return (
    <div className="w-full">
   
      <div className="flex  float-right gap-4 mb-4">
        <select
          value={filterType}
          onChange={(e) => setFilterType(e.target.value)}
          className="border px-2 py-1 rounded"
        >
          <option value="All">All Types</option>
          <option value="Exam">Exam</option>
          <option value="Learning">Learning</option>
        </select>

        <select
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
          className="border px-2 py-1 rounded"
        >
          <option value="All">All Status</option>
          <option value="Complete">Complete</option>
          <option value="Incomplete">Incomplete</option>
        </select>
      </div>

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
            {filteredHistory.map((row, idx) => (
              <tr
                key={row.name + row.date + idx}
                className={idx % 2 === 0 ? "bg-grey6" : "bg-white"}
              >
                <td className="py-2 px-4">{row.name}</td>
                <td
                  className={`py-2 px-4 ${
                    row?.score < 50 ? "text-red-500" : "text-text-primary"
                  }`}
                >
                  {row.score}
                </td>
                <td className="py-2 px-4">{row.date}</td>
                <td
                  className={`py-2 px-4 ${
                    row.status === "Complete"
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {row.status}
                </td>
                <td
                  className={`py-2 px-4 rounded w-fit ${
                    row.type === "Exam" ? "text-secondary" : "text-accent"
                  }`}
                >
                  {row.type}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HistoryTable;
