export const ServiceCategoryRules = {
  services_category: {
    required: {
      value: true,
      message: "services tidak boleh kosong",
    },
    maxLength: {
      value: 255,
      message: "services terlalu panjang",
    },
  },
};
