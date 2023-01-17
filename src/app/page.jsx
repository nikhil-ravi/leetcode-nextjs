"use client";

import { BsSearch } from "react-icons/bs";
import { useEffect, useState } from "react";
import QuestionsList from "@/components/QuestionsList";
import { getQuestionsList } from "@/utils/controllers";
import { IconButton, Input, Tooltip } from "@material-tailwind/react";
import { FaRandom } from "react-icons/fa";
import Link from "next/link";

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
      <div className="max-w-6xl mx-auto">
        <div>
          <h3 className="text-center text-2xl mb-3">Questions</h3>
        </div>
        <div className="flex items-center gap-2">
          <Input
            label="Search..."
            icon={<BsSearch />}
            onChange={(event) => setSearchTerm(event.target.value)}
          />
          <Link href={`/questions/${Math.floor(Math.random() * data.length)}`}>
            <Tooltip content="Pick a question at random">
              <IconButton variant="outlined" color="gray">
                <FaRandom />
              </IconButton>
            </Tooltip>
          </Link>
        </div>
        {isLoading ? (
          <p className="text-center p-10">Loading...</p>
        ) : !data ? (
          <p className="text-center p-10">
            No questions matching the current search...
          </p>
        ) : (
          <QuestionsList questions={data} />
        )}
      </div>
    </div>
  );
}
