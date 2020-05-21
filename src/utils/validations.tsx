export const usernameValidator = (register: any) =>
  register({
    required: "Username is Required",
    pattern: {
      value: /^[A-Za-z0-9]+$/i,
      message: "Username cannot contain special characters",
    },
  });

export const firstNameValidator = (register: any) =>
  register({
    required: "First Name is Required",
    pattern: {
      value: /^[A-Za-z0-9]+$/i,
      message: "First Name cannot contain special characters",
    },
  });

export const lastNameValidator = (register: any) =>
  register({
    required: "Last Name is Required",
    pattern: {
      value: /^[A-Za-z0-9]+$/i,
      message: "Last Name cannot contain special characters",
    },
  });

export const passwordValidator = (register: any) =>
  register({
    required: "Password is Required",
    minLength: {
      value: 8,
      message: "Password must have at least 8 characters",
    },
  });

export const cPasswordValidator = (password: any, register: any) => {
  return register({
    required: "Confirm Password is Required",
    validate: (value: any) =>
      value === password.current || "The passwords do not match",
  });
};

export const emailValidator = (register: any) =>
  register({
    required: "Email is Required",
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
      message: "Invalid email address",
    },
  });
