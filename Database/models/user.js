export default (sequelize, DataTypes) => {
	const User = sequelize.define(
		'user',
		{
			username: DataTypes.STRING,
			password: DataTypes.STRING,
		},
		{
			freezeTableName: true,
		}
	);

	User.sync().then((data) => {
		console.log("synced sucessfully", data)
	}).catch((err) => {
		console.log(err)
	})

	return User;
};
