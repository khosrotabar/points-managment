export type IconsProps = {
  width: number;
  height: number;
  color?: string;
};

export type SprintProps = {
  total_sprint: number;
  current_sprint: number;
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

export interface loginProps {
  usernameInput: string;
  passwordInput: string;
}
