import type { FormData } from "../types";
import { FC } from "react";
import { useFormContext } from "../context/form";
import { VALIDATION_RULES } from "../const/validation";

type Props = {
  id?: string;
  type?: "text" | "tel" | "email" | "password";
  name: string;
  className?: string;
  placeholder?: string | number;
  disabled?: boolean;
  required?: boolean;
  readOnly?: boolean;
  autoComplete?: string;
  minLength?: number;
  maxLength?: number;
  pattern?: string;
  labelText?: string;
  labelClass?: string;
  errorClass?: string;
  validations: string[];
};

const Input: FC<Props> = (props) => {
  const {
    id = "input-" + props.name,
    type = "text",
    name,
    className,
    placeholder = "",
    disabled = false,
    required = false,
    readOnly = false,
    autoComplete,
    minLength,
    maxLength,
    pattern,
    labelText,
    labelClass,
    errorClass,
    validations,
  } = props;

  const { form, handleFormChange } = useFormContext();
  return (
    <>
      <div className={labelClass}>
        {!!labelText && <label htmlFor={id}>{labelText}</label>}
      </div>
      <div className={className}>
        <input
          id={id}
          type={type}
          name={name}
          className="w-full p-2"
          value={form[name as keyof FormData].value}
          placeholder={placeholder.toString()}
          disabled={disabled}
          required={required}
          readOnly={readOnly}
          autoComplete={autoComplete}
          minLength={minLength}
          maxLength={maxLength}
          pattern={pattern}
          data-validations={validations}
          onChange={(e) => handleFormChange(e)}
          onBlur={(e) => handleFormChange(e)}
        />
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

export default Input;
