export interface IUser {
	_id: string
	email: string
	password: string
	firstName: string
	lastName: string
}
export interface IUserDocument {
	passwordCompare(password: string): Promise<boolean>
	_doc: IUser
}
