// src/app/posts/page.js
import PostList from "@/components/PostList";
import { getAllPosts } from "@/lib/posts";

export default async function PostsPage() {
  const posts = await getAllPosts(); // 마크다운 파일에서 게시글 목록 읽어오기

  return (
    <div className="animate-fadeInUp">
      <PostList posts={posts} />
    </div>
  );
}
