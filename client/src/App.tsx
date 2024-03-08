import "./App.css";
import AddDataModal from "./pages/AddDataModel";
import { ResizableDemo } from "./pages/ResizableLayout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/add-workout" element={<AddDataModal/>}/>
      <Route path="/update-workout" element={<AddDataModal/>}/>
    </Routes>

      <div className="bg-slate-100">
        <div>
  <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
   GYM logger
  </h1>
  <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
   Thank you DataNeuron for this opportunity <br/>
   
  </p>
</div>

        

        <ResizableDemo />
      </div>
    </BrowserRouter>
  );
}

export default App;
