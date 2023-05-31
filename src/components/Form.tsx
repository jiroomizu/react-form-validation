import type { FC, ReactElement } from "react";
import type { FormData } from "../types";
import { FormContext, useFormTemplate } from "../context/form";

type Props = {
  formDefault: FormData;
  children: ReactElement;
  className: string;
};
const Form: FC<Props> = (props) => {
  const { formDefault, children } = props;
  const { form, handleFormChange } = useFormTemplate(formDefault);

  return (
    <FormContext.Provider
      value={{
        form: form,
        handleFormChange: handleFormChange,
      }}
    >
      <form className={props.className}>{children}</form>
    </FormContext.Provider>
  );
};

export default Form;
