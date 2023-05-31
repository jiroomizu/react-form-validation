import type { ChangeEvent } from "react";

export type ValidationsRuleSet = Record<string, Validation>;

export type Validation = {
  error: string;
  validator: (input: string) => boolean;
  groupValidator: (target: HTMLInputElement, form: FormData) => boolean;
  converter: (input: string, eventType?: string) => string;
};

export type FormData = {
  [name: string]: { value: string; errors: string[] };
};

export type FormContextType = {
  form: FormData;
  handleFormChange: (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => void;
};
