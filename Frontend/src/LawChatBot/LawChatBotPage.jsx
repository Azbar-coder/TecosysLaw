import React from "react";
import Sidebar from "../components/CompLawChatBot/Sidebar/Sidebar.jsx";
import Main from "../components/CompLawChatBot/Main/Main.jsx";
import ContextProvider from "./context/Context.jsx";
import "../App.css";
const App = () => {
  return (
    <>
      <ContextProvider>
        <div className="app-container">
          <Sidebar />
          <Main />
        </div>
      </ContextProvider>
    </>
  );
};

export default App;
