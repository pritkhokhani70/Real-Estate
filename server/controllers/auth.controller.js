import User from '../models/user.model.js'
import bcrypt from 'bcryptjs'

export const singnup = async(req, res) => {
  const { username, email, password } = req.body;
  const hashedpassword = await bcrypt.hashSync(password, 10);
  const newUsesr = new User({ username, email, password:hashedpassword });
  try {
    await newUsesr.save();
    res.status(201).json("User created successfully!");  
  } catch (error) {
    res.status(500).json(error.massage)
  }
};