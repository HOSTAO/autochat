import type { NextApiRequest, NextApiResponse } from 'next'
import { serverDatabases, ID } from '../../lib/appwrite-server'
import { DATABASE_ID, COLLECTION } from '../../lib/appwrite'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const { email } = req.body

    if (!email) {
      return res.status(400).json({ error: 'Email is required' })
    }

    const doc = await serverDatabases.createDocument(
      DATABASE_ID,
      COLLECTION.newsletters,
      ID.unique(),
      {
        email: String(email).slice(0, 254),
        source: 'website-footer',
        createdAt: new Date().toISOString(),
      }
    )

    return res.status(200).json({ success: true, id: doc.$id })
  } catch (error: unknown) {
    console.error('Newsletter error:', error)
    const message = error instanceof Error ? error.message : 'Failed to subscribe'
    return res.status(500).json({ error: message })
  }
}
