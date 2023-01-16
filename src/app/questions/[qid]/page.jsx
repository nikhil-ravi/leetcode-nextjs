import { getQuestion, getSimilarQuestions } from "@/utils/controllers";
import QuestionNavigator from "./QuestionNavigator";
import { QuestionBody } from "./QuestionBody";
import { SolutionWrapper } from "./SolutionWrapper";
import { notFound } from "next/navigation";

export default async function QuestionsPage({ params: { qid } }) {
  const { data } = await getQuestion(qid);
  if (data.length === 0) notFound();
  const { data: similarQuestions } = await getSimilarQuestions(qid);
  return (
    <div className="flex-col w-full mx-auto">
      <QuestionNavigator qid={qid} />
      {data && (
        <div className="flex h-screen flex-col lg:flex-row justify-center overflow-y-hidden gap-10">
          <QuestionBody
            qid={data[0]["QID"]}
            title={data[0]["title"]}
            hints={data[0]["Hints"]}
            body={data[0]["Body"]}
            difficulty={data[0]["difficulty"]}
            similarQuestions={similarQuestions}
            topicTags={data[0]["topicTags"]}
          />
          <SolutionWrapper />
        </div>
      )}
    </div>
  );
}
