import { ToastContainer } from "react-toastify";

import Layout from "./ui/components/Layout/Layout";
import HomePage from "./ui/page/HomePage";

function App() {
  return (
    <>
      <Layout>
        <HomePage />
      </Layout>
      <ToastContainer />
    </>
  );
}

export default App;
