const User = require('../schemaModels/userSchmea');

module.exports.homePage = (req,res)=>{
    res.render('pages/home');
};
module.exports.createAccount = (req,res)=>{
    res.render('pages/createAccount');
};
module.exports.uploadAccount = async(req,res)=>{
    const {fname,lname, email,password,mobile,city,country}= req.body;
    const user = new User({fname,lname, email, password, mobile, city, country});
    await user.save();
    res.redirect(`/${user._id}/profile`);
};
module.exports.showProfile = async(req,res)=>{
    const {id} = req.params;
    const user = await User.findById(id);
    res.render('pages/profile', {user});
};