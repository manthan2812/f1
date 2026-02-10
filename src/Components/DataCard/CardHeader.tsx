import { Calendar } from "lucide-react";
import { displayValue } from "../../utils/helpers";

interface CardHeaderProps {
  item: any;
  mainField: string;
}

const CardHeader = ({ item, mainField }: CardHeaderProps) => {
  return (
    <div className="mb-3">
      {mainField === 'year' ? (
        <div className="flex items-center gap-2">
          <Calendar className="w-5 h-5 text-purple-600 dark:text-purple-400" />
          <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
            {displayValue(item[mainField])}
          </h3>
        </div>
      ) : (
        <div className="flex items-center gap-2">
          {item.round && (
            <span className="text-xs font-semibold px-2 py-1 rounded bg-purple-500/20 text-purple-700 dark:text-purple-300 border border-purple-500/30">
              #{item.round}
            </span>
          )}
          <h3 className="text-base font-bold text-gray-900 dark:text-gray-100 truncate flex-1">
            {displayValue(item[mainField])}
          </h3>
        </div>
      )}
    </div>
  );
};

export default CardHeader;
