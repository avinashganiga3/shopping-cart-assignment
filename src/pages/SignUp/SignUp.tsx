import { StringObject } from "../../types";
import AuthPageLayout from "../AuthPageLayout";

const SignUp = () => {
  const submitHandler = (value: StringObject) => {
    console.log("sign up", value);
  };

  return (
    <main>
      <AuthPageLayout
        initialFormData={initialFormData}
        title="SignUp"
        subTitle="We do not share your personal details with anyone"
        buttonTitle="SignUp"
        onSubmit={submitHandler}
      />
    </main>
  );
};

const initialFormData = {
  firstName: {
    name: "firstName",
    id: "fisrtName",
    label: "First Name",
    autoComplete: "given-name",
    type: "text",
    value: "",
    required: true,
    errorMsg: {
      required: "First Name cannot be empty",
    },
  },
  lastName: {
    name: "lastName",
    id: "lastName",
    label: "Last Name",
    autoComplete: "family-name",
    type: "text",
    value: "",
  },
  email: {
    name: "email",
    id: "email",
    label: "Email",
    autoComplete: "email",
    type: "email",
    value: "",
    required: true,
    pattern: `(([^<>()[\\]\\.,;:\\s@"]+(\\.[^<>()[\\]\\.,;:\\s@"]+)*)|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))`,
    errorMsg: {
      required: "Email Address cannot be empty",
      pattern: "Enter Valid Email Address",
    },
  },
  password: {
    name: "password",
    id: "password",
    label: "Password",
    autoComplete: "new-password",
    type: "password",
    value: "",
    required: true,
    pattern:
      "(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}",
    errorMsg: {
      required: "Password cannot be empty",
      pattern:
        "Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character",
    },
  },
  confirmPassword: {
    name: "confirmPassword",
    id: "confirmPassword",
    label: "Confirm Password",
    autoComplete: "new-password",
    type: "password",
    value: "",
    required: true,
    matchField: "password",
    errorMsg: {
      default: "Confirm Passsword should Match the new Password",
    },
  },
};

export default SignUp;