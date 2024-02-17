const db = require('../models/db')

exports.getByUser = async (req, res, next) => {
  try {
    const products = await db.product.findMany({
      where : { userId : req.user.id}
    })
    res.json({products})
  } catch (err) {
    next(err)
  }
}

exports.createProduct = async (req, res, next) => {
  const { name, detail, price, stock } = req.body;
  try {
    const rs = await db.product.create({
      data: {
        name: name,
        price: price,
        stock: stock,
        userId: req.user.id,
        detail: detail
      }
    })
    
      res.json({ msg: 'Create Success', result: rs });
  } catch (err) {
      next(err);
  }
};



exports.updateProduct = async (req, res, next) => {
    
    const { id } = req.params;
    const { name, detail, price,stock } = req.body;

    try {
      const updateData = {
        name: name,
        detail: detail,
        price: parseInt(price),
        stock: stock
      };

      const rs = await db.product.update({
        where: { id: +id, userId: req.user.id },
        data: updateData,
      });

      res.json({ msg: 'Update Success', result: rs });
    } catch(err) {
      next(err);
    }
  };

exports.deleteProduct = async (req,res,next)=>{
  const {id} = req.params
  try{
    const rs = await db.product.delete({where:{id : +id, userId: req.user.id}})
    res.json({msg: 'Delete Succes',result:rs})
  }catch(err){
    next(err)
  }
}