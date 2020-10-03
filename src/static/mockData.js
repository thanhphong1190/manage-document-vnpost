export const manageUserData = [
  {
    id: "123",
    name: "Trần Phong",
    username: "Phong",
    email: "thanhphong1190@gmail.com",
    phone: "0903642520",
    province_name: "Thừa Thiên Huế",
    department_name: "Phòng kinh doanh",
  },
];

export const ManageUserGroupData = [
  {
    id: 1,
    name: "Nhóm chỉ xem",
    user_group_role: ["Xem"],
    user_group_list: [
      {
        id: 1,
        name: "Phong Trần",
      },
      {
        id: 2,
        name: "Nguyễn Nam",
      },
    ],
  },
  {
    id: 1,
    name: "Nhóm xem và chia sẻ",
    user_group_role: ["Xem", "Chia sẻ"],
    user_group_list: [
      {
        id: 3,
        name: "Khoa Phạm",
      },
      {
        id: 4,
        name: "Huy Đặng",
      },
    ],
  },
];

export const RoleData = [
  { value: "admin", label: "Admin" },
  { value: "view", label: "Chỉ xem" },
  { value: "share", label: "Chia sẻ" },
  { value: "edit", label: "Chỉnh sửa" },
  { value: "remove", label: "Xóa" },
];

export const UserListData = [
    { value: 1, label: "Phong" },
    { value: 2, label: "Nam" },
    { value: 3, label: "Khoa" },
    { value: 4, label: "Huy" }
  ];