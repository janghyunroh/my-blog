"use client";

import Link from "next/link";

export default function PostList({ posts }) {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">Blog Posts</h1>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/posts/${post.slug}`}
              className="block border border-gray-300 dark:border-gray-700 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {new Date(post.date).toLocaleDateString()}
              </p>
              {post.excerpt && (
                <p className="mt-4 text-gray-700 dark:text-gray-300">{post.excerpt}</p>
              )}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
