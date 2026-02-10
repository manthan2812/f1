import { useState, useEffect } from "react";
import { STORAGE_KEYS, TABS } from "../constants";

export const useActiveTab = () => {
  const [activeTab, setActiveTab] = useState<string>(() => {
    return localStorage.getItem(STORAGE_KEYS.ACTIVE_TAB) || TABS[0].id;
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.ACTIVE_TAB, activeTab);
  }, [activeTab]);

  const changeTab = (tabId: string) => {
    setActiveTab(tabId);
  };

  return { activeTab, changeTab };
};
