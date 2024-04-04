'use server';

import db from '@/db';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { useFormState } from 'react-dom';

const createSnippet = async (
	formState: { message: string },
	formData: FormData
) => {
	try {
		const title = formData.get('title');
		const code = formData.get('code');

		if (typeof title !== 'string' || title.length < 2) {
			return {
				message: 'The title must be longer',
			};
		}

		if (typeof code !== 'string' || code.length < 2) {
			return {
				message: 'The code must be longer',
			};
		}

		await db.snippet.create({
			data: {
				title,
				code,
			},
		});
	} catch (err: unknown) {
		if (err instanceof Error) {
			return {
				message: err.message,
			};
		} else {
			return {
				message: 'Something went wrong',
			};
		}
	}

	revalidatePath('/')
	redirect('/');
};

const editSnippet = async (id: number, code: string) => {
	await db.snippet.update({
		where: { id },
		data: { code },
	});

	redirect(`/snippets/${id}`);
};

const deleteSnippet = async (id: number) => {
	await db.snippet.delete({
		where: { id },
	});

	revalidatePath('/')
	redirect(`/`);
};

export { createSnippet, editSnippet, deleteSnippet };
