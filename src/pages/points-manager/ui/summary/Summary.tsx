import PichartIcon from "@/components/icons/pichart-icon";
import SummaryComponent from "./summary-component";

const Summary = () => {
  const last_sprint: number = 57;
  const last_tow_sprint: number = 47;
  const last_three_sprint: number = 39;
  const sprints_average: number = parseInt(
    ((last_sprint + last_tow_sprint + last_three_sprint) / 3).toFixed(),
  );

  return (
    <div className="mt-[48px] flex w-[388px] flex-col items-start gap-9 rounded-[30px] bg-[#FCFCFC] px-9 py-7">
      <div className="flex items-center gap-2">
        <PichartIcon width={21} height={22} />
        <span className="text-[20px] font-[700] text-[#b2b2b2]">
          در یک نگاه
        </span>
      </div>
      <div className="flex w-full flex-col items-start gap-8">
        <SummaryComponent
          current_sprint={last_sprint}
          total_sprint={58}
          sprint_name_part1={"اسپرینت قبلی"}
        />
        <SummaryComponent
          current_sprint={last_tow_sprint}
          total_sprint={53}
          sprint_name_part1={"دو"}
          sprint_name_part2={"اسپرینت قبلی"}
        />
        <SummaryComponent
          current_sprint={last_three_sprint}
          total_sprint={58}
          sprint_name_part1={"سه"}
          sprint_name_part2={"اسپرینت قبلی"}
        />
        <div className="mt-5 w-full">
          <SummaryComponent
            current_sprint={sprints_average}
            total_sprint={58}
            sprint_name_part1={"میانگین"}
          />
        </div>
      </div>
    </div>
  );
};

export default Summary;
