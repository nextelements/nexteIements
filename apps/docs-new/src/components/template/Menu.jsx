'use client'

export const Menu = ({ items }) => {
  return Object.keys(items).map((title) => (
    <div key={title}>
      <div className="font-semibold">{ title }</div>
      <ul>
        {items[title].map((item, i) => (
          <li key={i} className="ml-1 border-l border-l-divider indent-[1em]">
            <a href={item.href} className="py-1 block text-zinc-500 hover:text-white transition-[.2s]">{item.title}</a>
          </li>
        ))}
      </ul>
    </div>
  ));
}