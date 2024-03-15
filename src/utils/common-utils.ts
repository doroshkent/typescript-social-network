export function isAbsoluteURL(url: string) {
  try {
    new URL( url );
    return true;
  } catch (error) {
    return false;
  }
}

export const isNotNull = (tuple: [ string, string | null ]): tuple is [ string, string ] => {
  return tuple[1] !== null;
}
