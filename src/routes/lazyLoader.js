import { lazy, Suspense } from "react";

const LazyLoader = ({ page }) => {
  const LazyComponent = lazy(() => import(`../pages/${page}`));

  return (
    <Suspense fallback={"Loading..."}>
      <LazyComponent />
    </Suspense>
  );
};

export default LazyLoader;
