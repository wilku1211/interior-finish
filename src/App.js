import React, { Suspense } from "react";
import Index from "./pages/Index";
import Layout from "./components/layout/Layout";

const App = () => {
  return (
    <Layout>
      <Suspense fallback={<p>loading...</p>}>
        <Index />
      </Suspense>
    </Layout>
  );
};

export default App;
