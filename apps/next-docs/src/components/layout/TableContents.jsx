import Link from 'next/link'

const headingLevels = (level) => {
  return level == 1 && 'ml-0' || level == 2 && 'ml-2' || level == 3 && 'ml-4' || level == 4 && 'ml-6' || level == 5 && 'ml-8' || level == 6 && 'ml-10'
}

export const TableContents = ({ tocs }) => {
  return (
    <div className="toc">
      <div className="font-semibold">On this page</div>
      {tocs?.map(({level, text, href}) => (
        <li key={href} className={headingLevels(level)}>
          <Link href={href}>{text}</Link>
        </li>
      ))}
    </div>
  )
}