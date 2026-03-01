import type { Metadata } from 'next'
import Link from 'next/link'
import { getAllPosts } from '@/lib/posts'

export const metadata: Metadata = {
  title: 'Home',
  description: 'All posts.',
}

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export default function HomePage() {
  const posts = getAllPosts()

  return (
    <div>
      <h1 className="text-3xl font-bold tracking-tight mb-10">All Posts</h1>

      {posts.length === 0 && (
        <p className="text-gray-500">No posts yet.</p>
      )}

      <ul className="space-y-10">
        {posts.map((post) => (
          <li key={post.slug} className="group">
            <Link href={`/posts/${post.slug}`} className="block">
              <time
                dateTime={post.date}
                className="text-sm text-gray-400 font-mono"
              >
                {formatDate(post.date)}
              </time>
              <h2 className="mt-1 text-xl font-semibold group-hover:underline underline-offset-4">
                {post.title}
              </h2>
              <p className="mt-1 text-gray-600 text-sm leading-relaxed">
                {post.excerpt}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
