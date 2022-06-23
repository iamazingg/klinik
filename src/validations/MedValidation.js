export const MedRules = {
  id: {
    maxLength: {
      value: 255,
      message: "nama obat terlalu panjang",
    },
  },
  medicine: {
    required: {
      value: true,
      message: "nama obat tidak boleh kosong",
    },
    maxLength: {
      value: 255,
      message: "nama obat terlalu panjang",
    },
  },
  sku: {
    required: {
      value: true,
      message: "SKU tidak boleh kosong",
    },
    maxLength: {
      value: 255,
      message: "SKU terlalu panjang",
    },
  },
  base_price: {
    required: {
      value: true,
      message: "Harga beli tidak boleh kosong",
    },
    maxLength: {
      value: 255,
      message: "Harga beli terlalu panjang",
    },
  },
  category: {
    required: {
      value: true,
      message: "kategori obat tidak boleh kosong",
    },
    maxLength: {
      value: 255,
      message: "kategori obat terlalu panjang",
    },
  },
  location_id: {
    required: {
      value: true,
      message: "lokasi tidak boleh kosong",
    },
    maxLength: {
      value: 255,
      message: "lokasi terlalu panjang",
    },
  },
  stock_id: {
    maxLength: {
      value: 255,
      message: "nama obat terlalu panjang",
    },
  },
  qty: {
    required: {
      value: true,
      message: "stock tidak boleh kosong",
    },
    maxLength: {
      value: 255,
      message: "stock terlalu panjang",
    },
  },
  id_harga_wni: {
    maxLength: {
      value: 255,
      message: "nama obat terlalu panjang",
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
  id_harga_wna: {
    maxLength: {
      value: 255,
      message: "nama obat terlalu panjang",
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
