export const USER_ROLE = {
  USER: 'USER',
  ADMIN: 'ADMIN'
}

export const PUBLIC_ROUTE_REGEX = [
  /^\/auth\/login$/,          // Route /auth/login
  /^\/auth\/register$/,       // Route /auth/register
  /^\/auth\/forgot-password$/, // Route /auth/forgot-password
  /^\/auth\/reset-password$/,  // Route /auth/reset-password
  /^\/api-docs(\/.*)?$/       // Route /api-docs or child routes
]
