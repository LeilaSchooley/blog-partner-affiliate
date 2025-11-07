import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { getAllPostsMeta, getPostBySlug, type PostMeta } from "@/lib/posts";

export async function generateStaticParams() {
  return getAllPostsMeta().map((p: PostMeta) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const meta = getAllPostsMeta().find((p: PostMeta) => p.slug === params.slug);
  if (!meta) return {};
  return { title: `${meta.title} — Fundex Blog`, description: meta.excerpt };
}

export default async function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  try {
    const post = await getPostBySlug(params.slug);
    return (
      <main className="container-px mx-auto max-w-screen py-16">
        <Link href="/blog" className="text-subt">
          ← Back to blog
        </Link>
        <h1 className="h1 mt-4">{post.title}</h1>
        <div className="text-sm text-subt mt-2">
          {new Date(post.date).toLocaleDateString()}
        </div>
        {post.cover && (
          <img
            src={post.cover}
            alt=""
            className="mt-8 w-full rounded-xl border border-white/5"
          />
        )}
        <article
          className="prose prose-invert max-w-none mt-8"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />
      </main>
    );
  } catch (e) {
    notFound();
  }
}
