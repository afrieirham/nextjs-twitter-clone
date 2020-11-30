import NextLink from 'next/link'
import { useRouter } from 'next/router'

export default function Link({ href, children }) {
  const router = useRouter()
  const isActive = router.pathname === href

  return <NextLink href={href}>{children(isActive)}</NextLink>
}
