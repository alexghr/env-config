import { MapFn } from "./env.js";

export const string: MapFn<string> = (x) => x;
export const number: MapFn<number> = (x) => {
  const parsed = x ? parseInt(x, 10) : NaN;
  return Number.isNaN(parsed) ? undefined : parsed;
};

const acceptedBooleanTrues = new Set(["1", "yes", "true"]);
export const boolean: MapFn<boolean> = (x) =>
  x ? acceptedBooleanTrues.has(x) : undefined;
