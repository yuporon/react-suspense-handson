import { Suspense, useState } from "react";
import "./App.css";
import { AlwaysSuspend } from "./components/AlwaysSuspend";
import { SometimesSuspend } from "./components/SometimesSuspend";
import { RenderingNotifier } from "./components/RenderingNotifier";
import { DataLoader1, DataLoader2 } from "./components/DataLoader";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="text-center">
      <h1 className="text-2xl">React App!</h1>
      <RenderingNotifier name="outside-Suspense" />
      <Suspense fallback={<div>Loading...</div>}>
        <DataLoader1 />
        <DataLoader2 />
      </Suspense>
    </div>
  );
}

export default App;
