import bcrypt from "bcrypt"
import mongoose, { Model, Schema } from "mongoose"
import { IUserDocument } from "./user.types"

export const userSchema: Schema = new Schema(
	{
		email: {
			type: String,
			required: true,
			unique: true,
		},
		password: {
			type: String,
			required: true,
		},
		firstName: {
			type: String,
			required: true,
		},
		lastName: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true }
)

userSchema.pre("save", async function (next) {
	try {
		if (this.isModified("password"))
			this.password = await bcrypt.hash(this.password, 13)
		next()
	} catch (e) {
		console.error(`error while hashing the password !\n${e}`)
	}
})

userSchema.methods.passwordCompare = async function (password: string) {
	return await bcrypt.compare(password, this.password)
}
const User: Model<IUserDocument> = mongoose.model<IUserDocument>(
	"User",
	userSchema
)
export default User
