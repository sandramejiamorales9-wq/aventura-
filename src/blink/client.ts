import { createClient } from '@blinkdotnew/sdk'

export const blink = createClient({
  projectId: import.meta.env.VITE_BLINK_PROJECT_ID || 'aventura-quest-game-l9mek9up',
  publishableKey: import.meta.env.VITE_BLINK_PUBLISHABLE_KEY || 'blnk_pk_WiovROhVZhTCXLx0xb28OXdxiI_DLlH7',
  authRequired: false,
  auth: { mode: 'managed' },
})
