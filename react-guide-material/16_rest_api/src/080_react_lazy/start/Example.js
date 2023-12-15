import { useState, lazy, Suspense } from "react";
import ComponentA from "./components/ComponentA";

const LazyComponentA = lazy(() => import("./components/ComponentA"));
const LazyComponentB = lazy(() => import("./components/ComponentB"));

const Example = () => {
  const [compA, setCompA] = useState(false);

  return (
    <>
      <button onClick={() => setCompA((prev) => !prev)}>ComponentA</button>
      {/* loading */}
      <Suspense fallback={<div>Loading...</div>}>
        {/* {compA && <LazyComponentA />} */}
        {compA ? <LazyComponentA /> : <LazyComponentB />}
      </Suspense>
    </>
  );
};

export default Example;
