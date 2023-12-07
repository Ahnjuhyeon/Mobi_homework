// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { RouterProvider } from "react-router-dom";
import "./App.css";
import TotalPage from "./pages";
import router from "./route/route";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <RouterProvider router={router}>
        <TotalPage />
      </RouterProvider>
    </>
  );
}

export default App;
