import { Nav } from './_components/Nav'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Nav />
      {children}
    </div>
  )
}
