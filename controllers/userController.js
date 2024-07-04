const User = require('../models/user')
const jws = require('jsonwebtoken')


exports.reqister = async (req, res)=>{
    try{
        const {username, password}= req.body,
        const user = new User({username, password})
        await user.save()
        res.status(201).send({message:'User registered successfully'})
    }catch(error){
        res.status(400).send({message:'User not registered', error})
    }
}

exports.login = async (req,res)=>{
    try{
        const {username, password}= req.body;
        const user = await User.findOne({username})
        if(!user || !(await bcrypt.compare(password, user.password))){
            return res.status(400).send({message: 'Invalid credentials'})
        }
        const token = jwt.sign({userId: user_id}, 'your_jwt_secret', { expiresIn: '1h' });
        res.status(200).send({token})
    }catch(error){
        res.status(400).send({message: 'Invalid credentials', error})
    }
}