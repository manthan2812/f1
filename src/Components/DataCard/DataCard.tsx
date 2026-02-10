import { memo } from "react";
import { Calendar, MapPin, Globe, Zap } from "lucide-react";
import CardHeader from "./CardHeader";
import CardField from "./CardField";

interface DataCardProps {
  item: any;
  index: number;
  keys: string[];
  mainField: string;
  hoveredIndex: number | null;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const DataCard = memo(({ 
  item, 
  index, 
  keys, 
  mainField, 
  hoveredIndex, 
  onMouseEnter, 
  onMouseLeave 
}: DataCardProps) => {
  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={`
        group relative bg-white/40 dark:bg-black/40 backdrop-blur-md
        rounded-xl border border-gray-200/50 dark:border-gray-700/50
        shadow-lg hover:shadow-2xl
        hover:scale-[1.02] hover:-translate-y-1
        overflow-hidden will-change-transform
        ${hoveredIndex === index ? 'ring-2 ring-purple-500/50 dark:ring-blue-500/50' : ''}
      `}
      style={{
        animationDelay: `${index * 20}ms`,
        animation: 'slideInUp 0.4s ease-out forwards',
        transition: 'transform 300ms ease-out, box-shadow 300ms ease-out',
      }}
    >
      <div 
        className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100"
        style={{ transition: 'opacity 300ms ease-out' }}
      />
      
      <div className="relative p-4">
        <CardHeader item={item} mainField={mainField} />
        
        <div className="space-y-2">
          {/* Date */}
          {item.date && (
            <CardField icon={<Calendar className="w-4 h-4" />} value={item.date} />
          )}
          
          {/* Circuit */}
          {item.circuit && (
            <CardField icon={<MapPin className="w-4 h-4" />} value={item.circuit} />
          )}
          
          {/* Combined venue and country field */}
          {item.venue && item.country && (
            <CardField 
              icon={<Globe className="w-4 h-4" />}
              value={`${item.venue}, ${item.country}`} 
            />
          )}
          
          {/* Sprint */}
          {item.sprint && (
            <CardField 
              icon={<Zap className="w-4 h-4" />}
              value={`Sprint: ${item.sprint}`} 
            />
          )}
          
          {/* Remaining fields for other data types */}
          {keys
            .filter(key => 
              key !== mainField && 
              key !== 'round' && 
              key !== 'date' && 
              key !== 'circuit' && 
              key !== 'venue' && 
              key !== 'country' && 
              key !== 'sprint'
            )
            .map((key, idx) => {
              const value = item[key];
              
              if (value === null || value === undefined || value === "" || 
                  (Array.isArray(value) && value.length === 0)) {
                return null;
              }
              
              return <CardField key={idx} fieldKey={key} value={value} />;
            })}
        </div>
      </div>
      
      <div 
        className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 transform scale-x-0 group-hover:scale-x-100 origin-left"
        style={{ transition: 'transform 300ms ease-out' }}
      />
    </div>
  );
});

DataCard.displayName = 'DataCard';

export default DataCard;
