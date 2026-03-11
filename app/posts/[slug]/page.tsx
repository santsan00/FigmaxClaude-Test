import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getAllPosts, getPostBySlug } from '@/lib/posts'

export function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata(
  props: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await props.params
  try {
    const post = await getPostBySlug(slug)
    return {
      title: post.title,
      description: post.excerpt,
    }
  } catch {
    return {}
  }
}

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export default async function PostPage(
  props: { params: Promise<{ slug: string }> }
) {
  const { slug } = await props.params

  let post
  try {
    post = await getPostBySlug(slug)
  } catch {
    notFound()
  }

  return (
    <article>
      <header className="mb-10">
        <time
          dateTime={post.date}
          className="text-sm text-gray-400 font-mono"
        >
          {formatDate(post.date)}
        </time>
        <h1 className="mt-2 text-3xl font-bold tracking-tight leading-snug">
          {post.title}
        </h1>
        <p className="mt-3 text-gray-500 text-base leading-relaxed">
          {post.excerpt}
        </p>
        <hr className="mt-8 border-gray-100" />
      </header>

      <div
        className="prose prose-gray prose-sm sm:prose-base max-w-none
                   prose-headings:font-semibold
                   prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline
                   prose-code:bg-gray-100 prose-code:px-1 prose-code:rounded
                   prose-pre:bg-gray-100 prose-pre:text-gray-900"
        dangerouslySetInnerHTML={{ __html: post.contentHtml }}
      />
    </article>
  )
}
