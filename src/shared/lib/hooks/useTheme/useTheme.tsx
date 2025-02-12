import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { LOCAL_STORAGE_THEME_KEY } from "@/shared/const/localstorage";
import { Theme } from "@/shared/const/theme";

interface useThemeResult {
  toggleTheme: () => void;
  theme: Theme;
}

export function useTheme(): useThemeResult {
  const { theme, setTheme } = useContext(ThemeContext);

  document.body.className =
    localStorage.getItem(LOCAL_STORAGE_THEME_KEY) || Theme.LIGHT;

  const toggleTheme = () => {
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
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  };

  return { theme: theme || Theme.LIGHT, toggleTheme };
}
