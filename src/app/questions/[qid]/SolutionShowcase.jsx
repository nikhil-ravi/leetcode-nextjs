"use client";

import React from "react";
import CodeMirror from "@uiw/react-codemirror";
import { python } from "@codemirror/lang-python";
import { EditorView } from "@codemirror/view";
import { githubDark } from "@uiw/codemirror-theme-github";
function SolutionShowcase({ solutionsString }) {
  return (
    <div>
      <CodeMirror
        value={solutionsString}
        extensions={[python({}), EditorView.lineWrapping]}
        theme={githubDark}
        readOnly={true}
        autoFocus={true}
        basicSetup={{
          lineWrapping: true,
          highlightActiveLineGutter: false,
          editable: false,
        }}
      />
    </div>
  );
}
export default SolutionShowcase;
