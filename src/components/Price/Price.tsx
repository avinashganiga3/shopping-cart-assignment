import { FC, ReactNode } from "react";

export type PriceProps = {
  price: number;
  className?: string;
  children?: ReactNode;
};
const Price: FC<PriceProps> = ({ price, className, children }) => {
  return (
    <div className={className}>
      {children} Rs.{price}
    </div>
  );
};

export default Price;
