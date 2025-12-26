import { PostCard } from "@/components/post-card/page";
import { PostGridCard } from "@/components/post-grid-card/page";
import { Search } from "@/components/search/page";
import { allPosts } from "./../../.velite/generated/content";
import { Inbox } from "lucide-react";
import { Suspense } from "react";
import { BlogContent } from "./BlogContent";

export const dynamic = "force-dynamic";

export default function BlogPage() {
  return (
    <main className="mx-auto w-full px-6 py-24">
      <Suspense fallback={<div className="h-10 w-72" />}>
        <BlogContent />
      </Suspense>
    </main>
  );
}
