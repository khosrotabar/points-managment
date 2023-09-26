import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import Points from "./ui/points/Points";
import Summary from "./ui/summary/Summary";

const PointsManager = () => {
  return (
    <>
      <Helmet>
        <title>مدیریت پوینت ها</title>
      </Helmet>
      <Layout>
        <div className="-mt-[86px]  mr-[133px] h-screen pl-[32px] pt-[90px]">
          <div className="flex h-full w-full items-start justify-center gap-5 rounded-t-[50px] bg-[#F8FAFB] pl-[51px] pr-[54px] pt-7">
            <Points />
            <Summary />
          </div>
        </div>
      </Layout>
    </>
  );
};

export default PointsManager;
