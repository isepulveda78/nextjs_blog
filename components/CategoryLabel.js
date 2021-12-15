import Link from 'next/link'

export default function CategoryLabel({ children }) {

    return (
      <div
        className={`z-10 px-2 py-1 text-gray-100 font-bold rounded bg-sky-500`}
      >
        <Link href={`/blog/category/${children.toLowerCase()}`}>{children}</Link>
      </div>
    )
  }