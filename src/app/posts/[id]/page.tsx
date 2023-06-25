export async function generateStaticParams() {
  return [{ id: '1' }, { id: '2' }, { id: '3' }]
}

export default async function Post({ params }: { params: { id: string } }) {
  return <div>{params.id}</div>
}
