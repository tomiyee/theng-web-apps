import { DropdownOption } from './components/Select';

export const getOptionsFromEnum = <T extends object>(enumObj: T): DropdownOption<T[keyof T]>[] => {
  const enumKeys = getEnumKeys(enumObj);
  return enumKeys.map((enumKey) => ({
    value: enumObj[enumKey as keyof T],
    label: enumKey,
    /** All enum keys should be unique */
    key: enumKey,
  }));
};

/** Returns a list of the keys of a Typescript enum */
export const getEnumKeys = <T extends object>(enumObj: T): string[] =>
  Object.keys(enumObj).filter((key) => isNaN(Number(key)));
