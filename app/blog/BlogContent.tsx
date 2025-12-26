"use client"

import { PostCard } from "@/components/post-card/page";
import { PostGridCard } from "@/components/post-grid-card/page";
import { Search } from "@/components/search/page";
import { allPosts } from "../../.velite/generated/content";
import { Inbox } from "lucide-react";
export const dynamic = "force-dynamic"
import { Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export type Author = {
  avatar: string;
  name: string;
};


export type Post = {
  title: string;
  description: string;
  date: string;
  slug: string;
  image: string;
  author: Author;
};
export function BlogContent() {
 const router = useRouter()
  const searchParams = useSearchParams()
  const query = searchParams.get("q") ?? ""
  const posts = query
    ? allPosts.filter((post) =>
        post.title.toLocaleLowerCase()?.includes(query.toLocaleLowerCase())
      )
    : allPosts;
    const hasPosts = posts?.length > 0;
    
    return (
      <main className="mx-auto w-full px-6">
      <Suspense fallback={<div className="h-10 w-72" />}>

        <header className="mb-16">
       <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
  <div className="flex flex-col gap-4">
    <span className="w-fit rounded-md bg-cyan-300 px-4 py-2 text-body-tag text-slate-900 font-semibold">
      main crops
    </span>
  </div>

  <div className="w-full sm:w-auto">
    <Search />
  </div>
</div>

        </header>

        {/* Conteúdo */}
        <section className="flex flex-col gap-8">


          {hasPosts && (
        <PostGridCard>
          {posts.map((post) => (
            <PostCard
              key={post.slug}
              title={post.title}
              description={post.description}
              date={new Date(post.date).toLocaleDateString('pt-BR')}
              slug={post.slug}
              image={post.image}
              author={{
                avatar: post.author.avatar,
                name: post.author.name,
              }}
            />
          ))}
        </PostGridCard>
      )}

      {!hasPosts && (
        <div className="container px-8">
          <div className="flex flex-col items-center justify-center gap-8 p-8 md:p-12 rounded-lg">
            <Inbox className="h-12 w-12 text-cyan-100" />

            <p className="text-gray-100 text-center">Nenhum post encontrado.</p>
          </div>
        </div>
      )}
        {/* <PostGridCard>
          {posts.map(post => (
              <PostCard
              key={post.slug}
              title={post.title}
              description={post.description}
              date={new Date(post.date).toLocaleDateString("pt-BR")}
              slug={post.slug}
              image={post.image}
              author={{
                  avatar: post.author.avatar,
                  name: post.author.name,
              }}
              />
          ))}
          </PostGridCard> */}

        </section>
        </Suspense>
      </main>
    )
}
