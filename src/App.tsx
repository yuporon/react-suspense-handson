import { Suspense, useState } from "react";
import "./App.css";
import { AlwaysSuspend } from "./components/AlwaysSuspend";
import { SometimesSuspend } from "./components/SometimesSuspend";
import { RenderingNotifier } from "./components/RenderingNotifier";
import { DataLoader } from "./components/DataLoader";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="text-center">
      <h1 className="text-2xl">React App!</h1>
      <RenderingNotifier name="outside-Suspense" />
      <Suspense fallback={<div>Loading...</div>}>
        {/* <AlwaysSuspend />
        <SometimesSuspend />
        <RenderingNotifier name="inside-Suspense" />
        <button className="border p-1" onClick={() => setCount((c) => c + 1)}>
          {count}
        </button> */}
        <DataLoader />
      </Suspense>
    </div>
  );
}

export default App;
