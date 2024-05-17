import { Suspense } from "react";
import "./App.css";
import { AlwaysSuspend } from "./components/AlwaysSuspend";

function App() {
  return (
    <div className="text-center">
      <h1 className="text-2xl">React App!</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <p>ここは表示されないよ</p>
        <AlwaysSuspend />
      </Suspense>
    </div>
  );
}

export default App;
