import { getEnvVar } from "./env.js";
import { boolean, number, string } from "./map.js";

export const getString = getEnvVar(string);
export const getNumber = getEnvVar(number);
export const getBoolean = getEnvVar(boolean);
