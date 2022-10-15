import User from "./user.schema"
import { IUser } from "./user.types"

const userService = {
	async findUserbyEmail(user: IUser) {
		const { email } = user
		return await User.findOne({ email })
	},

	async findUserbyId(id: string) {
		return await User.findById(id)
	},

	async createUser(user: IUser) {
		const checkUser = await this.findUserbyEmail(user)
		if (checkUser) {
			return false
		}

		const newUser = new User(user)
		await newUser.save()

		const { password, ...others } = newUser._doc
		return others
	},

	async updateUser(user: IUser) {
		const { email } = user
		return await User.findOneAndUpdate({ email }, user)
	},

	async deleteUser(user: IUser) {
		const { _id } = user
		return await User.findByIdAndDelete(_id)
	},

	async getAllUsers() {
		return await User.find().select("-password")
	},
}
export default userService
