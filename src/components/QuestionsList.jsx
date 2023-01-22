import { useState } from "react";
import Paginate from "./Paginate2";
import QuestionCard from "./QuestionCard.jsx";

const QuestionsList = ({ questions }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [questionsPerPage, setQuestionsPerPage] = useState(10);

  const indexOfLastQuestion = currentPage * questionsPerPage;
  const indexOfFirstQuestion = indexOfLastQuestion - questionsPerPage;
  const currentQuestions = questions.slice(
    indexOfFirstQuestion,
    indexOfLastQuestion
  );
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const handleQuestionsPerPageChange = (itemsPerPage) => {
    const changePageTo = Math.ceil((indexOfFirstQuestion + 1) / itemsPerPage);
    setCurrentPage(changePageTo);
    setQuestionsPerPage(itemsPerPage);
  };
  return (
    <div>
      <Paginate
        totalItems={questions.length}
        currentPage={currentPage}
        itemsPerPage={questionsPerPage}
        handlePageChange={paginate}
        handleItemsPerPageChange={handleQuestionsPerPageChange}
        itemLabels={"questions"}
      />
      <div className="py-4 grid grid-cols-1 md:grid-cols-2 gap-2  ">
        {currentQuestions.map((question) => {
          return <QuestionCard key={question.QID} {...question} />;
        })}
      </div>
      <Paginate
        totalItems={questions.length}
        currentPage={currentPage}
        itemsPerPage={questionsPerPage}
        handlePageChange={paginate}
        handleItemsPerPageChange={handleQuestionsPerPageChange}
        itemLabels={"questions"}
      />
    </div>
  );
};

export default QuestionsList;
