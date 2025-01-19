import rehypeAutolinkHeadings from "rehype-autolink-headings"
import rehypeCodeTitles from "rehype-code-titles"
import rehypeKatex from "rehype-katex"
import rehypePrismPlus from "rehype-prism-plus"
import rehypeSlug from "rehype-slug"
import remarkGfm from "remark-gfm"

export const plugins = {
  rehypePlugins: [
    rehypeAutolinkHeadings,
    rehypeCodeTitles,
    rehypeKatex,
    rehypePrismPlus,
    rehypeSlug,
  ],
  remarkPlugins: [
    remarkGfm,
  ],
}