export type Point = {
  name: string | number,
  value: any,
  coordinate: number[];
  halo: Halo;
  title: Title;
  icon: Icon;
};

export type path = {
  source: string | number,
  route: number[],
  target: string | number,
  line: Line;
};

export type Line = {
  show: boolean,
  type: 'line' | 'pipe';
  width: number,
  color: string,
  orbitColor: string,
  duration: number,
  radius: number;
};

export type Halo = {
  show: boolean,
  duration: number,
  color: string,
  radius: number;
};

export type Title = {
  show: boolean,
  offest: number[],
  color: string,
  fontSize: number,
};

export type Icon = {
  show: boolean,
  url: string,
  width: number,
  height: number,
};