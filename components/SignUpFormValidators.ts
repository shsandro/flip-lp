export type FormValuesType = {
  email: string;
  name: string;
  city: string;
  phone: string;
};

const isBlankOrNull = (value: string) => !value || !value.trim();

const validateEmail = (value) => {
  const reg = new RegExp(
    "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$",
  );
  return !reg.test(value) ? 'E-mail inválido' : undefined;
};

const validateString = (value: string) => (isBlankOrNull(value) ? 'Campo inválido' : undefined);

// eslint-disable-next-line consistent-return
const validatePhone = (value: string) => {
  const numberString = value?.replace(/\D/g, '');
  if (isBlankOrNull(numberString) || numberString?.length < 10) {
    return 'Telefone inválido';
  }
};

const schemaValidator = {
  email: validateEmail,
  phone: validatePhone,
  name: validateString,
  city: validateString,
};

const validate = (fields: string[], values: FormValuesType) => {
  const errors: any = {};
  fields.forEach((field) => {
    const errorMessage = schemaValidator[field](values[field]);
    errors[field] = errorMessage;
  });

  return errors;
};

export { schemaValidator, validate };
