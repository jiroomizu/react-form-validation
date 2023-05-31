// React context for reusable forms.
// The handleChange do some conversion & validation which
// written in App.tsx components properties, then works as
// unified form state setter.

import { useState, createContext, useContext } from "react";
import type { ChangeEvent } from "react";
import type { FormContextType, FormData } from "../types";
import { VALIDATION_RULES } from "../const/validation";

export const useFormTemplate = (formDefault: FormData): FormContextType => {
  const [form, setForm] = useState<FormData>(formDefault);

  const handleFormChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const target = e.currentTarget;
    let value = target.value;
    const errors = [];
    const targetValidations =
      !!target && !!target.dataset.validations
        ? target.dataset.validations.split(",")
        : [];
    for (const key of targetValidations) {
      value = VALIDATION_RULES[key].converter(value, e.type);
      if (!VALIDATION_RULES[key].validator(value)) {
        errors.push(key);
      }
    }

    const updated = {
      ...form,
      [target.name]: {
        value: value,
        errors: errors,
      },
    };

    setForm(updated);
  };

  return { form: form, handleFormChange: handleFormChange };
};

export const FormContext = createContext<FormContextType>({
  form: {},
  handleFormChange: () => null,
});

export const useFormContext = () => {
  return useContext(FormContext);
};
