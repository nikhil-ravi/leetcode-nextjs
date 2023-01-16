const Pagination = ({
  questionsPerPage,
  totalQuestions,
  currentPage,
  paginate,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalQuestions / questionsPerPage); i++) {
    pageNumbers.push(i);
  }
  const pageNumbersToShow = [];
  if (pageNumbers) {
    let showMax = 5;
    let endPage;
    let startPage;

    if (pageNumbers <= showMax) {
      startPage = 1;
      endPage = pageNumbers.length;
    } else {
      startPage = currentPage <= 3 ? 1 : currentPage - 3;
      if (
        currentPage != pageNumbers.length &&
        currentPage + 1 != pageNumbers.length
      ) {
        endPage = startPage + showMax - 1;
      } else {
        endPage = pageNumbers.length;
      }
    }

    endPage = Math.min(endPage, pageNumbers.length);
    for (let i = startPage; i <= endPage; i++) {
      pageNumbersToShow.push(i);
    }
  }
  return (
    <nav className="flex justify-center items-center">
      <ul className="inline-flex gap-2 list-none m-0 p-0">
        {pageNumbersToShow.indexOf(1) < 0 && (
          <>
            <li className="px-2" onClick={() => paginate(1)}>
              <a className="cursor-pointer text-lg font-semibold text-primary-300">
                1
              </a>
            </li>
            {currentPage > 7 && (
              <li className="px-2">
                <a className="cursor-pointer text-lg font-semibold text-primary-300">
                  ...
                </a>
              </li>
            )}
          </>
        )}
        {pageNumbersToShow.map((number) => (
          <li
            key={number}
            className={
              number === currentPage ? "bg-black px-2 rounded-lg" : " px-2"
            }
            onClick={() => paginate(number)}
          >
            <a className="cursor-pointer text-lg font-semibold text-primary-300">
              {number}
            </a>
          </li>
        ))}
        {pageNumbersToShow.indexOf(pageNumbers.length) < 0 && (
          <>
            {currentPage < pageNumbers.length - 5 && (
              <li className="px-2">
                <a className="cursor-pointer text-lg font-semibold text-primary-300">
                  ...
                </a>
              </li>
            )}
            <li className="px-2" onClick={() => paginate(pageNumbers.length)}>
              <a className="cursor-pointer text-lg font-semibold text-primary-300">
                {pageNumbers.length}
              </a>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Pagination;
