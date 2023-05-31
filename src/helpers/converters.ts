// Converting the input only on blur event if eventType is sent.
export const trimmer = (input: string, eventType?: string): string => {
  if (!!eventType && eventType !== "blur") return input;
  return input.trim();
};
