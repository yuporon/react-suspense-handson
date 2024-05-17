import { useMemo, useState } from "react";
import { fetchData1 } from "../data/fetchData1";

export const DataLoader: React.VFC = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<string | null>(null);

  const _ = useMemo(() => {
    if (loading) {
      console.log("loading is true");
    }
    return 1;
  }, [loading]);

  // ローディングフラグが立っていてdataがまだ無ければローディングを開始する
  if (data === null && loading) {
    throw fetchData1().then(setData);
  }
  // データがあればそれを表示
  return (
    <div>
      <div>Data is {data}</div>
      <button className="border p-1" onClick={() => setLoading(true)}>
        load
      </button>
    </div>
  );
};
