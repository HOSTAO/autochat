import type { NextApiRequest, NextApiResponse } from 'next'
import { serverDatabases, ID } from '../../lib/appwrite-server'
import { DATABASE_ID, COLLECTION } from '../../lib/appwrite'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const { name, email, company, message } = req.body

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Name, email, and message are required' })
    }

    // Save to Appwrite
    const doc = await serverDatabases.createDocument(
      DATABASE_ID,
      COLLECTION.contacts,
      ID.unique(),
      {
        name: String(name).slice(0, 100),
        email: String(email).slice(0, 254),
        company: String(company || '').slice(0, 100),
        message: String(message).slice(0, 5000),
        source: 'website-contact',
        createdAt: new Date().toISOString(),
      }
    )

    return res.status(200).json({ success: true, id: doc.$id })
  } catch (error: unknown) {
    console.error('Contact form error:', error)
    const message = error instanceof Error ? error.message : 'Failed to submit'
    return res.status(500).json({ error: message })
  }
}
