const ChatRoom = require('../models/chatroom')
const { find } = require('../models/user')


exports.createRoom = async (req,res)=>{
    try{
        const {name} = req.body
        const room =new ChatRoom({name})
        await room.save()
        res.status(200).send({message:'Chat room created successfully'})
    }catch(error){
        res.status(500).send({message:'Error creating chat room',error})
    }
}

exports.getRoom = async (req,res)=>{
    try{
        const room = await ChatRoom.find()
        res.status(200).send({message:'Chat room created successfully',room})
    }catch(error){
        res.status(500).send({message:'Error creating chat room',error})
    }
}