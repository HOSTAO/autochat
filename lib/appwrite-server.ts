import { Client, Databases, ID } from 'node-appwrite'

// ---------------------------------------------------------------------------
// Server-side Appwrite client (use in API routes / getServerSideProps only)
// ---------------------------------------------------------------------------
const serverClient = new Client()
serverClient
  .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!)
  .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT!)
  .setKey(process.env.APPWRITE_API_KEY!)

export const serverDatabases = new Databases(serverClient)
export { ID }
export default serverClient
