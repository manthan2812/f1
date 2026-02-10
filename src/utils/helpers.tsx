import type { ReactElement } from "react";
import { 
  Trophy, 
  Calendar, 
  MapPin, 
  Flag, 
  User, 
  Hash, 
  Globe, 
  Award,
  Users,
  Zap
} from "lucide-react";

export const displayValue = (value: any): string => {
  if (Array.isArray(value)) {
    return value.length > 0 ? value.join(", ") : "";
  }
  if (value === null || value === undefined) {
    return "";
  }
  return String(value);
};

export const getIcon = (key: string): ReactElement | null => {
  const icons: Record<string, ReactElement> = {
    driver: <User className="w-4 h-4" />,
    country: <Globe className="w-4 h-4" />,
    team: <Flag className="w-4 h-4" />,
    number: <Hash className="w-4 h-4" />,
    champion: <Trophy className="w-4 h-4" />,
    year: <Calendar className="w-4 h-4" />,
    constructor: <Flag className="w-4 h-4" />,
    drivers: <Users className="w-4 h-4" />,
    round: <Hash className="w-4 h-4" />,
    date: <Calendar className="w-4 h-4" />,
    "grand prix": <Trophy className="w-4 h-4" />,
    circuit: <MapPin className="w-4 h-4" />,
    venue: <MapPin className="w-4 h-4" />,
    sprint: <Zap className="w-4 h-4" />,
    podiums: <Award className="w-4 h-4" />,
    points: <Trophy className="w-4 h-4" />,
  };
  return icons[key.toLowerCase()] || null;
};

export const getMainField = (keys: string[]): string => {
  if (keys.includes('year')) {
    return 'year';
  }
  const titleFields = ['driver', 'grand prix', 'constructor', 'team'];
  return keys.find(key => titleFields.includes(key.toLowerCase())) || keys[0];
};
