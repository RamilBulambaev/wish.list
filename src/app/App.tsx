import { classNames } from "../shared/lib/classNames/classNames";
import { AppRouter } from "./providers/router";
import { Navbar } from "widgets/Navbar";
import { useTheme } from "./providers/ThemeProvider";
import { Sidebar } from "widgets/Sidebar";
import { Suspense, useEffect } from "react";

const App = () => {
  const { theme } = useTheme();

  // useEffect(() => {
  //   document.body.className = theme; // Применяем тему (light или dark)
  // }, [theme]);

  return (
    <div className={classNames("app", {}, [theme])}>
      <Suspense fallback="">
        <Navbar />
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};

export default App;
