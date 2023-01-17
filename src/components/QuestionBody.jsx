import PopoverButton from "./Popover";
import ReactHtmlParser from "react-html-parser";
import TopicTag from "./TopicTags";
import QuestionBodyAccordian from "./QuestionBodyAccordian";

export const QuestionBody = ({
  qid,
  title,
  hints,
  difficulty,
  body,
  similarQuestions,
  topicTags,
}) => {
  return (
    <div className="w-full overflow-y-scroll mb-10 pr-2">
      <div className="flex items-center text-center">
        <div className="font-bold flex-grow text-left mb-2">
          {qid}. {title}
        </div>
        {hints.length > 0 && <PopoverButton hints={hints} />}
      </div>
      <div className="mb-2">
        <TopicTag
          value={difficulty}
          className={`${
            difficulty === "Easy"
              ? "bg-difficulty-Easy"
              : difficulty === "Medium"
              ? "bg-difficulty-Medium"
              : "bg-difficulty-Hard"
          }`}
        />
      </div>
      <div className="mb-10">{ReactHtmlParser(body)}</div>
      <QuestionBodyAccordian
        similarQuestions={similarQuestions}
        topicTags={topicTags}
      />
    </div>
  );
};
