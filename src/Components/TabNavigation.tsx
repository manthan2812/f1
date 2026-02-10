import type { TabConfig } from "../types";

interface TabNavigationProps {
  tabs: TabConfig[];
  activeTab: string;
  onTabChange: (tabId: string) => void;
}

const TabNavigation = ({ tabs, activeTab, onTabChange }: TabNavigationProps) => {
  return (
    <div 
      className="flex gap-1 bg-white/30 dark:bg-black/60 backdrop-blur-xl rounded-2xl shadow-lg border border-gray-200/50 dark:border-gray-800/50 p-1"
      style={{ transition: 'none' }}
    >
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={`
            px-4 py-2 rounded-xl text-sm font-medium
            ${
              activeTab === tab.id
                ? "bg-white dark:bg-gray-800 text-purple-600 dark:text-purple-400 shadow-lg"
                : "text-gray-700 dark:text-gray-300 hover:bg-white/50 dark:hover:bg-gray-800/50"
            }
          `}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default TabNavigation;
