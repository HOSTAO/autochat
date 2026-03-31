import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function PricingRedirect() {
  const router = useRouter()
  useEffect(() => {
    router.replace('/pricing')
  }, [router])
  return null
}
