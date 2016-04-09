var AdminUserSchema = new mongoose.Schema({
	user_name:String,
	user_pass:String
});

var AdminUserModel = db.model('AdminUser', AdminUserSchema);

//var AdminUserEntity = new AdminUserModel();
