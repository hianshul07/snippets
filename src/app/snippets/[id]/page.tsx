import db from '@/db';
import { notFound } from 'next/navigation';

interface Props {
	params: {
		id: string;
	};
}

const SnippetShowpage = async (props: Props) => {
	const snippet = await db.snippet.findFirst({
		where: {
			id: parseInt(props.params.id),
		},
	});

  if(!snippet) {
    return notFound()
  }

	return <div>{snippet.title}</div>;
};
export default SnippetShowpage;
