import React, { Suspense, lazy } from "react";
import transition from "../transition";

const DisplacementSphere = lazy(() => import("./DisplacementSphere"));

const Product = () => {
  return (
    <div>
      <Suspense fallback={null}>
        <DisplacementSphere />
      </Suspense>

      <h1>PRODUCT PAGE</h1>
    </div>
  );
};

export default transition(Product);
