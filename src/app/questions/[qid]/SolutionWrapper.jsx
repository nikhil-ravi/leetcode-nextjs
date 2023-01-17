import SolutionShowcase from "./SolutionShowcase";

export const SolutionWrapper = ({ solutions, codeStub }) => {
  const solutionsCombined = solutions.map(({ code }) => code);
  const solutionsString =
    solutions.length > 0
      ? `class Solution:
${solutionsCombined.join("\n")}`
      : codeStub;
  return (
    <div className="w-full h-full overflow-x-hidden justify-items-start mb-10">
      <div className="font-bold text-left mb-2">Solutions</div>
      <div className="font-bold text-left mb-2">
        <SolutionShowcase solutionsString={solutionsString} />
      </div>
    </div>
  );
};
