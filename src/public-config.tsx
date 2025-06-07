
export const PORT = process.env.PORT ?? "8080"
export const HOST = process.env.HOST ?? "localhost"

// Adding Api Server
export const API_SERVER_URL = `http://${HOST}:${PORT}/api`