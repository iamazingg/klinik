export const MedsCategoriesRules = {
  meds_categories: {
    required: {
      value: true,
      message: "Kategori tidak boleh kosong",
    },
    maxLength: {
      value: 255,
      message: "kategori terlalu panjang",
    },
  },
};
