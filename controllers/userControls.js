const User = require("../schemaModels/userSchmea")

module.exports.homePage = (req,res)=>{
    res.render('pages/home');
};
module.exports.createAccount = (req,res)=>{
    res.render('pages/createAccount');
};
module.exports.uploadAccount = async(req,res)=>{
    const user = new User(req.body);
    user.image = req.files.map(f=> ({url: f.path, filename: f.filename}));
    await user.save();
    res.redirect(`/${user._id}/profile`);
};
module.exports.showProfile = async(req,res)=>{
    const {id} = req.params;
    const user = await User.findById(id);
    res.render('pages/profile', {user});
};
module.exports.editProfile = async(req,res)=>{
    const {id} = req.params;
    const user = await User.findById(id);
    res.render('pages/editProfile', {user});
}
module.exports.putEditedProfile = async(req,res)=>{
    const {id} = req.params;
    const user = await User.findByIdAndUpdate(id, req.body);
    user.image = req.files.map(f=>({url: f.path, filename: f.filename}));
    await user.save();
    res.redirect(`/${user._id}/profile`);
}
module.exports.createBlog = (req,res)=>{
    res.render('pages/createBlog');
}