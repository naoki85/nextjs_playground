import { Article } from '@/types';
import ArticleList from "@/components/ArticleList";

async function getArticles() {
  const res = await fetch("http://localhost:3000/api/articles", {
    cache: "no-store"
  });

  if (!res.ok) {
    throw new Error("Failed to fetch articles");
  }

  const data = await res.json();
  return data.articles as Article[];
}

export default async function Home() {
  const articles = await getArticles();

  return (
    <div>
      <h1>新着記事</h1>
      <ArticleList articles={articles} />
    </div>
  )
}
