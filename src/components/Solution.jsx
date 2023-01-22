import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks";
import ArgsTable from "./ArgsTable";
import ReturnsTable from "./ReturnsTable";
import CodeMirror from "@uiw/react-codemirror";
import { python } from "@codemirror/lang-python";
import { EditorView } from "@codemirror/view";
import { githubDark } from "@uiw/codemirror-theme-github";

const Solution = ({ code, docs }) => {
  return (
    <div>
      <ReactMarkdown
        children={docs.description}
        remarkPlugins={[remarkGfm, remarkBreaks]}
        className="text-primary-800 dark:text-primary-100"
      />
      {/* Args Table */}
      {docs.args && <ArgsTable args={docs.args} />}

      {/* Returns/Yields Table */}
      {docs.returns && <ReturnsTable returns={docs.returns} />}

      {/* Time Complexity */}
      {/* Check if docs has an attribute named time, if it does return a div with Time in it */}
      {docs.time && Object.keys(docs.time).length !== 0 && (
        <>
          <div className="flex gap-4 text-primary-800 dark:text-primary-100">
            <span className="text-lg font-bold mb-2">Time Complexity:</span>
            <div className="font-body text-xl ml-4">{docs.time.args[1]}</div>
          </div>
          {docs.time.description && (
            <ReactMarkdown
              children={docs.time.description}
              remarkPlugins={[remarkGfm, remarkBreaks]}
              className="text-primary-800 dark:text-primary-100"
            />
          )}
        </>
      )}

      {/* Space Complexity */}
      {/* Check if docs has an attribute named time, if it does return a div with Time in it */}
      {docs.space && Object.keys(docs.space).length !== 0 && (
        <>
          <div className="flex gap-4 text-primary-800 dark:text-primary-100">
            <span className="text-lg font-bold mb-2">Space Complexity:</span>
            <div className="font-body text-xl ml-4">{docs.space.args[1]}</div>
          </div>
          {docs.space.description && (
            <ReactMarkdown
              children={docs.space.description}
              remarkPlugins={[remarkGfm, remarkBreaks]}
              className="text-primary-800 dark:text-primary-100"
            />
          )}
        </>
      )}

      {/* Code component */}
      <CodeMirror
        value={`class Solution:\n${code}`}
        extensions={[python({}), EditorView.lineWrapping]}
        theme={githubDark}
        readOnly={true}
        autoFocus={true}
        basicSetup={{
          lineWrapping: true,
          highlightActiveLineGutter: false,
          editable: false,
        }}
        className="my-4"
      />
    </div>
  );
};

export default Solution;
