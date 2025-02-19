// src/app/posts/[slug]/page.js
import { notFound } from "next/navigation";
import { getPostData, markdownToHtml, getAllPosts } from "@/lib/markdown";

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function PostPage(props) {
  // await를 사용하여 params 객체를 안전하게 받아옵니다.
  const params = await Promise.resolve(props.params);
  const { slug } = params;

  const { data, content } = getPostData(`${slug}.md`);

  if (!data) {
    notFound();
  }

  const contentHtml = await markdownToHtml(content);

  return (
    <article className="prose prose-invert mx-auto py-12 animate-fadeInUp">
      <h1>{data.title}</h1>
      <p className="text-gray-500">{data.date}</p>
      <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </article>
  );
}
