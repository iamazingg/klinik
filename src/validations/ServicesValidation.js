export const rules = {
  services: {
    required: {
      value: true,
      message: "services tidak boleh kosong",
    },
    maxLength: {
      value: 255,
      message: "services terlalu panjang",
    },
  },
  service_category_id: {
    required: {
      value: true,
      message: "Service category tidak boleh kosong",
    },
    maxLength: {
      value: 255,
      message: "Service category terlalu panjang",
    },
  },
  harga_wni: {
    required: {
      value: true,
      message: "harga WNI tidak boleh kosong",
    },
    maxLength: {
      value: 255,
      message: "harga WNI terlalu panjang",
    },
  },
  harga_wna: {
    required: {
      value: true,
      message: "harga WNA tidak boleh kosong",
    },
    maxLength: {
      value: 255,
      message: "harga WNA terlalu panjang",
    },
  },
};
