import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Components
import ProductsList from "./components/ProductsList";
import TaskForm from "./components/TaskForm";

function App() {
  return (
    <div className="bg-zinc-900 h-[1200px]  text-white">
      <div className="flex pt-12 justify-center h-full">
        
        <BrowserRouter>
          <Routes>
            <Route path="" exact element={<ProductsList />} />
            <Route path="/create-task" element={<TaskForm />} />
            <Route path="/edit-task/:id" element={<TaskForm />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
