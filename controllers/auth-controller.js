const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken')
const db = require("../models/db");

exports.register = async (req, res, next) => {
  const { username, password, email } = req.body;
  try {
    // validation
    if (!(username && password)) {
      return next(new Error("Fulfill all inputs"));
    }
    if (confirmPassword !== password) {
      throw new Error("password not match");
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    console.log(hashedPassword);
    const data = {
      name,
      lname,
      phone,
      address,
      email,
      username,
      password: hashedPassword,
    };

    const rs = await db.employee.create({ data  })
    console.log(rs)

    res.json({ msg: 'Register successful' })
  } catch (err) {
    next(err);
  }
};

exports.login = async (req, res, next) => {
  const {username, password} = req.body
  try {
    // validation
    if( !(username.trim() && password.trim()) ) {
      throw new Error('username or password must not blank')
    }
    // find username in db.user
    const employee = await db.employee.findFirstOrThrow({ where : { username }})
    // check password
    const pwOk = await bcrypt.compare(password, employee.password)
    if(!pwOk) {
      throw new Error('invalid login')
    }
    // issue jwt token 
    const payload = { id: employee.id }
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: '30d'
    })
    console.log(token)
    res.json({token : token})
  }catch(err) {
    next(err)
  }
};

exports.getme = (req,res,next) => {
  res.json(req.employee)
}