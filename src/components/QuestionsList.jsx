import { useState } from "react";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../tailwind.config.js";
import Pagination from "./Pagination";
import Link from "next/link.js";
import TopicTag from "./TopicTags.jsx";
import QuestionCard from "./QuestionCard.jsx";

const QuestionsList = ({ questions }) => {
  const fullConfig = resolveConfig(tailwindConfig);

  const [currentPage, setCurrentPage] = useState(1);
  const [questionsPerPage] = useState(10);

  const indexOfLastQuestion = currentPage * questionsPerPage;
  const indexOfFirstQuestion = indexOfLastQuestion - questionsPerPage;
  const currentQuestions = questions.slice(
    indexOfFirstQuestion,
    indexOfLastQuestion
  );
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <div>
      <div className="py-4 grid grid-cols-1 md:grid-cols-2 gap-2  ">
        {currentQuestions.map((question) => {
          return <QuestionCard key={question.QID} {...question} />;
        })}
      </div>
      <Pagination
        questionsPerPage={questionsPerPage}
        totalQuestions={questions.length}
        currentPage={currentPage}
        paginate={paginate}
      />
    </div>
  );
};

export default QuestionsList;
