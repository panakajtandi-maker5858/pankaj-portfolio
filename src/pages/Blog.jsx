import { useRef } from "react";
import useReveal from "../hooks/useReveal";
import "../styles/blog.css";

//  Blog Posts Data 
const posts = [
  {
    date: "Jun 2025",
    title: "Why I stopped fighting CSS and started thinking in layout",
    excerpt:
      "Most developers hate CSS because they never learned to think spatially. Here's what changed for me.",
  },
  {
    date: "May 2025",
    title: "The MERN stack in 2025 — still worth it?",
    excerpt:
      "Everyone's talking about new frameworks. I spent 2 years in MERN. Here's my honest take.",
  },
  {
    date: "Apr 2025",
    title: "Sending emails from Node.js without losing your mind",
    excerpt:
      "Nodemailer looks simple until it isn't. Here's everything I learned the hard way.",
  },
];

//  Blog Component 
function Blog() {
  const ref = useRef(null);
  useReveal(ref);

  return (
    <section id="blog" ref={ref}>

      <p className="section-label reveal">Thoughts & takes</p>

      <h2 className="section-heading reveal" data-delay="80">
        <span className="section-num">04.</span>Writing
      </h2>

      <p className="section-sub reveal" data-delay="120">
        Stuff I think about
      </p>

      {/* Blog cards list */}
      <div className="blog-list">
        {posts.map((post, i) => (
          <div
            key={post.title}
            className="blog-card reveal"
            data-delay={`${180 + i * 100}`}
          >
            <p className="blog-meta">{post.date}</p>
            <h3 className="blog-title">{post.title}</h3>
            <p className="blog-excerpt">{post.excerpt}</p>
          </div>
        ))}
      </div>

    </section>
  );
}

export default Blog;