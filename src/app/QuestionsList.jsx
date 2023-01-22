"use client";

import { useState } from "react";
import Paginate from "@/components/Paginate2";
import { SiPython } from "react-icons/si";
import { BsLockFill } from "react-icons/bs";
import Link from "next/link";

export default function QuestionsList({ questions }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [questionsPerPage, setQuestionsPerPage] = useState(10);
  const startIndex = (currentPage - 1) * questionsPerPage;
  const endIndex = startIndex + questionsPerPage;
  const currentQuestions = questions.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  const handlePageSizeChange = (size) => {
    const changePageTo = Math.ceil((startIndex + 1) / size);
    setCurrentPage(changePageTo);
    setQuestionsPerPage(size);
  };

  return (
    <div className="bg-inherit text-primary-800 dark:text-primary-100 min-w-full flex justify-center ">
      <div className="mx-auto max-w-screen">
        <div className="flex justify-center my-4">
          <Paginate
            totalItems={questions.length}
            currentPage={currentPage}
            itemsPerPage={questionsPerPage}
            handlePageChange={handlePageChange}
            handleItemsPerPageChange={handlePageSizeChange}
            itemLabels={"questions"}
          />
        </div>

        {/* Questions Table */}
        <table className="min-w-full">
          <thead className="border-b-2">
            <tr>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">
                Number
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">
                Name
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">
                Difficulty
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left hidden sm:block">
                Topics
              </th>
            </tr>
          </thead>
          <tbody>
            {currentQuestions.map((question, index) => (
              <tr
                key={index}
                className="border-b-[1px] border-gray-500 border-opacity-60"
              >
                <td className="px-3 py-2 text-center">{question.QID}</td>
                <td className="px-3 py-2 text-sm font-semibold">
                  <div className="flex items-center gap-2 hover:scale-105">
                    <Link href={`/questions/${question.QID}`}>
                      {question.title}
                    </Link>{" "}
                    {question.solutionAvailable && (
                      <SiPython className="text-sm text-blue-900" />
                    )}
                    {question.paidOnly && (
                      <BsLockFill className="text-sm text-yellow-800" />
                    )}
                  </div>
                </td>
                <td
                  className={`px-3 py-2 text-sm ${
                    question.difficulty === "Easy"
                      ? "text-difficulty-Easy"
                      : question.difficulty === "Medium"
                      ? "text-difficulty-Medium"
                      : "text-difficulty-Hard"
                  }`}
                >
                  {question.difficulty}
                </td>
                <td className="px-3 py-2 text-left font-thin hidden sm:block">
                  {question.topicTags.join(", ")}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-center my-4">
          <Paginate
            totalItems={questions.length}
            currentPage={currentPage}
            itemsPerPage={questionsPerPage}
            handlePageChange={handlePageChange}
            handleItemsPerPageChange={handlePageSizeChange}
            itemLabels={"questions"}
          />
        </div>
      </div>
    </div>
  );
}
