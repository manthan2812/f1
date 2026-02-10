import { useState, useMemo, useCallback } from "react";
import { getMainField } from "../utils/helpers";
import DataCard from "./DataCard/DataCard";

interface DataCardGridProps {
  data: Array<any>;
}

const DataCardGrid: React.FC<DataCardGridProps> = ({ data = [] }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  const keys = useMemo(() => data.length > 0 ? Object.keys(data[0]) : [], [data]);
  const mainField = useMemo(() => getMainField(keys), [keys]);

  const handleMouseEnter = useCallback((index: number) => {
    setHoveredIndex(index);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setHoveredIndex(null);
  }, []);
  
  if (!data || data.length === 0) return null;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 p-3">
      {data.map((item: any, index: number) => (
        <DataCard
          key={index}
          item={item}
          index={index}
          keys={keys}
          mainField={mainField}
          hoveredIndex={hoveredIndex}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
        />
      ))}
    </div>
  );
};

export default DataCardGrid;