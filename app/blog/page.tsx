import notFound from '../not-found';

// Server component

async function getPosts(): Promise<Post[]> {
  // const response = await fetch('https://jsonplaceholder.typicode.com/posts'); //getStaticProps
  // const response = await fetch('https://jsonplaceholder.typicode.com/posts', { cache: 'no-store' }); //getServerSideProps
  const response = await fetch('https://jsonplaceholder.typicode.com/posts', { next: { revalidate: 60 } }); //incrementalStaticRegeneration
  const posts = await response.json() as Post[];

  return posts;
}

export default async function Blog() {
  const posts = await getPosts();

  if (!posts) return notFound();

  return (
    <>
      <h1>This is my blog!</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </>
  )
}

type Post = {
  id: number;
  title: string;
}