import { useEffect, useMemo, useState } from "react";

import { useJsonSettings } from "@/entities/User";
import { Theme } from "@/shared/const/theme";

import { ThemeContext } from "../../../../shared/lib/context/ThemeContext";

interface ThemeProviderProps {
  children: React.ReactNode;
  initialTheme?: Theme;
}

function ThemeProvider({ children, initialTheme }: ThemeProviderProps) {
  const { theme: defaultTheme = Theme.BLUE } = useJsonSettings();
  const [isThemeInited, setIsThemeInited] = useState(false);

  const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme);

  useEffect(() => {
    if (!isThemeInited) {
      setTheme(defaultTheme);
      setIsThemeInited(true);
    }
  }, [defaultTheme, isThemeInited]);

  const defaultProps = useMemo(() => ({ theme, setTheme: setTheme }), [theme]);

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
