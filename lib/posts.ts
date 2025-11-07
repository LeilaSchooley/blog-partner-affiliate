import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

export type PostMeta = {
  slug: string;
  title: string;
  date: string;
  excerpt?: string;
  cover?: string;
};

export type Post = PostMeta & { contentHtml: string };

const postsDir = path.join(process.cwd(), "content", "posts");

export function getAllPostsMeta(): PostMeta[] {
  const files = fs.readdirSync(postsDir);
  const posts = files
    .filter((f) => f.endsWith(".md"))
    .map((file) => {
      const raw = fs.readFileSync(path.join(postsDir, file), "utf8");
      const { data } = matter(raw);
      const slug = (data.slug as string) ?? file.replace(/\.md$/, "");
      return {
        slug,
        title: String(data.title ?? slug),
        date: String(data.date ?? ""),
        excerpt: data.excerpt as string | undefined,
        cover: data.cover as string | undefined,
      };
    })
    .sort((a, b) => (a.date > b.date ? -1 : 1));
  return posts;
}

export async function getPostBySlug(slug: string): Promise<Post> {
  const file = path.join(postsDir, `${slug}.md`);
  const raw = fs.readFileSync(file, "utf8");
  const { data, content } = matter(raw);
  const processed = await remark().use(html).process(content);
  return {
    slug,
    title: String(data.title ?? slug),
    date: String(data.date ?? ""),
    excerpt: data.excerpt as string | undefined,
    cover: data.cover as string | undefined,
    contentHtml: String(processed),
  };
}
