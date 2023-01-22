"use client";
import { useEffect, useState } from "react";
import { getQuestionsList } from "@/utils/controllers";
import QuestionsList from "./QuestionsList";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
import { BsSearch } from "react-icons/bs";

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [firstLoad, setFirstLoad] = useState(true);
  const [data, setData] = useState([]);
  useEffect(() => {
    setLoading(true);
    async function getData(term) {
      const { data } = await getQuestionsList(term);
      return data;
    }
    getData(searchTerm).then((data) => {
      setData(data);
      setLoading(false);
      setFirstLoad(false);
    });
  }, [searchTerm]);

  return firstLoad ? (
    <div className="mx-auto max-w-[1080px] align-center text-center pt-10">
      <Spin indicator={antIcon} />
    </div>
  ) : (
    <div className="mx-auto max-w-[1080px]">
      <div className="flex gap-4 items-center text-center justify-center w-full">
        <BsSearch className="flex-shrink" />
        <input
          label="Search Term"
          aria-label="Search for questions"
          aria-labelledby="Search for questions"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
          className="flex-grow bg-primary-300 dark:bg-primary-900 items-center p-1 rounded-lg"
        />
      </div>
      {isLoading ? (
        <div className="align-center text-center pt-10">
          <Spin indicator={antIcon} />
        </div>
      ) : !data ? (
        <p className="text-center p-10">
          No questions matching the current search...
        </p>
      ) : (
        <QuestionsList questions={data} />
      )}
    </div>
  );
}
