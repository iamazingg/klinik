export const LocationValidation = {
  clinic_name: {
    required: {
      value: true,
      message: "Nama klinik tidak boleh kosong",
    },
    maxLength: {
      value: 255,
      message: "Nama klinik terlalu panjang",
    },
  },
  address: {
    required: {
      value: true,
      message: "Alamat tidak boleh kosong",
    },
    maxLength: {
      value: 255,
      message: "alamat terlalu panjang",
    },
  },
};
