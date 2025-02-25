export type LinkInfo = {
  displayText: string;
  linkURL: string;
};

export type ActivityTypes =
  | 'coreskill'
  | 'lecture'
  | 'teambuilding'
  | 'misc'
  | 'project'
  | 'survey'
  | 'lecalonject'
  | 'officehours'
  | 'codealong';

export type Activity = {
  name: string;
  duration: string;
  actType: ActivityTypes;
  links: LinkInfo[];
};

export type Day = {
  title: string;
  activities: Activity[];
};

export type Schedule = Day[];
