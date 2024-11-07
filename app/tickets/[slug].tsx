import { useRouter } from 'next/router';

export default function Page() {
  const router = useRouter()
  return <p>My ticket id: {router.query.slug}</p>
}