"use client";

import { BsSearch } from "react-icons/bs";
import { useEffect, useState } from "react";
import QuestionsList from "@/components/QuestionsList";
import { getQuestionsList } from "@/utils/controllers";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setLoading] = useState(false);
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
    });
  }, [searchTerm]);

  return (
    <div className="min-w-full mx-auto">
      <section title="Heading">
        <div>
          <h3 className="text-center text-2xl mb-3">Questions</h3>
        </div>
      </section>
      <section title="Search Bar">
        <div className="text-center align-middle my-4 ">
          <label
            htmlFor="Search"
            className="flex rounded-md border-2 items-end space-x-2 px-2"
          >
            <span className="py-2">
              <BsSearch />
            </span>
            <div className="text-left flex-grow">
              <input
                type="text"
                className="p-1 bg-inherit md:border-dotted min-w-[100%] focus:border-dashed	 focus:none  text-primary-800 dark:text-primary-100"
                placeholder="Search..."
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
              />
            </div>
          </label>
        </div>
      </section>
      {isLoading ? (
        <p>Loading...</p>
      ) : !data ? (
        <p>No questions matching the current search...</p>
      ) : (
        <section title="Questions List">
          <QuestionsList questions={data} />
        </section>
      )}
    </div>
  );
}
