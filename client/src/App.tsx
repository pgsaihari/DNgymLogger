import "./App.css";
import { ResizableDemo } from "./pages/ResizableLayout";

function App() {
  return (
    <>
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
    </>
  );
}

export default App;
