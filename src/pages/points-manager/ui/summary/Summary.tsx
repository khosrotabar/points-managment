import PichartIcon from "@/components/icons/pichart-icon";
import SummaryComponent from "./summary-component";
import { useQuery } from "react-query";
import { getTeams } from "@/api";
import { useContextValue } from "@/context";
import { useState } from "react";
import SprintsLoading from "@/components/sprints-loading";

const Summary = () => {
  const [isLoding, setIsLoading] = useState<boolean>(true);
  const { state } = useContextValue();
  const { data } = useQuery("teams", () => getTeams(setIsLoading));
  const teamName = state.team;
  const team = data && data[teamName];
  let sprints_average: number = 0;
  let total_sprints_average: number = 0;
  let team_incident_average: number = 0;

  team?.sort((a, b) => {
    const dateA = a.date;
    const dateB = b.date;
    if (dateA > dateB) {
      return -1;
    }
    if (dateA < dateB) {
      return 1;
    }
    return 0;
  });

  if (team) {
    sprints_average = parseInt(
      ((team[0].done + team[1].done + team[2].done) / 3).toFixed(),
    );
    total_sprints_average = parseInt(
      ((team[0].planned + team[1].planned + team[2].planned) / 3).toFixed(),
    );
    team_incident_average = parseInt(
      (
        (team[0].team_incident +
          team[1].team_incident +
          team[2].team_incident) /
        3
      ).toFixed(),
    );
  }

  return (
    <div className="mt-[48px] flex w-[388px] flex-col items-start gap-9 rounded-[30px] bg-[#FCFCFC] px-9 py-7">
      <div className="flex items-center gap-2">
        <PichartIcon width={21} height={22} />
        <span className="text-[20px] font-[700] text-[#b2b2b2]">
          در یک نگاه
        </span>
      </div>
      {isLoding ? (
        <SprintsLoading />
      ) : (
        <div className="flex w-full flex-col items-start gap-8">
          <SummaryComponent
            current_sprint={team && team[0].done}
            total_sprint={team && team[0].planned}
            sprint_name_part1={"اسپرینت قبلی"}
            team_incident={team && team[0].team_incident}
          />
          <SummaryComponent
            current_sprint={team && team[1].done}
            total_sprint={team && team[1].planned}
            sprint_name_part1={"دو"}
            sprint_name_part2={"اسپرینت قبلی"}
            team_incident={team && team[1].team_incident}
          />
          <SummaryComponent
            current_sprint={team && team[2].done}
            total_sprint={team && team[2].planned}
            sprint_name_part1={"سه"}
            sprint_name_part2={"اسپرینت قبلی"}
            team_incident={team && team[2].team_incident}
          />
          <div className="mt-5 w-full">
            <SummaryComponent
              current_sprint={sprints_average}
              total_sprint={total_sprints_average}
              sprint_name_part1={"میانگین"}
              team_incident={team_incident_average}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Summary;
