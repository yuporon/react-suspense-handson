import React from "react";
import { sleep } from "../utils/sleep";

// 1秒間スリープするSuspendコンポーネント
export const SometimesSuspend: React.FC = () => {
  // １秒毎に50%の確率でスリープする。
  // つまり、期待値は、0 + 1 / 2 + 1 / 2^2 + 1 / 2^3 + ... = 1 であるため、1秒間スリープする
  if (Math.random() < 0.5) {
    throw sleep(1000);
  }
  return <p>Hello, world!</p>;
};
