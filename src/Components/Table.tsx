interface TableProps {
  data: Array<object>;
}

const displayValue = (value: any): string => {
  if (Array.isArray(value)) {
    return value.length > 0 ? `${value.join(", ")} [${value.length}]` : "";
  }
  if (value === null || value === undefined) {
    return "";
  }
  return String(value);
};

const Table: React.FC<TableProps> = ({ data = [] }) => {
  let headers = [];
  headers = Object.keys(data[0]).map((v) => v.toUpperCase());

  return (
    <table className="w-full text-xs md:text-sm lg:text-base font-normal">
      <thead>
        <tr className="border-b border-black/30 dark:border-white/30 backdrop-blur-sm rounded-3xl">
          {headers.map((header: string, index: number) => (
            <th
              key={index}
              className="px-6 py-3 text-center text-md font-bold text-gray-800 dark:text-gray-300"
            >
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item: object, index: number) => (
          <tr
            key={index}
            className={`hover:bg-black/5 dark:hover:bg-white/10 transition-all duration-300 ${
              index !== data.length - 1
                ? "border-b border-black/10 dark:border-white/10"
                : "rounded-3xl"
            }`}
          >
            {Object.values(item).map((value: any, idx: number) => (
              <td
                key={idx}
                className="px-6 py-3 text-sm text-center text-gray-900 dark:text-gray-200"
              >
                {displayValue(value)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
