export const rules = {
  email: {
    required: {
      value: true,
      message: "Email can not empty",
    },
    maxLength: { value: 255, message: "Email too long" },
    pattern: {
      value: /^([\w-.]+@([\w-]+.)+[\w-]{2,4})?$/,
      message: "Email invalid",
    },
  },
  password: {
    required: {
      value: true,
      message: "Password can not empty",
    },
    maxLength: { value: 255, message: "Password too long" },
  },
  locations: {
    required: {
      value: true,
      message: "Lokasi can not empty",
    },
  },
};
