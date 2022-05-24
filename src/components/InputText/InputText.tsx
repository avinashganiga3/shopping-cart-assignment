import { InputHTMLAttributes, FC } from "react";
import cn from "classnames";
import styles from "./InputText.module.scss";

export enum ErrorTypes {
  Required = "required",
  Pattern = "pattern",
  Default = "default",
  MatchField = "matchField",
}

export type InputTextProps = {
  label: string;
  valid?: boolean;
  errorType?: ErrorTypes;
  errorMsg?: { [key in ErrorTypes]?: string };
  touched?: true;
} & InputHTMLAttributes<HTMLInputElement>;

const InputText: FC<InputTextProps> = ({
  label,
  valid = true,
  errorType = ErrorTypes.Default,
  errorMsg = {},
  touched = false,
  ...inputProps
}) => {
  const { id } = inputProps;
  return (
    <div className={styles.inputGroup}>
      <input
        {...inputProps}
        aria-describedby={`error-${id}`}
        aria-invalid={!valid && touched}
        className={cn(styles.inputText, {
          [styles.hasValue]: inputProps.value,
          [styles.hasError]: !valid && touched,
        })}
      />
      <label htmlFor={inputProps.id} className={styles.inputLabel}>
        {label}
      </label>
      {!valid && touched && (
        <div className={styles.errorText} id={`error-${id}`} aria-live="polite">
          {errorMsg[errorType] || errorMsg[ErrorTypes.Default]}
        </div>
      )}
    </div>
  );
};

export default InputText;
