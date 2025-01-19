import Link from 'next/link'

export default () => {
  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <div>
        <h1>Documents</h1>
        Create documentation for your project with little effort.

        <Link href="/docs/introduction">Get Started</Link>
      </div>
    </div>
  )
}