'use client';

import type { Snippet } from '@prisma/client';
import { Editor } from '@monaco-editor/react';
import { useState } from 'react';
import {editSnippet} from '@/actions/action';

interface Props {
	snippet: Snippet;
}

const SnipptEditForm = ({ snippet }: Props) => {
	const [code, setCode] = useState(snippet.code);
	const handleEditorChange = (value: string = '') => {
		setCode(value);
	};

	const snippetEditAction = editSnippet.bind(null, snippet.id, code);

	return (
		<div>
			<Editor
				height='40vh'
				theme='vs-dark'
				defaultLanguage='typescript'
				defaultValue={snippet.code}
				options={{ minimap: { enabled: false } }}
				onChange={handleEditorChange}
			/>
			<form action={snippetEditAction}>
				<button type='submit' className='p-2 border rounded'>
					Edit
				</button>
			</form>
		</div>
	);
};
export default SnipptEditForm;
