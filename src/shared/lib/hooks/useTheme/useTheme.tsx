import { useContext } from "react";

// eslint-disable-next-line plugin-path-checker-fsd-r/layer-imports
import { useJsonSettings } from "@/entities/User";
import { Theme } from "@/shared/const/theme";

import { ThemeContext } from "../../context/ThemeContext";

interface useThemeResult {
  toggleTheme: (saveAction?: (theme: Theme) => void) => void;
  theme: Theme;
}

export function useTheme(): useThemeResult {
  const { theme, setTheme } = useContext(ThemeContext);
  const { theme: defaultTheme } = useJsonSettings();

  document.body.className = defaultTheme || Theme.LIGHT;

  const toggleTheme = (saveAction?: (theme: Theme) => void) => {
    let newTheme: Theme;
    switch (theme) {
      case Theme.DARK:
        newTheme = Theme.LIGHT;
        break;
      case Theme.LIGHT:
        newTheme = Theme.BLUE;
        break;
      case Theme.BLUE:
        newTheme = Theme.DARK;
        break;
      default:
        newTheme = Theme.LIGHT;
    }
    setTheme?.(newTheme);

    saveAction?.(newTheme);
  };

  return { theme: theme || Theme.LIGHT, toggleTheme };
}
