import { useState, ChangeEvent, FC, FormEvent } from "react";
import cn from "classnames";
import Button from "../Button";
import InputText, { ErrorTypes, InputTextProps } from "../InputText";
import { StringObject } from "../../types";
import styles from "./Form.module.scss";

export type FormDataField = InputTextProps & { matchField?: string };
export type TFormData = {
  [key: string]: FormDataField;
};

export type FormProps = {
  initialFormData: TFormData;
  buttonTitle: string;
  className?: string;
  onSubmit: (value: StringObject) => void;
};

const checkValid = (value: string, input: FormDataField, fData: TFormData) => {
  let errorType = ErrorTypes.Default,
    valid = true;
  const { required, pattern, matchField } = input;
  if (required && !value) {
    errorType = ErrorTypes.Required;
    valid = false;
  } else if (pattern && value && !new RegExp(pattern).test(value)) {
    errorType = ErrorTypes.Pattern;
    valid = false;
  } else if (
    matchField &&
    fData[matchField] &&
    fData[matchField].value !== value
  ) {
    errorType = ErrorTypes.MatchField;
    valid = false;
  }

  return { errorType, valid };
};

const Form: FC<FormProps> = ({
  initialFormData,
  className,
  buttonTitle,
  onSubmit,
}) => {
  const [formData, setFormData] = useState<TFormData>(() => {
    return Object.keys(initialFormData).reduce(
      (fData: TFormData, key: string) => {
        const input = initialFormData[key];
        const { value = "" } = input;
        const validation = checkValid(value.toString(), input, initialFormData);
        fData[key] = { ...input, ...validation };
        return fData;
      },
      {} as TFormData
    );
  });

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((pData) => {
      const input = pData[name];
      const validation = checkValid(value, input, pData);
      return {
        ...pData,
        [name]: {
          ...input,
          ...validation,
          value: value,
        },
      };
    });
  };

  const onBlur = (event: ChangeEvent<HTMLInputElement>) => {
    const { name } = event.target;
    if (formData[name].touched) {
      return;
    }
    setFormData((pData) => {
      const input = pData[name];
      return {
        ...pData,
        [name]: {
          ...input,
          touched: true,
        },
      };
    });
  };

  const onSubmitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const fData = Object.keys(formData).reduce(
      (aData, key: string) => {
        const input = formData[key];
        let { value = "" } = input;
        value = value.toString();
        aData.data[key] = value;
        const { valid } = checkValid(value, input, formData);
        aData.isValid = !aData.isValid ? false : valid;
        return aData;
      },
      { data: {}, isValid: true } as {
        data: StringObject;
        isValid: boolean;
      }
    );

    //if form is not valid and show error in input field by setting input field touched to true
    if (!fData.isValid) {
      console.log("invalid", fData);
      setFormData((pData) => {
        return Object.keys(pData).reduce((aData, key) => {
          aData[key] = { ...pData[key], touched: true };
          return aData;
        }, {} as TFormData);
      });
      return;
    }
    onSubmit(fData.data);
  };

  return (
    <form
      className={cn(styles.customForm, className)}
      onSubmit={onSubmitHandler}
      noValidate
    >
      {Object.keys(formData).map((name) => {
        const input = formData[name];
        const { matchField, ...inputFields } = input;
        return (
          <InputText
            key={input.id}
            onChange={onChangeHandler}
            onBlur={onBlur}
            {...inputFields}
          />
        );
      })}

      <Button className={styles.button}>{buttonTitle}</Button>
    </form>
  );
};

export default Form;
