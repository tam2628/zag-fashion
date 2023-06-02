import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./routes";
import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <AnimatePresence mode="wait">
      <RouterProvider router={router} />
    </AnimatePresence>
  );
}

export default App;
