// Define app constants

export const HTTP_STATUS_CODE = {
  OK: 200,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  SERVER_ERROR: 500,
};

export const PAGE_SIZE = 10;

export const TIME_PERIOD = [
  {
    value: "12-2019 (01-12-2019)",
    label: "12-2019 (01-12-2019)",
    name: "timePeriod",
  },
  {
    value: "11-2019 (01-11-2019)",
    label: "11-2019 (01-11-2019)",
    name: "timePeriod",
  },
  {
    value: "10-2019 (01-10-2019)",
    label: "11-2019 (01-11-2019)",
    name: "timePeriod",
  },
];

export const SIDE_BAR = [
  {
    id: "home",
    key: "home",
    icon: "fa fa-book",
    text: "Trang chủ",
  },
  {
    id: "manage-user",
    key: "manage-user",
    icon: "fa fa-user-plus",
    text: "Người dùng",
  },
  {
    id: "manage-user-group",
    key: "manage-user-group",
    icon: "fa fa-users",
    text: "Nhóm user",
  },
  {
    id: "settings",
    key: "settings",
    icon: "fa fa-cogs",
    text: "Tùy chỉnh",
  },
];

export const PHONE_REGEX = /^[+|0][0-9]{9,15}$/;
export const EMAIL_REGEX = /\S+@\S+\.\S+/;
