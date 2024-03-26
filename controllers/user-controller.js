const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const db = require("../models/db");


exports.getUsers = async (req, res, next) => {
    try {
        const users = await db.user.findMany();
        res.json(users);
    } catch (err) {
        next(err);
    }
};

exports.getUserById = async (req, res, next) => {
  try {
    const { id } = req.params;

    if (isNaN(id)) {
      return res.status(400).json({ error: "Invalid ID" });
    }

   
    const user = await db.user.findUnique({
      where: {
        id: parseInt(id),
      },
    });

   
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

 
    res.json(user);
  } catch (err) {
    next(err);
  }
};
exports.updateUser = (['admin'], async (req, res, next) => {
    const { id } = req.params;
    const data = req.body;
    try {
      const rs = await db.user.update(data, {
        where: { id: +id }
      });
      res.json({ msg: 'Update ok', result: rs });
    } catch (err) {
      next(err);
    }
  });


exports.deleteUser = async (req, res, next) => {
    const { id } = req.params;

    try {
      
        const user = await db.user.findUnique({
            where: {
                id: parseInt(id),
            },
        });

        if (!user) {
            return res.status(404).json({ message: "ไม่พบผู้ใช้" });
        }


        await db.user.delete({
            where: {
                id: parseInt(id),
            },
        });

        res.json({ message: "ลบผู้ใช้เรียบร้อยแล้ว" });
    } catch (err) {
        next(err);
    }
};