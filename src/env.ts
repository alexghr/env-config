export type MapFn<T> = (val: string | undefined) => T | undefined;

export function getEnvVar<T>(
  mapFn: MapFn<T>,
  typeName: string = mapFn.name
): (envVarName: string, defaultValue?: T) => T {
  return (envVarName, defaultValue) => {
    const rawVal = process.env[envVarName];
    const val = mapFn(rawVal);

    if (typeof val === "undefined" && typeof rawVal !== "undefined") {
      throw new TypeError(
        `Couldn't map environment variable to ${typeName}: ${envVarName}=${rawVal}`
      );
    }

    if (typeof val === "undefined" && typeof defaultValue !== "undefined") {
      return defaultValue;
    }

    throw new TypeError(`Missing required environment variable: ${envVarName}`);
  };
}
