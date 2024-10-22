import { Request } from 'express'

import { UserPayload } from '@root/types'

declare module 'express-serve-static-core' {
  interface Request {
    user: UserPayload
  }
}
