import {
  BsChevronCompactRight,
  BsChevronLeft,
  BsChevronRight,
} from "react-icons/bs";

const Paginate = ({
  totalItems,
  itemsPerPage,
  currentPage,
  handlePageChange,
  handleItemsPerPageChange,
  itemLabels = "items",
  itemsPerPageList = [10, 20, 50, 100],
}) => {
  const numberOfPages = Math.ceil(totalItems / itemsPerPage);
  const pagesToShow = new Set([1, numberOfPages]);
  for (let i = -2; i <= 2; i++) {
    if (currentPage + i <= numberOfPages && currentPage + i >= 1) {
      pagesToShow.add(currentPage + i);
    }
  }
  const sortedPages = [...pagesToShow].sort(function (a, b) {
    return a - b;
  });
  if (sortedPages.indexOf(2) === -1) {
    sortedPages.splice(1, 0, "<<");
  }
  if (sortedPages.indexOf(numberOfPages - 1) === -1) {
    sortedPages.splice(sortedPages.length - 1, 0, ">>");
  }

  function handleOnSubmitGoToPage(event) {
    if (event.key === "Enter") {
      console.log(event.target.value);

      handlePageChange(
        Math.max(Math.min(event.target.value, numberOfPages)),
        1
      );
    }
  }
  return (
    <div className="flex flex-col md:flex-row gap-4 mx-auto justify-center items-center text-center my-4">
      <div className="">
        Total {totalItems} {itemLabels}
      </div>
      <div className="flex gap-4 justify-center items-center">
        <BsChevronLeft
          onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
          className="hover:cursor-pointer"
        />
        {sortedPages.map((page) => (
          <div
            key={page}
            className={` p-1 rounded-md align-middle ${
              page === currentPage
                ? "dark:bg-primary-700 bg-primary-400"
                : "dark:bg-primary-900 bg-primary-100"
            } hover:cursor-pointer`}
            onClick={() =>
              handlePageChange(
                page === "<<"
                  ? Math.max(currentPage - 5, 1)
                  : page === ">>"
                  ? Math.min(currentPage + 5, numberOfPages)
                  : page
              )
            }
            onMouseOver={() => <BsChevronCompactRight />}
          >
            {(page === "<<") | (page === ">>") ? `...` : page}
          </div>
        ))}
        <BsChevronRight
          onClick={() =>
            handlePageChange(Math.min(currentPage + 1, numberOfPages))
          }
          className="hover:cursor-pointer"
        />
      </div>
      <div>
        <select
          value={itemsPerPage}
          className="bg-primary-300 dark:bg-primary-900 items-center  hover:cursor-pointer  p-1 rounded-md "
          onChange={(event) => handleItemsPerPageChange(event.target.value)}
        >
          {itemsPerPageList.map((item) => {
            return (
              <option key={item} value={item}>
                {item} / page
              </option>
            );
          })}
        </select>
      </div>
      <div>
        Go to{" "}
        <input
          type="number"
          label="GoToPage"
          className="bg-primary-300 dark:bg-primary-900 items-center p-1 rounded-md"
          onKeyDown={handleOnSubmitGoToPage}
          min={1}
          max={numberOfPages}
          aria-label="GoToPage"
          aria-labelledby="GoToPage"
        />{" "}
        Page
      </div>
    </div>
  );
};

export default Paginate;
