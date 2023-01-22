import PopoverButton from "./Popover";
import ReactHtmlParser from "react-html-parser";
import QuestionBodyAccordian from "./QuestionBodyAccordian";

export const QuestionBody = ({
  qid,
  title,
  hints,
  difficulty,
  body,
  similarQuestions,
  topicTags,
  paidOnly,
}) => {
  return (
    <div className="w-full overflow-y-scroll mb-10 pr-10">
      <div className="flex items-center text-center">
        <div className="font-bold flex-grow text-left mb-2 text-lg">
          {qid}. {title}
        </div>
        {hints.length > 0 && <PopoverButton hints={hints} />}
      </div>
      <div
        className={`mb-2 font-semibold ${
          difficulty === "Easy"
            ? "text-difficulty-Easy"
            : difficulty === "Medium"
            ? "text-difficulty-Medium"
            : "text-difficulty-Hard"
        }`}
      >
        {difficulty}
      </div>
      {!paidOnly ? (
        <>
          <div className="mb-10">{ReactHtmlParser(body)}</div>

          <QuestionBodyAccordian
            similarQuestions={similarQuestions}
            topicTags={topicTags}
          />
        </>
      ) : (
        <p className="text-center py-10">
          This question is not available as it is for paid customers of Leetcode
          only.
        </p>
      )}
    </div>
  );
};
