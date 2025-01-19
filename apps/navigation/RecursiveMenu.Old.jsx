import Link from 'next/link';

const NoItems = () => {
  return (
    <div className="text-neutral-500 font-semibold text-xs uppercase">
      { '- empty category' }
    </div>
  )
}

export const RecursiveMenu = ({ items }) => {
  
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>
          {(item.type == 'folder' && !item.isInvisible) &&
            <span className="block font-semibold">{item.title}</span>
          }
          {item?.items?.length != 0
            ? item.type == 'file' && (
              <Link href={`/docs/${item.href}`} className="text-blue-400">
                {item.title}
              </Link>)
            : <NoItems />
          }
          {item.items && <RecursiveMenu items={item.items} />}
        </li>
      ) )}
    </ul>
  );
};