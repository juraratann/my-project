const db = require('../models/db')

exports.getByUser = async (req, res, next) => {
    try {
      const members = await db.member.findMany({
        where : { userId : req.user.id}
      })
      res.json({members})
    } catch (err) {
      next(err)
    }
  }
  
  exports.createMember = async (req, res, next) => {
    const data = req.body;
    try {
      
      data.point = parseInt(data.point);
  
      const rs = await db.member.create({
        data: { ...data, userId: req.user.id }
      });
      res.json({ msg: 'Create OK', result: rs });
    } catch (err) {
      next(err);
    }
  }
  
  
  exports.updateMember = async (req, res, next) => {
    const {id} = req.params
    const data = req.body
    try {
      const rs = await db.member.update({
        data :  {...data},
        where: { id : +id , userId : req.user.id} 
      })
      res.json({msg: 'Update ok', result: rs})
    }catch(err){
      next(err)
    }
  }
  
  exports.deleteMember = async (req, res, next) => {
    const {id} = req.params
    try {
      const rs = await db.product.delete({ where : {id : +id, userId: req.user.id}})
      res.json({msg: 'Delete ok', result : rs})
    }catch(err) {
      next(err)
    }
  }

  exports.getAllStatus = async (req, res, next) => {
    res.json({status: Object.values(Status)})
  }