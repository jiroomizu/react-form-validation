import type { FormData } from "../types";
import { FC } from "react";
import { useFormContext } from "../context/form";
import { VALIDATION_RULES } from "../const/validation";

type Props = {
  id?: string;
  type?: "text" | "tel" | "email" | "password";
  name: string;
  className?: string;
  disabled?: boolean;
  required?: boolean;
  autoComplete?: string;
  options: FormOptions[];
  labelText?: string;
  labelClass?: string;
  errorClass?: string;
  validations: string[];
};

type FormOptions = {
  value: string;
  labelText?: string;
  optionText?: string;
  name?: string;
  optionsClass?: string;
};

const Select: FC<Props> = (props) => {
  const {
    id = "select-" + props.name,
    name,
    className,
    disabled = false,
    required = false,
    autoComplete,
    options,
    labelText,
    labelClass,
    errorClass,
    validations,
  } = props;

  const { form, handleFormChange } = useFormContext();
  return (
    <>
      {!!labelText && (
        <div className={labelClass}>
          <label htmlFor={id}>{labelText}</label>
        </div>
      )}
      <div className={className}>
        <select
          id={id}
          name={name || name}
          value={form[name as keyof FormData].value}
          className={className}
          disabled={disabled}
          required={required}
          autoComplete={autoComplete}
          onChange={(e) => handleFormChange(e)}
          data-validations={validations}
        >
          {!!options &&
            options.map((item) => {
              return (
                <option
                  key={item.value}
                  value={item.value}
                  className={item.optionsClass}
                >
                  {item.optionText || item.value}
                </option>
              );
            })}
        </select>
      </div>
      <ul className={errorClass}>
        {!!VALIDATION_RULES &&
          Object.entries(VALIDATION_RULES).map(([key, value]) => {
            return form[name].errors.includes(key) ? (
              <li key={"error-" + key}>{value.error}</li>
            ) : null;
          })}
      </ul>
    </>
  );
};

export default Select;
