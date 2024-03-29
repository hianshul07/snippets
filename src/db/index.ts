import { PrismaClient } from '@prisma/client';

const db = new PrismaClient();

// db.snippet.create({
// 	data: {
// 		title: 'hehe',
// 		code: 'const hehe = () => {}',
// 	},
// });

export default db;
