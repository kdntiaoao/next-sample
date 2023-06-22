import Link from 'next/link';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <ul className="flex gap-4 p-2">
        <li>
          <Link href="/style-sample/sample1">sample1</Link>
        </li>
        <li>
          <Link href="/style-sample/sample2">sample2</Link>
        </li>
        <li>
          <Link href="/style-sample/sample3">sample3</Link>
        </li>
        <li>
          <Link href="/style-sample/sample4">sample4</Link>
        </li>
      </ul>
      {children}
    </div>
  );
}
