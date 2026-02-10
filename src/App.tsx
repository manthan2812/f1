import ThemeToggle from "./Components/ThemeToggle";
import TabNavigation from "./Components/TabNavigation";
import DataCardGrid from "./Components/DataCardGrid";
import { useTheme } from "./hooks/useTheme";
import { useActiveTab } from "./hooks/useActiveTab";
import { TABS } from "./constants";

function App() {
  const { theme, toggleTheme } = useTheme();
  const { activeTab, changeTab } = useActiveTab();

  // Find active tab data
  const currentTab = TABS.find((tab) => tab.id === activeTab) || TABS[0];

  return (
    <div
      className={`${theme} min-h-screen bg-linear-to-br from-gray-100 via-blue-100 to-purple-100 dark:from-gray-950 dark:via-blue-950 
        dark:to-purple-950`}
      style={{ transition: 'none' }}
    >
      <div className="fixed top-3 w-screen flex items-center justify-center z-40">
        <TabNavigation tabs={TABS} activeTab={activeTab} onTabChange={changeTab} />
        <div className="absolute right-10">
          <ThemeToggle theme={theme} onChange={toggleTheme} />
        </div>
      </div>

      <div className="pt-24 pb-8 px-4">
        <div className="max-w-[1800px] mx-auto">
          <div
            className="bg-white/20 dark:bg-black/20 backdrop-blur-xl rounded-2xl shadow-2xl  
              border border-gray-200/30 dark:border-gray-800/30 overflow-hidden"
            style={{ transition: 'none' }}
          >
            <DataCardGrid data={currentTab.data} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
