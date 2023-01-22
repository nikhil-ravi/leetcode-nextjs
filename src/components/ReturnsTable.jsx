const ReturnsTable = ({ returns }) => {
  return (
    <div className="text-primary-800 dark:text-primary-100">
      <span className="text-lg font-bold mb-2">
        {returns.is_generator ? "Yields:" : "Returns:"}
      </span>
      <table className="w-full border-gray-600 border-2 rounded-md mb-4">
        <thead className="bg-inherit border-b-2 border-gray-500">
          <tr>
            <th className="p-3 text-sm font-semibold tracking-wide text-left">
              Type
            </th>
            <th className="p-3 text-sm font-semibold tracking-wide text-left">
              Description
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-3 text-sm">{returns.type_name}</td>
            <td className="p-3 text-sm">{returns.description}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ReturnsTable;
