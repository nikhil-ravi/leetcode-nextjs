export default function Head({ params }) {
  return (
    <>
      <title>{`ScuffedCode | Question ${params.qid}`}</title>
      <meta
        name="description"
        content={`Page containing the solution to Leetcode questions ${params.qid}`}
      />
      <meta content="width=device-width, initial-scale=1" name="viewport" />
    </>
  );
}
