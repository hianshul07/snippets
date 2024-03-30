import db from '@/db';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface Props {
	params: {
		id: string;
	};
}

const SnippetShowPage = async (props: Props) => {
	const snippet = await db.snippet.findFirst({
		where: {
			id: parseInt(props.params.id),
		},
	});

	if (!snippet) {
		return notFound();
	}

	return (
		<div>
			<div className='flex justify-between m-4 items-center'>
				<h1 className='text-xl font-bold'>{snippet.title}</h1>
				<div className='flex gap-4'>
					<Link href={`/snippets/${snippet.id}/edit`} className='p-2 border rounded'>Edit</Link>
					<button className='p-2 border rounded'>Delete</button>
				</div>
			</div>
			<pre className='bg-gray-200 border-gray-200 p-4 border rounded'>
				<code>{snippet.code}</code>
			</pre>
		</div>
	);
};
export default SnippetShowPage;
