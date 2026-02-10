import type { TabConfig } from "../types";
import DRIVERS_2026 from "../json/drivers2026.json";
import RACE_SCHEDULE_2026 from "../json/raceSchedule2026.json";
import HISTORICAL_DRIVER_CHAMPIONS from "../json/historicalDriverChampions.json";
import HISTORICAL_CONSTRUCTOR_CHAMPIONS from "../json/historicalConstructorChampions.json";

// Tab Configuration
export const TABS: TabConfig[] = [
  {
    id: "schedule",
    label: "2026 Formula 1 Schedule",
    data: RACE_SCHEDULE_2026,
  },
  {
    id: "drivers",
    label: "2026 Formula 1 Drivers",
    data: DRIVERS_2026,
  },
  {
    id: "driver-champions",
    label: "Past Driver Champions",
    data: HISTORICAL_DRIVER_CHAMPIONS,
  },
  {
    id: "constructor-champions",
    label: "Past Constructor Champions",
    data: HISTORICAL_CONSTRUCTOR_CHAMPIONS,
  },
];

// Local Storage Keys
export const STORAGE_KEYS = {
  THEME: "theme-preference",
  ACTIVE_TAB: "current-tab",
} as const;

// Animation Delays (ms)
export const ANIMATION = {
  CARD_DELAY: 20,
  CARD_DURATION: 400,
  HOVER_DURATION: 300,
} as const;
