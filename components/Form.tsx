import React, { useState } from "react";
interface FormProps {
  children: (
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    isSubmitting: boolean
  ) => JSX.Element;
  initialValues: object;
  onSubmit: (
    values: object,
    setIsSubmitting: React.Dispatch<React.SetStateAction<boolean>>
  ) => void;
  className?: string;
}
const Form: React.FC<FormProps> = ({
  children,
  initialValues,
  onSubmit,
  className,
}) => {
  const [values, setValues] = useState<object>(() =>
    initialValues ? initialValues : {}
  );
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <form
      className={className}
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(values, setIsSubmitting);
      }}
    >
      {children(onChange, isSubmitting)}
    </form>
  );
};

export default Form;
