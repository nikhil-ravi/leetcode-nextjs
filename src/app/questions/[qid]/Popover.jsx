"use client";

import {
  Popover,
  PopoverHandler,
  PopoverContent,
  Button,
} from "@material-tailwind/react";
import { useState } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import ReactHtmlParser from "react-html-parser";

export default function PopoverButton({
  hints = ["My name is Nikhil", "I live in NYC"],
}) {
  const [currentHintNumber, setCurrentHintNumber] = useState(1);

  const goToPreviousHint = () => {
    if (currentHintNumber > 1) setCurrentHintNumber(currentHintNumber - 1);
  };

  const goToNextHint = () => {
    if (currentHintNumber < hints.length)
      setCurrentHintNumber(currentHintNumber + 1);
  };
  return (
    <Popover placement="bottom-end">
      <PopoverHandler>
        <Button className="bg-inherit text-black dark:text-white shadow-none hover:shadow-none hover:border-2 hover:border-black dark:hover:border-white ">
          Hint
        </Button>
      </PopoverHandler>
      <PopoverContent className="z-40 md:block shadow-lg w-[228px] p-4 rounded-lg dark:bg-primary-700 text-inherit">
        <div className="flex flex-col max-w-xs">
          <div className="flex w-full items-center">
            <span className="mr-2 text-md font-medium text-label-1 dark:text-dark-label-1">
              Hint
            </span>
            <span className="text-xs text-label-3 dark:text-dark-label-3">
              ({currentHintNumber}/{hints.length})
            </span>
            <div className="flex flex-1 justify-end space-x-1.5">
              <div
                className={`text-md p-[5px] rounded bg-primary-400 dark:bg-primary-400 ${
                  currentHintNumber > 1 &&
                  "hover:bg-primary-300 dark:hover:bg-primary-300  cursor-pointer "
                }`}
              >
                <BsChevronLeft className="text-sm" onClick={goToPreviousHint} />
              </div>
              <div
                className={`text-md p-[5px] rounded bg-primary-400 dark:bg-primary-400 ${
                  currentHintNumber < hints.length &&
                  "hover:bg-primary-300 dark:hover:bg-primary-300  cursor-pointer "
                }`}
              >
                <BsChevronRight className="text-sm" onClick={goToNextHint} />
              </div>
            </div>
          </div>
          <div className="description-html-content mt-2 text-md text-label-1 dark:text-dark-label-1">
            {ReactHtmlParser(hints[currentHintNumber - 1])}
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
