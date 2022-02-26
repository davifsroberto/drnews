import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'
import { signIn, signOut, useSession } from 'next-auth/react'

import styles from './styles.module.scss'

export function SignInButton() {
  const { data: session } = useSession()

  return session ? (
    <button
      onClick={() => signOut()}
      className={styles.signInButton}
      type="button"
    >
      <FaGithub color="#04d361" />
      {session.user.name}
      <FiX className={styles.closeIcon} color="#73780" />
    </button>
  ) : (
    <button
      onClick={() => signIn('github')}
      className={styles.signInButton}
      type="button"
    >
      <FaGithub color="#eba417" />
      Sing in with GitHub
    </button>
  )
}
