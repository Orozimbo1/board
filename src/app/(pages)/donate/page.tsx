// Styles
import styles from './styles.module.scss'

// Next
import { Metadata } from 'next'
import { redirect } from 'next/navigation'

// Next Auth
import { getServerSession } from 'next-auth'
import { authOptions } from '../api/auth/[...nextauth]/route'

// Components
import { ButtonPayPal } from '../../components/ButtonPayPal'
import { ThankYou } from '@/app/components/ThankYou'

export const metadata: Metadata = {
  title: 'Board | Seja um apoiador',
  description: 'Página de apoiadores.'
}

export const Donate = async () => {
  const session = await getServerSession(authOptions)

  if(!session?.id) {
    redirect('/')
  }

  const user = {
    name: session?.user.name,
    id: session?.id,
    image: session?.user.image
  }

  // Ab3u3piBFYW6xf7WR3s8m-C_KVItj4fybUMKMFmxt6W9wz8bhOdOyxI1dMINKm-L-TuOEAhoI6kgKcS3
  // <script src="https://www.paypal.com/sdk/js?client-id=YOUR_CLIENT_ID"></script>
  // <script src="https://www.paypal.com/sdk/js?client-id=YOUR_CLIENT_ID"></script>

  return (
    <main className={styles.donate_container}>
      <img src="/images/rocket.svg" alt="Seja um apoiador." />
      
      <ThankYou user={user} />

      <h1>Seja um apoiador deste projeto 🏆</h1>
      <h3>Contribua com apenas <span>R$ 1,00</span></h3>
      <strong>Apareça na nossa Home, tenha funcionalidades exclusivas.</strong>
      <ButtonPayPal imageUrl={user.image} />
    </main>
  )
}

export default Donate