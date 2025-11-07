import Link from "next/link";
import { getAllPostsMeta, type PostMeta } from "@/lib/posts";

export const dynamic = "error";

export default function BlogIndex() {
  const posts: PostMeta[] = getAllPostsMeta();
  return (
    <main className="container-px mx-auto max-w-screen py-16">
      <h1 className="h1">Blog</h1>
      <p className="p mt-3">News and insights from the Fundex team.</p>
      <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((p: PostMeta) => (
          <article key={p.slug} className="card p-6 flex flex-col">
            <div className="text-xs text-subt">
              {new Date(p.date).toLocaleDateString()}
            </div>
            <h2 className="mt-2 text-xl font-bold">{p.title}</h2>
            <p className="p mt-2 line-clamp-3">{p.excerpt}</p>
            <Link
              className="button mt-5 w-fit"
              href={`/blog/${p.slug}` as const}
            >
              Read more
            </Link>
          </article>
        ))}
      </div>
    </main>
  );
}
