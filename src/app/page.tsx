import db from '@/db';
import Link from 'next/link';

const Homepage = async () => {
	const snippets = await db.snippet.findMany();

	const renderedSnippets = snippets.map((snippet) => {
		return (
			<Link
				href={`/snippets/${snippet.id}`}
				key={snippet.id}
				className='flex rounded bg-blue-200 justify-between  p-2 border'
			>
				<div>{snippet.code}</div>
				<div>view</div>
			</Link>
		);
	});
	return (
		<div>
			<div className='flex justify-between items-center my-4'>
				<h1 className='font-semibold text-4xl'>Snippets</h1>
				<Link href={`snippets/new`} className='border rounded p-2'>
					New
				</Link>
			</div>
			<div className='flex flex-col gap-2'>{renderedSnippets}</div>
		</div>
	);
};
export default Homepage;

