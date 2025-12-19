"use client"

type PostClientProps = {
  slug: string[]
}

export default function PostClient({ slug }: PostClientProps) {
  return <h1>{slug.join(" / ")}</h1>
}
