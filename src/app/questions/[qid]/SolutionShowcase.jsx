"use client";

import React from "react";
import CodeMirror from "@uiw/react-codemirror";
import { python } from "@codemirror/lang-python";
import { EditorView } from "@codemirror/view";
import { githubDark } from "@uiw/codemirror-theme-github";
function SolutionShowcase() {
  const code = `class Solution:
  
    def twoSum_bruteforce(self, nums: list[int], target: int) -> list[int]:
        for i, num1 in enumerate(nums):
            for j, num2 in enumerate(nums):
                if i != j and num1+num2==target:
                    return [i, j]
    
    def twoSum(self, nums: list[int], target: int) -> list[int]:
        indices = {}
        for i, num in enumerate(nums):
            indices[num] = i
        for i, num in enumerate(nums):
            if target - num in indices and indices[target - num] != i:
                return [i, indices[target-num]]`;
  return (
    <div>
      <CodeMirror
        value={code}
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
