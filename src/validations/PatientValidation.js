export const PatientRules = {
  id: {
    maxLength: {
      value: 255,
      message: 'ID NULL',
    },
  },
  first_name: {
    required: {
      value: true,
      message: 'first name tidak boleh kosong',
    },
    maxLength: {
      value: 255,
      message: 'first name terlalu panjang',
    },
  },
  last_name: {
    required: {
      value: true,
      message: 'last name tidak boleh kosong',
    },
    maxLength: {
      value: 255,
      message: 'last name terlalu panjang',
    },
  },
  country: {
    required: {
      value: true,
      message: 'country tidak boleh kosong',
    },
    maxLength: {
      value: 255,
      message: 'country terlalu panjang',
    },
  },
  nationality_id: {
    required: {
      value: true,
      message: 'nationality tidak boleh kosong',
    },
    maxLength: {
      value: 255,
      message: 'nationality terlalu panjang',
    },
  },
  ID_type: {
    required: {
      value: true,
      message: 'tipe identitas tidak boleh kosong',
    },
    maxLength: {
      value: 255,
      message: 'tipe identitas terlalu panjang',
    },
  },
  ID_number: {
    required: {
      value: true,
      message: 'ID Number tidak boleh kosong',
    },
    maxLength: {
      value: 255,
      message: 'ID Number terlalu panjang',
    },
  },
  gender: {
    required: {
      value: true,
      message: 'jenis kelamin tidak boleh kosong',
    },
    maxLength: {
      value: 255,
      message: 'jenis kelamin terlalu panjang',
    },
  },
  phone_number: {
    required: {
      value: true,
      message: 'Telepon tidak boleh kosong',
    },
    maxLength: {
      value: 255,
      message: 'Telepon terlalu panjang',
    },
  },
  email: {
    required: {
      value: true,
      message: 'email tidak boleh kosong',
    },
    maxLength: {
      value: 255,
      message: 'email terlalu panjang',
    },
  },
  address: {
    required: {
      value: true,
      message: 'alamat tidak boleh kosong',
    },
    maxLength: {
      value: 255,
      message: 'alamat terlalu panjang',
    },
  },
};
