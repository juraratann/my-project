// const prisma = require("../models/db");
// const createError = require("../utils/createError");
// const userService = require("../services/user-service");
// const bcrypt = require("bcryptjs");
// const { v4: uuidv4 } = require('uuid');
// const { createSaleSchema } = require("../validator/admin-validator");

// exports.createSale = async (req, res, next) => {
//   try {
//     const value = await createSaleSchema.validateAsync(req.body);
//     if (typeof value !== "object") {
//       return createError(400, "เกิดข้อผิดพลาดบางอย่าง");
//     }
//     await prisma.sale.create({
//       data: {
//         ...value,
//       },
//     });
//     res.json({ message: "สร้างรายการขายสำเร็จ" });
//   } catch (err) {
//     next(err);
//   }
// };

// exports.updateSale = async (req, res, next) => {
//   try {
//     const { saleId } = req.params; 
//     const value = await updateSaleSchema.validateAsync(req.body); 

//     await prisma.sale.update({
//       where: {
//         id: Number(saleId),
//       },
//       data: {
//         ...value,
//       },
//     });

//     res.json("อัปเดตรายการขายสำเร็จ");
//   } catch (err) {
//     next(err);
//   }
// };

// exports.deleteSale = async (req, res, next) => {
//   try {
//     const { saleId } = req.params; 

//     await prisma.sale.delete({
//       where: {
//         id: Number(saleId),
//       },
//     });

//     res.json("ลบรายการขายสำเร็จ");
//   } catch (err) {
//     next(err);
//   }
// };

// exports.createMember = async (req, res, next) => {
//   try {
//     const { name } = req.body;
//     const member = await prisma.member.create({
//       data: {
//         name,
//       },
//     });
//     res.json({ member });
//   } catch (err) {
//     next(err);
//   }
// };

// exports.createMedicine  = async (req, res, next) => {
//   try {
//     res.json({ message: "สร้างยาสำเร็จ" });
//   } catch (err) {
//     next(err);
//   }
// };

// exports.adminGetData = async (req, res, next) => {
//   try {
//     const { data } = req.params;
//     const result = await userService.getAdminAllData(data);
//     res.json(result);
//   } catch (err) {
//     next(err);
//   }
// };

// exports.adminGetDataOne = async (req, res, next) => {
//   try {
//     const { data, find, ref } = req.params;
//     const result = await userService.getAdminAllData(data, find, ref, Number);
//     res.json(result);
//   } catch (err) {
//     next(err);
//   }
// };
