import { Client, Databases, ID } from 'appwrite'

// ---------------------------------------------------------------------------
// Browser (public) Appwrite client
// ---------------------------------------------------------------------------
const client = new Client()
client
  .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!)
  .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT!)

export const databases = new Databases(client)

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------
export const DATABASE_ID = 'main'

export const COLLECTION = {
  contacts: 'contacts',
  newsletters: 'newsletters',
  demos: 'demos',
  testimonials: 'testimonials',
} as const

export { ID }
export default client
