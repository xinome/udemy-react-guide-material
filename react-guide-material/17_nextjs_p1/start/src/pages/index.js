import Link from 'next/link';

export default function Home() {
  return (
    <>
      <h1>Home</h1>
      {/* <Link href="/07_router"> */}
      {/* <Link href="/07_router" as="/dummy-url"> */}
      <Link href={{
        pathname: "/07_router",
        query: { key1: "value1" }
      }} >
        <a>/07_router</a>
      </Link>
    </>
  )
}
