import type { Metadata } from 'next'
import Link from 'next/link'
import UnicornScene from 'unicornstudio-react/next'
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
      <div className="fixed inset-0 -z-10">
        <UnicornScene
          projectId="DQAxZZ5IK1QPCHyuQu3C"
          sdkUrl="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v2.1.3/dist/unicornStudio.umd.js"
          width="100%"
          height="100%"
        />
      </div>

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
