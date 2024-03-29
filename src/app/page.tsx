import db from '@/db';

const Homepage = async () => {
	const snippets = await db.snippet.findMany();

  const renderedSnippets = snippets.map(snippet => {
    return(
      <div key={snippet.id}>
        {snippet.title}
        <br />
        {snippet.code}
      </div>
    )
  })
	return <div className='font-semibold text-4xl my-4'>{renderedSnippets}</div>;
};
export default Homepage;

