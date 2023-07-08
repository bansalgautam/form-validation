import { useDispatch, useSelector } from "react-redux";
import { formActions } from "../store/form-slice";
import { useState } from "react";
import Input from "./Input";
import { validateFormData } from "./Validation";

const FormData = [
  {
    id: 1,
    name: "fullName",
    type: "text",
    placeholder: "Enter Your Name",
  },
  {
    id: 2,
    name: "mobileNo",
    type: "text",
    placeholder: "Enter Your Phone Number",
  },
  {
    id: 3,
    name: "email",
    type: "text",
    placeholder: "Enter Your Email",
  },
  {
    id: 4,
    name: "subject",
    type: "text",
    placeholder: "Enter Subject",
  },
  {
    id: 5,
    name: "address",
    type: "text",
    placeholder: "Enter Address",
  },
  {
    id: 6,
    name: "city",
    type: "text",
    placeholder: "Enter Your City",
  },
  {
    id: 7,
    name: "state",
    type: "text",
    placeholder: "Enter Your State",
  },
  {
    id: 8,
    name: "pinCode",
    type: "text",
    placeholder: "Enter Your Pincode",
  },
  {
    id: 9,
    name: "country",
    type: "text",
    placeholder: "Enter Your Country",
  },
  {
    id: 10,
    name: "corporateIdentity",
    type: "text",
    placeholder: "Enter Your Identity",
  },
];

const Form = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    fullName: "",
    mobileNo: "",
    email: "",
    subject: "",
    address: "",
    city: "",
    state: "",
    pinCode: "",
    country: "",
    corporateIdentity: "",
  });

  const [formErrors, setFormErrors] = useState({});
  const [isValid, setIsValid] = useState();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const errors = validateFormData(formData);
    const values = Object.values(errors).filter((item) => item.length > 0);
    if (values.length === 0) {
      setIsValid(true);
      dispatch(formActions.handleSubmit({ ...formData }));
    } else {
      setIsValid(false);
      setFormErrors(validateFormData(formData));
    }
  };

  return (
    <div className="flex gap-4">
      <pre className="bg-black text-white basis-1/2 p-4 rounded-lg">
        {JSON.stringify(formData, undefined, 2)}
      </pre>
      <form
        className="bg-red-300 p-4 rounded-lg border-2 border-black"
        onSubmit={handleSubmit}
      >
        {FormData.map((item) => (
          <Input
            key={item.id}
            {...item}
            onChange={handleChange}
            value={formData[item.name]}
            submitError={!isValid ? formErrors[item.name] : null}
          />
        ))}
        <button className="rounded-lg w-full bg-black text-white">
          Submit
        </button>
      </form>
    </div>
  );
};
export default Form;
