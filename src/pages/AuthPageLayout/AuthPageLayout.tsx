import { FC } from "react";
import cn from "classnames";
import Form, { FormProps } from "../../components/Form";
import styles from "./AuthPageLayout.module.scss";

type AuthPageLayoutProps = {
  title: string;
  subTitle?: string;
} & FormProps;

const AuthPageLayout: FC<AuthPageLayoutProps> = ({
  title,
  subTitle,
  ...FormProps
}) => {
  return (
    <div className={cn(styles.authPage, "container")}>
      <div className={styles.content}>
        <h1>{title}</h1>
        <p>{subTitle} </p>
      </div>
      <Form {...FormProps} />
    </div>
  );
};

export default AuthPageLayout;
