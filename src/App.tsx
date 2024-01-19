import { useMemo, useState } from "react";
import "./App.css";

const giantArray = new Array(19999999).fill(0).map((_, index) => {
  return {
    id: index,
    isSelected: index === 18_999_000,
  };
});

const ComponentWithoutMemo = () => {
  const [count, setCount] = useState(0);
  const [items] = useState(giantArray);
  const selectedItem = items.find((item) => item.isSelected);

  return (
    <>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>{selectedItem?.id}</p>
      </div>
      <p className="read-the-docs">Counter without Memo</p>
    </>
  );
};

const ComponentWithMemo = () => {
  const [count, setCount] = useState(0);
  const [items] = useState(giantArray);
  const selectedItem = useMemo(
    () => items.find((item) => item.id === count),
    [items, count]
  );

  return (
    <>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>{selectedItem?.id}</p>
      </div>
      <p className="read-the-docs">Counter with Memo</p>
    </>
  );
};

const App = () => {
  return (
    <>
      <h1>Vite + React</h1>
      <ComponentWithoutMemo />
      <ComponentWithMemo />
    </>
  );
};

export default App;
