export const isNotNull = (tuple: [string, string | null]): tuple is [string, string] => {
  return tuple[1] !== null;
}
