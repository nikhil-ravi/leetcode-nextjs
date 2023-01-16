import SolutionShowcase from "./SolutionShowcase";

export const SolutionWrapper = () => {
  return (
    <div className="w-full h-full overflow-x-hidden justify-items-start mb-10">
      <div className="font-bold text-left mb-2">Solutions</div>
      <div className="font-bold text-left mb-2">
        <SolutionShowcase />
      </div>
    </div>
  );
};
