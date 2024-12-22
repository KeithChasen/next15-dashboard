import { hashSync } from 'bcrypt';

const users = [
	{
		id: '4321-1234-4321-1234',
		name: 'User',
		email: 'user@example.com',
		password: hashSync('123456', 10),
	},
];

export { users };
