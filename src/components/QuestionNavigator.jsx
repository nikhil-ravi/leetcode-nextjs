import { BsChevronLeft, BsChevronRight, BsList } from "react-icons/bs";
import Link from "next/link";

export default function QuestionNavigator({ qid }) {
  return (
    <div className="flex flex-row flex-1 items-center justify-center space-x-4 mb-6 ">
      <Link
        href={qid > 1 ? `/questions/${parseInt(qid) - 1}` : `/questions/${qid}`}
        className={`text-md p-[5px] rounded bg-primary-400 dark:bg-primary-700 ${
          2 > 1 &&
          "hover:bg-primary-300 dark:hover:bg-primary-300  cursor-pointer "
        }`}
        aria-label="Previous Question"
        aria-labelledby="Previous Question"
      >
        <BsChevronLeft className="text-sm" />
      </Link>
      <Link
        href="/"
        aria-label="Questions List"
        aria-labelledby="Questions List"
      >
        <div className="flex gap-3 items-center justify-center">
          <BsList className="text-sm" />
          <div className="flex-grow">Problems List</div>
        </div>
      </Link>
      <Link
        href={`/questions/${parseInt(qid) + 1}`}
        className={`text-md p-[5px] rounded bg-primary-400 dark:bg-primary-700 ${
          2 < 3 &&
          "hover:bg-primary-300 dark:hover:bg-primary-300  cursor-pointer "
        }`}
        aria-label="Next Question"
        aria-labelledby="Next Question"
      >
        <BsChevronRight className="text-sm" />
      </Link>
    </div>
  );
}
