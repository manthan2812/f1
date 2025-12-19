import { useEffect, useState } from "react";
import ThemeSwitch from "./Components/ThemeSwitch";
import Table from "./Components/Table";
import DRIVERS from "./json/currentDrivers.json";
import SCHEDULE_2026 from "./json/schedule2026.json";
import DRIVER_CHAMPIONS from "./json/driverChampions.json";
import CONSTRUCTOR_CHAMPIONS from "./json/constructorChampions.json";

// Tab Navigation
const TABS = [
  "2026 Formula 1 Schedule",
  "2026 Formula 1 Drivers",
  "Past Driver Champions",
  "Past Constructor Champions",
];

// Theme Initialization
let LOAD_THEME: string;
if (localStorage.getItem("theme-preference")) {
  LOAD_THEME = localStorage.getItem("theme-preference") as string;
} else {
  LOAD_THEME = window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function App() {
  const [activeTab, setActiveTab] = useState<string>(
    localStorage.getItem("current-tab") || TABS[0]
  );
  const [theme, setTheme] = useState<string>(LOAD_THEME);

  const handleThemeChange = (isDark: boolean) => {
    const newTheme: string = isDark ? "dark" : "light";
    localStorage.setItem("theme-preference", newTheme);
    setTheme(newTheme);
  };

  const handleTabChange = (tab: string) => {
    localStorage.setItem("current-tab", tab);
    setActiveTab(tab);
  };

  return (
    <div
      className={`${theme} min-h-screen bg-linear-to-br from-gray-100 via-blue-100 to-purple-100 dark:from-gray-950 dark:via-blue-950 
        dark:to-purple-950`}
    >
      <div className="fixed top-3 w-screen flex items-center justify-center z-40">
        <div
          className="bg-white/30 dark:bg-black/60 backdrop-blur-xl rounded-full shadow-lg border 
          border-gray-200/50 dark:border-gray-800/50 px-2 py-2 flex items-center gap-1"
        >
          {TABS.map((tab, index) => (
            <button
              onClick={() => handleTabChange(tab)}
              key={index}
              className={`px-4 py-2 rounded-full transition-all text-sm font-medium ${
                activeTab === tab
                  ? "bg-linear-to-r from-blue-600 to-purple-600 text-white dark:text-black shadow-lg"
                  : "text-gray-800 hover:text-gray-950 hover:bg-gray-200 dark:text-gray-100 dark:hover:text-gray-200 dark:hover:bg-gray-800"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="absolute right-10">
          <ThemeSwitch theme={theme} onChange={handleThemeChange} />
        </div>
      </div>

      <div className="pt-28 pb-14 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Content */}
          <div
            className="bg-linear-to-r from-purple-100 to-pink-100 dark:from-purple-950 dark:to-pink-950 rounded-3xl shadow-xl  
              border border-gray-200 dark:border-gray-950 p-2"
          >
            {activeTab === TABS[0] && (
              <Table
                data={DRIVERS.sort((a, b) => a.team.localeCompare(b.team))}
              />
            )}
            {activeTab === TABS[1] && (
              <Table data={SCHEDULE_2026.sort((a, b) => a.round - b.round)} />
            )}
            {activeTab === TABS[2] && (
              <Table data={DRIVER_CHAMPIONS.sort((a, b) => b.year - a.year)} />
            )}
            {activeTab === TABS[3] && (
              <Table
                data={CONSTRUCTOR_CHAMPIONS.sort((a, b) => b.year - a.year)}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
