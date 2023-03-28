const express=require('express')
const router=express.Router()
const authorizations=require('../../middleware/tokenVerification')
const {Schedual}=require('../../models/User')


router.get('/',authorizations, async (req,res)=>{
  const scheduals=await Schedual.find()
  res.status(200).send(scheduals)
})

router.get('/:id',authorizations,async (req,res)=>{
  const schedual=await Schedual.findById(req.params.id)
  res.send(schedual)
})

router.post('/',authorizations,async (req,res)=>{
 try{
    const schedual=await new Schedual({
       title:req.body.title,
       time: req.body.time,
       description: req.body.description
    })
    schedual.save()
    res.send(schedual)
 }catch(error){
    return res.status(500).send(error)
 }
})



router.put('/:id',authorizations, async (req, res) => {
  try {
    const schedual = await Schedual.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (schedual) {
      res.json(schedual);
    } else {
      res.status(404).json({ message: 'Schedual not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error updating Schedual' });
  }
});

router.delete('/:id',authorizations, async (req, res) => {
  try {
    const schedual = await Schedual.findByIdAndDelete(req.params.id);
    if (schedual) {
      res.json({message:'Schedual deleted'});
    } else {
      res.status(404).json({ message: 'Schedual not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error while deleting Schedual' });
  }
});

module.exports=router