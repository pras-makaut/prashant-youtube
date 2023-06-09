import { Provider } from "react-redux";
import "./App.css";
import Body from "./components/Body";

import Head from "./components/Head";
import store from "./utils/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
import SeachVideo from "./components/SeachVideo";
import { useState } from "react";
import searchContext from "./utils/searchContext";
import Demo from "./components/Demo";
import Demo2 from "./components/Demo2";

const AppLayOut = () => {
  const [showSuggestion, setShowSuggestion] = useState(false);
  return (
    <Provider store={store}>
      <searchContext.Provider
        value={{
          showSuggestion: showSuggestion,
          setShowSuggestion: setShowSuggestion,
        }}
      >
        <Head />
        <Body />
      </searchContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayOut />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "watch",
        element: <WatchPage />,
      },
      {
        path: "related/:id",
        element: <SeachVideo />,
      },
      {
        path: "demo",
        element: (
          <>
            <Demo />
            <Demo2 />
          </>
        ),
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={appRouter} />;
}

export default App;
