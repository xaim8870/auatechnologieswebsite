// src/pages/BlogPost.tsx
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import MarkdownRenderer from "../components/MarkdownRender";
import { Calendar, User, ArrowLeft } from "lucide-react";

interface BlogMeta {
  title: string;
  date: string;
  author: string;
  cover?: string;
}

const BlogPost = () => {
  const { slug } = useParams();
  const [content, setContent] = useState<string>("");
  const [meta, setMeta] = useState<BlogMeta>({
    title: "",
    date: "",
    author: "",
    cover: "",
  });

  // ✅ Fetch Markdown content (simpler & safer than import)
  useEffect(() => {
    fetch(`/src/pages/blogdata/${slug}.md`)
      .then((res) => {
        if (!res.ok) throw new Error("Not found");
        return res.text();
      })
      .then((text) => {
        // 🧩 Extract metadata from markdown frontmatter
        const metaMatch = text.match(/---([\s\S]*?)---/);
        if (metaMatch) {
          const yaml = metaMatch[1];
          const metaData: BlogMeta = {
            title: yaml.match(/title:\s*(.+)/)?.[1]?.trim() ?? "Untitled",
            date: yaml.match(/date:\s*(.+)/)?.[1]?.trim() ?? "",
            author: yaml.match(/author:\s*(.+)/)?.[1]?.trim() ?? "Admin",
            cover: yaml.match(/cover:\s*(.+)/)?.[1]?.trim() ?? "",
          };
          setMeta(metaData);
          setContent(text.replace(metaMatch[0], "").trim());
        } else {
          setContent(text);
        }
      })
      .catch(() => setContent("# 404\nBlog not found."));
  }, [slug]);

  return (
    <section className="min-h-screen bg-gray-50 dark:bg-gray-950 py-20 px-6 text-gray-900 dark:text-gray-100">
      <div className="max-w-4xl mx-auto">

        {/* 🔙 Back link */}
        <Link
          to="/blogs"
          className="flex items-center text-orange-600 font-semibold hover:underline mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Blogs
        </Link>

        {/* 🖼️ Blog Cover Image */}
        {meta.cover && (
          <div className="mb-10">
            <img
              src={meta.cover}
              alt={meta.title}
              className="w-full h-80 object-cover border border-gray-200 dark:border-gray-700 shadow-sm"
            />
          </div>
        )}

        {/* 🧠 Blog Header */}
        <div className="mb-10 border-b border-gray-200 dark:border-gray-700 pb-6">
          <h1 className="text-3xl md:text-4xl font-extrabold text-blue-900 dark:text-white leading-snug mb-4">
            {meta.title || "Loading..."}
          </h1>

          <div className="flex items-center gap-6 text-sm text-gray-600 dark:text-gray-400">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4 text-orange-600" />
              <span>{meta.author || "Admin"}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-orange-600" />
              <span>{meta.date || "Date Unavailable"}</span>
            </div>
          </div>
        </div>

        {/* 📝 Blog Content */}
        <article className="prose prose-lg dark:prose-invert max-w-none leading-relaxed">
          <MarkdownRenderer content={content} />
        </article>

        {/* 📣 Footer CTA */}
        <div className="mt-16 border-t border-gray-200 dark:border-gray-700 pt-10 text-center">
          <h3 className="text-2xl font-bold text-blue-900 dark:text-white mb-4">
            Enjoyed this Article?
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Explore more insights on AI, Software, and Innovation — or get in
            touch for collaborations.
          </p>
          <Link
            to="/contact"
            className="px-8 py-3 text-lg font-semibold bg-orange-600 text-white hover:bg-orange-700 transition-all duration-300"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogPost;
