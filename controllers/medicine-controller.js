const { medicine } = require('../models/db')
const db = require('../models/db')

// ฟังก์ชันสำหรับการดึงข้อมูลยาของผู้ใช้ที่ล็อกอิน
exports.getByUser = async (req, res, next) => {
  try {
    const medicine = await db.medicine.findMany({
      where : { userId : req.user.id }
    })
    res.json({ medicine }) // ส่งข้อมูลยากลับไปในรูปแบบ JSON
  } catch (err) {
    next(err) // ส่ง error ไปยัง middleware ถัดไปในลำดับการทำงาน
  }
}

// ฟังก์ชันสำหรับการสร้างข้อมูลยาใหม่
exports.createMedicine = async(req, res, next) => {
  // ตรวจสอบข้อมูลที่ส่งมาใน req.body
  const data = { name, detail, price, stock, unit } = req.body
  try {
    const rs = await db.medicine.create({
      data: {
        name: name,
        detail: detail,
        price: parseInt(price),
        stock: stock,
        unit: unit,
        userId: req.user.id // เพิ่ม userId ของผู้ใช้ที่ล็อกอินเข้าไปในข้อมูล
      }
    });
    res.json({ msg: 'สร้างข้อมูลเรียบร้อย', result: rs }) // ส่ง JSON response กลับไปยัง client
  } catch (err) {
    next(err)
  }
}

// ฟังก์ชันสำหรับการอัปเดตข้อมูลยา
exports.updateMedicine = async (req, res, next) => {
  const { id } = req.params // รับค่า id ที่ต้องการอัปเดตจาก req.params
  const data = { name, detail, price, stock, unit } = req.body
  try {
    const rs = await db.medicine.update({
      data: {
        name: name,
        detail: detail,
        price: parseInt(price),
        stock: stock,
        unit: unit,
        userId: req.user.id // เพิ่ม userId ของผู้ใช้ที่ล็อกอินเข้าไปในข้อมูล
      },
      where: { id: +id, userId: req.user.id } // ตรวจสอบว่าผู้ใช้ที่ล็อกอินเป็นเจ้าของข้อมูล
    })
    res.json({ msg: 'อัปเดตข้อมูลเรียบร้อย', result: rs })
  } catch (err) {
    next(err)
  }
}

// ฟังก์ชันสำหรับการลบข้อมูลยา
exports.deleteMedicine = async (req, res, next) => {
  const { id } = req.params // รับค่า id ที่ต้องการลบจาก req.params
  try {
    const rs = await db.medicine.delete({ where: { id: +id, userId: req.user.id } }) // ตรวจสอบว่าผู้ใช้ที่ล็อกอินเป็นเจ้าของข้อมูล
    res.json({ msg: 'ลบข้อมูลเรียบร้อย', result: rs })
  } catch (err) {
    next(err)
  }
}
