export type Point = {
  name: string | number,
  coordinate: number[];
  halo: Halo;
  title: Title;
  icon: Icon;
};

export type Path = {
  source: string | number,
  route: number[][],
  target: string | number,
  line: Line;
};

export type Line = {
  show: boolean,
  slot?:string,
  width: number,
  color: string,
  orbitColor: string,
  duration: number,
  radius: number,
  k: number;
  curvature: number;
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