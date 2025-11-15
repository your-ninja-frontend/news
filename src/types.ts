export type Story = {
  by?: string;
  descendants?: number;
  id: number;
  kids?: number[];
  score?: number;
  time: number;
  title?: string;
  type: 'job' | 'story' | 'comment' | 'poll' | 'pollopt';
  url?: string;
  parent?: number;
  deleted?: boolean;
  text?: string;
  dead?: boolean;
  comments?: Story[];
};

export type StoryIdsList = number[];
