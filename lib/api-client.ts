/**
 * API Client for ViperQB Backend
 * All API calls should route through here for consistent error handling and auth
 *
 * TODO: Connect to backend endpoints:
 * - POST /api/v1/auth/login
 * - GET /api/v1/auth/me
 * - GET /api/v1/metrics/usage
 * - GET /api/v1/plugins
 * - POST /api/v1/sft/upload
 * - GET /api/v1/kyc/sessions
 * - GET /api/v1/forensics/query
 * - And all other endpoints per spec
 */

export interface APIResponse<T> {
  success: boolean
  data?: T
  error?: string
}

export const apiClient = {
  async request<T>(endpoint: string, options: RequestInit = {}): Promise<APIResponse<T>> {
    try {
      const url = `${process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3001"}/api/v1${endpoint}`

      const response = await fetch(url, {
        ...options,
        headers: {
          "Content-Type": "application/json",
          // TODO: Add auth token from session
          ...options.headers,
        },
      })

      if (!response.ok) {
        throw new Error(`API Error: ${response.statusText}`)
      }

      const data = await response.json()
      return { success: true, data }
    } catch (error) {
      console.error("[v0] API Error:", error)
      return { success: false, error: error instanceof Error ? error.message : "Unknown error" }
    }
  },

  async get<T>(endpoint: string) {
    return this.request<T>(endpoint, { method: "GET" })
  },

  async post<T>(endpoint: string, body: unknown) {
    return this.request<T>(endpoint, { method: "POST", body: JSON.stringify(body) })
  },

  async patch<T>(endpoint: string, body: unknown) {
    return this.request<T>(endpoint, { method: "PATCH", body: JSON.stringify(body) })
  },

  async delete<T>(endpoint: string) {
    return this.request<T>(endpoint, { method: "DELETE" })
  },
}
