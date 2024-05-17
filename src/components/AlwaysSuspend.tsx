import React from "react";
import { sleep } from "../utils/sleep";

// 毎秒スリープするSuspendコンポーネント
export const AlwaysSuspend: React.FC = () => {
  console.log("AlwaysSuspend");
  throw sleep(1000);
};
