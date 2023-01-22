const ArgsTable = ({ args }) => {
  return (
    <div className="text-primary-800 dark:text-primary-100">
      <span className="text-lg font-bold mb-2">Parameters:</span>
      <table className="w-full border-gray-600 border-2 rounded-md mb-4">
        <thead className="bg-inherit border-b-2 border-gray-500">
          <tr>
            <th className="p-3 text-sm font-semibold tracking-wide text-left">
              Name
            </th>
            <th className="p-3 text-sm font-semibold tracking-wide text-left">
              Type
            </th>
            <th className="p-3 text-sm font-semibold tracking-wide text-left">
              Description
            </th>
            <th className="p-3 text-sm font-semibold tracking-wide text-left">
              Default
            </th>
          </tr>
        </thead>
        <tbody>
          {args.map((arg) => (
            <tr key={arg.arg_name}>
              <td className="p-3 text-sm">{arg.arg_name}</td>
              <td className="p-3 text-sm">{arg.type_name}</td>
              <td className="p-3 text-sm">{arg.description}</td>
              <td className="p-3 text-sm">
                {arg.default ? arg.default : "None"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ArgsTable;
