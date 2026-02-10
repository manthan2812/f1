import type { ReactElement } from "react";
import { displayValue, getIcon } from "../../utils/helpers";

interface CardFieldProps {
  fieldKey?: string;
  icon?: ReactElement;
  value: any;
}

const CardField = ({ fieldKey, icon, value }: CardFieldProps) => {
  const fieldIcon = icon || (fieldKey ? getIcon(fieldKey) : null);

  return (
    <div className="flex items-center gap-2 text-xs">
      {fieldIcon && (
        <div className="flex-shrink-0 text-purple-600 dark:text-purple-400">
          {fieldIcon}
        </div>
      )}
      
      <div className="flex-1 min-w-0">
        {Array.isArray(value) && value.length > 0 ? (
          <div className="flex flex-wrap gap-1">
            {value.map((v, i) => (
              <span
                key={i}
                className="inline-flex items-center px-1.5 py-0.5 rounded text-xs font-medium
                  bg-gradient-to-r from-purple-500/20 to-pink-500/20
                  text-purple-700 dark:text-purple-300
                  border border-purple-500/30"
              >
                {v}
              </span>
            ))}
          </div>
        ) : (
          <span className="font-medium text-gray-800 dark:text-gray-200 truncate block">
            {displayValue(value)}
          </span>
        )}
      </div>
    </div>
  );
};

export default CardField;
