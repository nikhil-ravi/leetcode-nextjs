"use client";

import CodeMirror from "@uiw/react-codemirror";
import { python } from "@codemirror/lang-python";
import { EditorView } from "@codemirror/view";
import { githubDark } from "@uiw/codemirror-theme-github";
import SolutionTabs from "./SolutionTabs";

function SolutionShowcase({ solutions, codeStub }) {
  return (
    <div className="w-full h-full overflow-x-hidden justify-items-start mb-10">
      <div className="font-bold text-left mb-2">Solutions</div>
      <div className="font-bold text-left mb-2">
        <div>
          {solutions.length > 0 ? (
            <SolutionTabs solutions={solutions} />
          ) : (
            <CodeMirror
              value={codeStub}
              extensions={[python({}), EditorView.lineWrapping]}
              theme={githubDark}
              readOnly={true}
              autoFocus={true}
              basicSetup={{
                lineWrapping: true,
                highlightActiveLineGutter: false,
                editable: false,
              }}
              className="indent-1"
            />
          )}
        </div>
      </div>
    </div>
  );
}
export default SolutionShowcase;
