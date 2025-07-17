import { useState } from "react";

export function useForm(initialFormValues) {
  const [values, setValues] = useState(initialFormValues);
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const handleChange = (evt) => {
    const { value, name } = evt.target;
    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: evt.target.validationMessage });
    setIsValid(evt.target.closest("form").checkValidity());
  };

  return { values, errors, isValid, setValues, setIsValid, handleChange };
}
