const express=require('express')
const router=express.Router()
const inventoryController=require("../Controller/InventoryController")
router.get('/',inventoryController.getInventory)
router.post('/',inventoryController.createInventory)
router.put('/:id',inventoryController.updateInventory)
router.patch('/:id',inventoryController.patchInventory)
router.delete('/:id',inventoryController.deleteInventory)
module.exports=router