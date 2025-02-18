// src/app/posts/[slug]/page.js
import { notFound } from 'next/navigation';
import { getPostData, markdownToHtml } from '@/lib/markdown';

export async function generateStaticParams() {
  // posts 디렉토리 내 모든 마크다운 파일의 slug 목록을 반환
  // 예: ['post1', 'post2', ...]
}

export default async function PostPage({ params }) {
  const { slug } = params;
  const post = getPostData(`${slug}.md`);
  if (!post) {
    notFound();
  }
  const contentHtml = await markdownToHtml(post.content);

  return (
    <article className="prose mx-auto py-10">
      <h1>{post.data.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </article>
  );
}
