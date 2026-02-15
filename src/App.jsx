import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import './css/App.css'
import { MovieContextProvider } from "./context/MovieContext";

function App() {
  return (
    <MovieContextProvider>
      <div className="mainContent">
        <Header/>
        <main>
          <Outlet />
        </main>
      </div>
    </MovieContextProvider>
  );
}

export default App;
