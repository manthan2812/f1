interface TableProps {
  data: Array<object>;
}

const displayValue = (value: any): string => {
  if (Array.isArray(value)) {
    return value.length > 0 ? value.join(", ") : "";
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
    <table className="w-full border-collapse border text-xs md:text-sm lg:text-base font-normal">
      <thead>
        <tr>
          {headers.map((header: string, index: number) => (
            <th
              key={index}
              className="border text-center p-0.5 sm:p-1 bg-fuchsia-200 text-fuchsia-950 dark:bg-fuchsia-950 dark:text-fuchsia-200"
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
            className="odd:bg-fuchsia-50 even:bg-fuchsia-100 text-fuchsia-900 dark:odd:bg-fuchsia-800 dark:even:bg-fuchsia-900 dark:text-fuchsia-100"
          >
            {Object.values(item).map((value: any, idx: number) => (
              <td key={idx} className="border text-center p-0.5 sm:p-1">
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
