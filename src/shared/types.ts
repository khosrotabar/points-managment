export type IconsProps = {
  width: number;
  height: number;
  color?: string;
};

export type SprintProps = {
  total_sprint: number | undefined;
  current_sprint: number | undefined;
  team_incident?: number | undefined;
  sprint_name_part1?: string;
  sprint_name_part2?: string;
};

export type dataProps = {
  pk: number;
  team: string;
  person: string;
  date: string;
  planned: number;
  done: number;
  velocity_percentage: number;
};

interface teamProps {
  date: string;
  planned: number;
  team_incident: number;
  done: number;
  velocity_percentage: number;
}

export type teamsObjectProps = {
  [teamName: string]: teamProps[];
};

export interface loginProps {
  usernameInput: string;
  passwordInput: string;
}
