import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
} from "@material-tailwind/react";
import TopicTag from "@/components/TopicTags";
import Link from "next/link";
import { BsLockFill } from "react-icons/bs";
import { SiPython } from "react-icons/si";

const QuestionCard = ({
  QID,
  title,
  categorySlug,
  difficulty,
  topicTags,
  paidOnly,
  solutionAvailable,
  key,
}) => {
  return (
    <Card
      key={key}
      className="mx-auto w-[320px] lg:w-[460px] bg-inherit border-gray-700 border-2 shadow-lg z-10 pb-4 "
    >
      <CardHeader
        floated={false}
        className="bg-inherit flex justify-between shadow-none items-center"
      >
        <Typography className=" text-primary-800 dark:text-primary-100">
          {categorySlug}
        </Typography>
        {paidOnly && (
          <Tooltip content="This question is paid only on Leetcode">
            <Typography>
              <BsLockFill className="text-lg text-yellow-800 flex-1" />
            </Typography>
          </Tooltip>
        )}
        {solutionAvailable && (
          <Tooltip content="Solution Available">
            <Typography>
              <SiPython className="text-lg text-blue-900 flex-1" />
            </Typography>
          </Tooltip>
        )}
        <Typography
          className={`${
            difficulty === "Easy"
              ? "bg-difficulty-Easy"
              : difficulty === "Medium"
              ? "bg-difficulty-Medium"
              : "bg-difficulty-Hard"
          }`}
          textGradient
        >
          {difficulty}
        </Typography>
      </CardHeader>
      <CardBody className="border-y-2 border-y-gray-400 dark:border-y-gray-700 ">
        <Typography
          variant="h4"
          className="text-primary-800 dark:text-primary-100"
        >
          <Link href={`/questions/${QID}`} className="flex-grow">
            {QID}. {title}
          </Link>
        </Typography>
      </CardBody>
      <CardFooter className="flex items-center overflow-x-scroll gap-7 py-2">
        {topicTags &&
          topicTags.map((tag) => (
            <TopicTag
              key={`${1}-${tag}`}
              value={tag}
              className="bg-primary-300 dark:bg-primary-600 text-primary-800 dark:text-primary-100"
            />
          ))}
      </CardFooter>
    </Card>
  );
};

export default QuestionCard;
