import { useState } from "react";
import { validateInput } from "./Validation";

const Input = ({ name, placeholder, type, value, onChange, submitError }) => {
  const [error, setError] = useState("");

  const changeHandler = (e) => {
    onChange(e);
    setError(validateInput(name, value));
  };

  return (
    <div className="flex flex-col my-4 w-full">
      <div className="flex w-full">
        <label htmlFor={name} className="basis-1/3 mr-2">
          {placeholder}:
        </label>
        <input
          id={name}
          name={name}
          value={value}
          type={type}
          placeholder={placeholder}
          className="flex-1"
          onChange={changeHandler}
        />
      </div>
      <span className="text-red-900">{error || submitError}</span>
    </div>
  );
};
export default Input;
