// Driver Types
export interface Driver {
  driver: string;
  country: string;
  team: string;
  number: number;
  champion?: string[];
}

// Race Schedule Types
export interface RaceSchedule {
  round: number;
  date: string;
  "grand prix": string;
  circuit: string;
  venue: string;
  country: string;
  sprint: string;
}

// Historical Champion Types
export interface DriverChampion {
  year: number;
  driver: string;
  constructor: string;
}

export interface ConstructorChampion {
  year: number;
  constructor: string;
  drivers: string[];
}

// Tab Configuration
export interface TabConfig {
  id: string;
  label: string;
  data: any[];
}

// Theme Types
export type Theme = "light" | "dark";
