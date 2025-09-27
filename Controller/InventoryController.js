let InventoryList=[{id:1,name:'Sugar',weight:'1'},
    {id:2,name:'Tea',weight:'2'},
    {id:3,name:'wheat',weight:'31'}
]

exports.getInventory=(req,res)=>{
    res.status(200).json(InventoryList)
}
 exports.createInventory=(req,res)=>{
    const newInventory=req.body
    InventoryList.push(newInventory)
    res.status(201).json(InventoryList)
 }

 exports.updateInventory=(req,res)=>{
    const {id}=req.params
    const upInventory=InventoryList.find((b)=>b.id===parseInt(id))
    if(!upInventory){
        res.status(401).json({message:'not found'})
    }
    else{
        upInventory.name=req.body.name
        upInventory.weight=req.body.weight
        res.status(200).json(InventoryList)
    }
 }
 exports.patchInventory=(req,res)=>{
    const {id}=req.params
    const patchInventory=InventoryList.find((b)=>b.id==parseInt(id))
    if(!patchInventory){
         res.status(401).json({message:'not found'})
    }
    else{
        if(req.body.name!==undefined){
           patchInventory.name=req.body.name
           res.status(200).json(InventoryList)
        }
        if(req.body.weight!==undefined){
           paupblog.weight=req.body.weight
           res.status(200).json(InventoryList)
        }
    }
}

exports.deleteInventory=(req,res)=>{
    const {id}=req.params
 

    const index=InventoryList.findIndex((b)=>b.id==parseInt(id))
    if(index==-1){
        res.status(401).json({message:'not found'})
    }
    else{
      const deleted=  InventoryList.splice(index,1)
      res.status(401).json(deleted)
    }
}
