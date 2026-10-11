export interface IProduct{
    id: number;
  image: "string";
  nameBn: "string";
  today: number;
  unit: string;
  change: { dir: string; pct: number };
}