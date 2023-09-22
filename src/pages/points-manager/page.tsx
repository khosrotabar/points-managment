import Layout from "@/components/layout/Layout";
import { Helmet } from "react-helmet-async";

const PointsManager = () => {
  return (
    <>
      <Helmet>
        <title>مدیریت پوینت ها</title>
      </Helmet>
      <Layout>
        <span>points</span>
      </Layout>
    </>
  );
};

export default PointsManager;
