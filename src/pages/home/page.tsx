import Layout from "@/components/layout/Layout";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>صفحه اصلی</title>
      </Helmet>
      <Layout>
        <div className="-mt-[86px] flex h-screen w-full items-center justify-center">
          <span className="text-xl font-bold">صفحه اصلی</span>
        </div>
      </Layout>
    </>
  );
};

export default Home;
