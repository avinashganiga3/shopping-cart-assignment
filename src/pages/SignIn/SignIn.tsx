import { StringObject } from "../../types";
import AuthPageLayout from "../AuthPageLayout";

const SignIn = () => {
  const submitHandler = (value: StringObject) => {
    console.log("login", value);
  };
  return (
    <main>
      <AuthPageLayout
        initialFormData={initialFormData}
        title="SignUp"
        subTitle="Get access to Orders, Whislists and Recommendations "
        buttonTitle="Login"
        onSubmit={submitHandler}
      />
    </main>
  );
};

const initialFormData = {
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
    autoComplete: "current-password",
    type: "password",
    value: "",
    required: true,
    errorMsg: {
      required: "Password cannot be empty",
    },
  },
};

export default SignIn;
