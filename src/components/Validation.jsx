const errors = {
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
};

const validateName = (value) => {
  if (value.length <= 3) {
    errors.fullName =
      "Name is required field and must contain more than 3 characters";
  } else {
    errors.fullName = "";
  }
};

const vailidateEmail = (value) => {
  const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!regex.test(value)) {
    errors.email = "Must be a valid email";
  } else {
    errors.email = "";
  }
};

const validatePhone = (value) => {
  const regex = /^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/gm;
  if (!regex.test(value)) {
    errors.mobileNo = "Must be a valid number";
  } else {
    errors.mobileNo = "";
  }
};

const validateSubject = (value) => {
  if (value.length < 3) {
    errors.subject = "Must be a valid Subject";
  } else {
    errors.subject = "";
  }
};

const validateAddress = (value) => {
  if (value.length < 3) {
    errors.address = "Must be a valid Address";
  } else {
    errors.address = "";
  }
};
const validateCity = (value) => {
  if (value.length < 3) {
    errors.city = "Must be a valid City";
  } else {
    errors.city = "";
  }
};
const validateState = (value) => {
  if (value.length < 3) {
    errors.state = "State is required";
  } else {
    errors.state = "";
  }
};
const validatePinCode = (value) => {
  if (value.length < 3) {
    errors.pinCode = "Must be a valid Pincode";
  } else {
    errors.pinCode = "";
  }
};
const validateCountry = (value) => {
  if (value.length < 3) {
    errors.country = "Must be a valid Country";
  } else {
    errors.country = "";
  }
};
const validateCorporate = (value) => {
  if (value.length < 3) {
    errors.corporateIdentity = "Not Valid";
  } else {
    errors.corporateIdentity = "";
  }
};

export const validateInput = (name, value) => {
  if (name === "fullName") {
    validateName(value);
    return errors.fullName;
  }
  if (name === "mobileNo") {
    validatePhone(value);
    return errors.mobileNo;
  }
  if (name === "email") {
    vailidateEmail(value);
    return errors.email;
  }
  if (name === "subject") {
    validateSubject(value);
    return errors.subject;
  }
  if (name === "address") {
    validateAddress(value);
    return errors.address;
  }
  if (name === "city") {
    validateCity(value);
    return errors.city;
  }
  if (name === "state") {
    validateState(value);
    return errors.state;
  }
  if (name === "pinCode") {
    validatePinCode(value);
    return errors.pinCode;
  }
  if (name === "country") {
    validateCountry(value);
    return errors.country;
  }
  if (name === "corporateIdentity") {
    validateCorporate(value);
    return errors.corporateIdentity;
  }
};

export const validateFormData = ({
  fullName,
  mobileNo,
  email,
  subject,
  address,
  city,
  state,
  pinCode,
  country,
  corporateIdentity,
}) => {
  validateName(fullName);
  validatePhone(mobileNo);
  vailidateEmail(email);
  validateSubject(subject);
  validateAddress(address);
  validateCity(city);
  validateState(state);
  validatePinCode(pinCode);
  validateCountry(country);
  validateCorporate(corporateIdentity);
  return errors;
};
