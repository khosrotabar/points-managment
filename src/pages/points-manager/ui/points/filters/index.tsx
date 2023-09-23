import SortIcon from "@/components/icons/sort-icon";
import TeamIcon from "@/components/icons/team-icon";

const Filters = () => {
  return (
    <div className="mb-[21px] flex items-center gap-7">
      <span className="text-[18px] font-bold text-[#00131C]">
        تیم نرم افزار
      </span>
      <div className="flex cursor-pointer items-center gap-1 text-[#00344E]">
        <SortIcon width={20} height={13} />
        <span>مرتب سازی</span>
      </div>
      <div className="flex cursor-pointer items-center gap-1 text-[#00344E]">
        <TeamIcon width={19} height={13} />
        <span>اعضا</span>
      </div>
    </div>
  );
};

export default Filters;
