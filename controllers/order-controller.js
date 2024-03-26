const db = require('../models/db')

exports.getByUser = async (req, res, next) => {
    try {
      const orders = await db.order.findMany({
        where : { userId : req.user.id}
      })
      res.json({orders})
    } catch (err) {
      next(err)
    }
  }
  
  exports.createOrder = async (req, res, next) => {
    const data = req.body;
    try {
      
      data.amount = parseInt(data.amount);
  
      const rs = await db.order.create({
        data: { ...data, userId: req.user.id }
      });
      res.json({ msg: 'Create OK', result: rs });
    } catch (err) {
      next(err);
    }
  }
  
  
  exports.updateOrder = async (req, res, next) => {
    const {id} = req.params
    const data = req.body
    try {
      const rs = await db.order.update({
        data :  {...data},
        where: { id : +id , userId : req.user.id} 
      })
      res.json({msg: 'Update ok', result: rs})
    }catch(err){
      next(err)
    }
  }
  
  exports.deleteOrder = async (req, res, next) => {
    const {id} = req.params
    try {
      const rs = await db.order.delete({ where : {id : +id, userId: req.user.id}})
      res.json({msg: 'Delete ok', result : rs})
    }catch(err) {
      next(err)
    }
  }

  