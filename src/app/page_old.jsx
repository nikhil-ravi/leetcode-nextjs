"use client";

import { BsSearch } from "react-icons/bs";
import { useEffect, useState } from "react";
import QuestionsList from "@/components/QuestionsList";
import { getQuestionsList } from "@/utils/controllers";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

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
        <div className="text-center text-2xl mb-3">Questions</div>
        <div className="flex width-full items-baseline gap-4 text-primary-800 dark:text-primary-100">
          <TextField
            id="input-with-sx"
            label="Search..."
            variant="filled"
            className="flex-grow text-white [&>div>input]:text-primary-800 dark:[&>div>input]:text-primary-100 [&>label]:text-primary-800 dark:[&>label]:text-primary-100"
            onChange={(event) => setSearchTerm(event.target.value)}
            aria-describedby="Search..."
            inputProps={{
              "aria-label": "Search",
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <BsSearch className="text-primary-800 dark:text-primary-100" />
                </InputAdornment>
              ),
            }}
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
    </div>
  );
}
