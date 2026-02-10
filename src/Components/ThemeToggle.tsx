import "@theme-toggles/react/css/Classic.css";
import { Classic } from "@theme-toggles/react";

const ThemeToggle = ({
  theme,
  onChange,
}: {
  theme: string;
  onChange: (isDark: boolean) => void;
}) => {
  return (
    <div className={`flex items-center text-amber-500 dark:text-gray-200`}>
      <Classic
        {...({
          duration: 750,
          toggled: theme === "dark",
          toggle: onChange,
        } as any)}
      />
    </div>
  );
};

export default ThemeToggle;
