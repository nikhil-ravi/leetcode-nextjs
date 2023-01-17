"use client";

import { useState, Fragment } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import Link from "next/link";
import TopicTag from "./TopicTags";

export default function QuestionBodyAccordian({ similarQuestions, topicTags }) {
  const [open, setOpen] = useState(0);
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  const customAnimation = {
    mount: { scale: 1 },
    unmount: { scale: 0.9 },
  };

  return (
    <Fragment>
      {similarQuestions && (
        <Accordion open={open === 1} animate={customAnimation}>
          <AccordionHeader
            onClick={() => handleOpen(1)}
            className="text-primary-800 dark:text-primary-100 text-md"
          >
            Similar Questions
          </AccordionHeader>
          <AccordionBody>
            <ul className="list-inside p-0">
              {similarQuestions.map(({ QID, title, difficulty }) => (
                <li key={QID} className="flex items-center">
                  <Link href={`/questions/${QID}`} className=" flex-grow">
                    <h2 className="text-primary-800 dark:text-primary-100">
                      {QID}. {title}
                    </h2>
                  </Link>
                  <div
                    className={`${
                      difficulty === "Easy"
                        ? "text-difficulty-Easy"
                        : difficulty === "Medium"
                        ? "text-difficulty-Medium"
                        : "text-difficulty-Hard"
                    }`}
                  >
                    {difficulty}
                  </div>
                </li>
              ))}
            </ul>
          </AccordionBody>
        </Accordion>
      )}
      {topicTags && (
        <Accordion open={open === 2} animate={customAnimation}>
          <AccordionHeader
            onClick={() => handleOpen(2)}
            className="text-primary-800 dark:text-primary-100 text-md"
          >
            Related Topics
          </AccordionHeader>
          <AccordionBody>
            <div className="mt-1 flex overflow-auto scroll-my-10 space-x-2 py-2 ">
              {topicTags.split(",").map((tag) => (
                <TopicTag key={tag} value={tag} className="bg-primary-400" />
              ))}
            </div>
          </AccordionBody>
        </Accordion>
      )}
    </Fragment>
  );
}
