// This page file controls basic form structure & appearance.
// The structure relys on FormData object and components
// layout, and appearance is able to change with css classes.

import type { FormData } from "./types";
import Form from "./components/Form";
import Input from "./components/Input";
import Select from "./components/Select";

const loginDefault: FormData = {
  userId: { value: "", errors: [] },
  password: { value: "", errors: [] },
};

const registerDefault: FormData = {
  userId: { value: "", errors: [] },
  password: { value: "", errors: [] },
  email: { value: "", errors: [] },
  choice: { value: "", errors: [] },
};

const selectOpions = [
  {
    value: "",
    optionText: "-",
  },
  {
    value: "tea",
    optionText: "Tea in first",
  },
  {
    value: "milk",
    optionText: "Milk in first",
  },
  {
    value: "same",
    optionText: "I don't care.",
  },
];

function App() {
  return (
    <div className="w-full p-10 md:p-20 mx-auto md:max-w-2xl">
      <h1 className="text-3xl font-bold pl-6">React Form witout libraries</h1>
      <Form formDefault={loginDefault} className={"flex flex-col mt-10 mb-20"}>
        <>
          <h2 className="font-bold text-xl p-6">Login Form</h2>
          <fieldset className="flex flex-row flex-wrap mb-4 justify-end">
            <Input
              name={"userId"}
              className="basis-full md:basis-2/3 p-4"
              required={true}
              placeholder={"your login id"}
              autoComplete={"id"}
              labelText={"id"}
              labelClass="basis-full md:basis-1/3 p-6 pb-0 md:pb-6 align-items-center"
              errorClass="basis-full md:basis-2/3 text-red-400 pl-4"
              validations={["required", "alphanumeric"]}
            />
          </fieldset>
          <fieldset className="flex flex-row flex-wrap mb-4 justify-end">
            <Input
              name={"password"}
              className="basis-full md:basis-2/3 p-4"
              required={true}
              placeholder={"12 chars at least."}
              autoComplete={"password"}
              labelText={"password"}
              labelClass="basis-full md:basis-1/3 p-6 pb-0 md:pb-6 align-items-center"
              errorClass="basis-full md:basis-2/3 text-red-400 pl-4"
              validations={["required", "password"]}
              pattern="[!-~]{12,50}"
            />
          </fieldset>
        </>
      </Form>

      <Form
        formDefault={registerDefault}
        className={"flex flex-col mt-10 mb-20"}
      >
        <>
          <h2 className="font-bold text-xl p-6">Registration Form</h2>
          <fieldset className="flex flex-row flex-wrap mb-4 justify-end">
            <Input
              name={"userId"}
              className="basis-full md:basis-2/3 p-4"
              required={true}
              placeholder={"your login id"}
              autoComplete={"id"}
              labelText={"id"}
              labelClass="basis-full md:basis-1/3 p-6 pb-0 md:pb-6 align-items-center"
              errorClass="basis-full md:basis-2/3 text-red-400 pl-4"
              validations={["required", "alphanumeric"]}
            />
          </fieldset>
          <fieldset className="flex flex-row flex-wrap mb-4 justify-end">
            <Input
              name={"email"}
              className="basis-full md:basis-2/3 p-4"
              required={true}
              placeholder={"12 chars at least."}
              autoComplete={"email"}
              labelText={"email"}
              labelClass="basis-full md:basis-1/3 p-6 pb-0 md:pb-6 align-items-center"
              errorClass="basis-full md:basis-2/3 text-red-400 pl-4"
              validations={["required", "email"]}
            />
          </fieldset>
          <fieldset className="flex flex-row flex-wrap mb-4 justify-end">
            <Select
              name={"choice"}
              className="basis-full md:basis-2/3 p-4"
              required={true}
              labelText={"your choice"}
              labelClass="basis-full md:basis-1/3 p-6 pb-0 md:pb-6 align-items-center"
              errorClass="basis-full md:basis-2/3 text-red-400 pl-4"
              options={selectOpions}
              validations={["required"]}
            />
          </fieldset>
          <fieldset className="flex flex-row flex-wrap mb-4 justify-end">
            <Input
              name={"password"}
              className="basis-full md:basis-2/3 p-4"
              required={true}
              placeholder={"12 chars at least."}
              autoComplete={"password"}
              labelText={"password"}
              labelClass="basis-full md:basis-1/3 p-6 pb-0 md:pb-6 align-items-center"
              errorClass="basis-full md:basis-2/3 text-red-400 pl-4"
              validations={["required", "password"]}
              pattern="[!-~]{12,50}"
            />
          </fieldset>
        </>
      </Form>
    </div>
  );
}
export default App;
