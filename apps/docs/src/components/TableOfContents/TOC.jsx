"use client";

import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from "react";

export function Heading({ as: Component, children }) {
  const id = children.replace(/\s+/g, "-").toLowerCase();
  return (
    <Component id={id}>
      <a href={`#${id}`} className="no-underline mb-6">
        {children}
      </a>
    </Component>
  );
}

export const TableOfContents = () => {
  const [headings, setHeadings] = useState([]);
  const pathname = usePathname()

  useEffect(() => {
    const collectedHeadings = Array.from(
      document.querySelectorAll("h1, h2, h3")
    ).map((heading) => ({
      id: heading.id || heading.innerText.replace(/\s+/g, "-").toLowerCase(),
      text: heading.innerText,
      level: Number(heading.tagName[1]), // h1 -> 1, h2 -> 2, ...
    }));

    setHeadings(collectedHeadings);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const headings = document.querySelectorAll("h1, h2, h3");
  
      headings.forEach((heading) => {
        const id = heading.id;
        const link = document.querySelector(`a[href="#${id}"]`);
        const offsetTop = heading.offsetTop;
  
        if (scrollPosition >= offsetTop - 50) {
          document
            .querySelectorAll("ul[aria-label='Table of Contents'] a")
            .forEach((el) => el.classList.remove("active"));
  
          link.classList.add("active");
        }
      });
    };
  
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  return (
    <>
      <ul aria-label='Table of Contents'>
        <b>On this Page</b>
        {headings.map((heading) => (
          <li
            key={heading.id}
            className={`mt-${(heading.level - 1) * 4}`}
          >
            <a href={`#${heading.id}`} className="hover:underline">
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}