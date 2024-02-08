const bcrypt = require("bcryptjs");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const password = bcrypt.hashSync("123456");

const employeeData = [
  {
    name: "jurarat",
    position: "ผู้จัดการ",
    phone: "0626922817",
    address: "มหาสารคาม",
    email: "annyanny015@gmail.com",
    username: "anny",
    password,
  },
  {
    name: "phongphorn",
    position: "ฝ่ายขาย",
    phone: "0823145690",
    address: "กาฬสินธุ์",
    email: "big110@gmail.com",
    username: "big",
    password,
  },
  {
    name: "caty",
    position: "ฝ่ายจัดการยา",
    phone: "0930457889",
    address: "ขอนแก่น",
    email: "cat123@gmail.com",
    username: "cat",
    password,
  },
];

const memberData = [
  { name: "John Doe", phone: "0987654321", point: 50 },
  { name: "Jane Doe", phone: "0123456789", point: 30 },
];

const sale_detailData = [
  { detail: "Product A", sale_id: 1, medicine_id: 1, Amount: 5 },
  { detail: "Product B", sale_id: 2, medicine_id: 2, Amount: 3 },
];

const medicineData = [
  {
    name: "Medicine A",
    detail: "Description A",
    price: 50.0,
    stock: "In stock",
    unit: 30,
  },
  {
    name: "Medicine B",
    detail: "Description B",
    price: 75.0,
    stock: "Out of stock",
    unit: 20,
  },
];

const run = async () => {
  try {
    await prisma.employee.createMany({
      data: employeeData,
    });

    await prisma.sale.createMany({
      data: [
        {
          date: new Date("2024-02-01T17:54:39.351Z"),
          total: 100,
          discount: 10,
          memberId: 1,
          employeeId: 1,
        },
        {
          date: new Date("2024-02-01T17:54:39.351Z"),
          total: 200,
          discount: 20,
          memberId: 2,
          employeeId: 2,
        },
      ],
    });

    await prisma.member.createMany({
      data: memberData,
    });

    await prisma.sale_detail.createMany({
      data: sale_detailData,
    });

    await prisma.medicine.createMany({
      data: medicineData,
    });

    console.log("Seed successful");
  } catch (error) {
    console.error("Error during seeding:", error);
  } finally {
    await prisma.$disconnect();
  }
};

run();
