import { useEffect } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import ThemeProvider from "../context/ThemeContext";
import TodosProvider from "../context/TodosContext";
import "../styles/tailwind.css";

function MyApp({ Component, pageProps }): JSX.Element {
  useEffect(() => {
    if ("serviceWorker" in window.navigator) {
      window.addEventListener("load", () => {
        window.navigator.serviceWorker
          .register("/serviceWorker.js")
          .then((reg) => console.log(`Service Worker:Registered`))
          .catch((err) => console.log(`Service Worker: Error \n ${err}`));
      });
    }
  }, []);

  return (
    <ThemeProvider>
      <TodosProvider>
        <DndProvider backend={HTML5Backend}>
          <Component {...pageProps} />
        </DndProvider>
      </TodosProvider>
    </ThemeProvider>
  );
}

export default MyApp;
