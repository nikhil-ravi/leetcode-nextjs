import { useState } from "react";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../tailwind.config.js";
import Pagination from "@/components/Pagination";
import Link from "next/link.js";
import TopicTag from "./TopicTags.jsx";

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
    <div className="py-10 lg:flex-row lg:flex-wrap">
      {currentQuestions.map(({ QID, title, difficulty, topicTags }) => {
        return (
          <div className="group flex-1 shadow-lg mb-10" key={QID}>
            <div className="items-center space-x-2 pb-2 mx-4 group-hover:opacity-75">
              <div className="mb-2 flex gap-2 items-center">
                <Link href={`/questions/${QID}`} className=" flex-grow">
                  <h2 className="font-semibold text-primary-800 dark:text-primary-100 text-lg">
                    {QID}. {title}
                  </h2>
                </Link>
                <h3
                  style={{
                    color: `${fullConfig.theme.colors.difficulty[difficulty]}`,
                  }}
                >
                  {difficulty}
                </h3>
              </div>
              <div className="mt-1 flex overflow-auto scroll-my-10 space-x-2 py-2 ">
                {topicTags.map((tag) => (
                  <TopicTag
                    key={`${QID}-${tag}`}
                    value={tag}
                    className="bg-primary-400"
                  />
                ))}
              </div>
            </div>
          </div>
        );
      })}
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
