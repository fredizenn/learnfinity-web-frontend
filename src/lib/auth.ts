import api from "./api"

export interface SignInData {
  email: string
  password: string
}

export interface SignUpData {
  email: string
  first_name: string
  last_name: string
  password: string
  account_type: string
  country: string
  date_of_birth: string
  phone_number: string
  parental_email: string
  parental_consent: boolean
}

export interface AuthResponse {
  success: boolean
  message: string
  data?: {
    user: {
      id: string
      email: string
      first_name: string
      last_name: string
      account_type: string
      country: string
    }
    token: string
  }
  error?: string
}

export interface User {
  id: string
  email: string
  first_name: string
  last_name: string
  account_type: string
  country: string
}

// Sign up function - matches your API schema
export const signUp = async (data: SignUpData): Promise<AuthResponse> => {
  try {
    const response = await api.post("/auth/register", {
      email: data.email,
      first_name: data.first_name,
      last_name: data.last_name,
      password: data.password,
      account_type: data.account_type,
      country: data.country,
      date_of_birth: data.date_of_birth,
      phone_number: data.phone_number,
      parental_email: data.parental_email,
      parental_consent: data.parental_consent,
    })

    return {
      success: true,
      message: response.data.message || "Account created successfully!",
      data: response.data.data,
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    return {
      success: false,
      message: error.response?.data?.message || "Registration failed",
      error: error.response?.data?.error || "Network error",
    }
  }
}

// Sign in function
export const signIn = async (data: SignInData): Promise<AuthResponse> => {
  try {
    const response = await api.post("/api/v1/auth/login", data)

    if (response.data.success && response.data.data) {
      // Store token and user data
      localStorage.setItem("auth_token", response.data.data.token)
      localStorage.setItem("user_data", JSON.stringify(response.data.data.user))
    }

    return response.data
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    return {
      success: false,
      message: error.response?.data?.message || "Sign in failed",
      error: error.response?.data?.error || "Network error",
    }
  }
}

// Sign out function
export const signOut = async (): Promise<void> => {
  try {
    await api.post("/api/v1/auth/logout")
  } catch (error) {
    console.error("Sign out error:", error)
  } finally {
    localStorage.removeItem("auth_token")
    localStorage.removeItem("user_data")
    window.location.href = "/sign-in"
  }
}

// Get current user
export const getCurrentUser = (): User | null => {
  try {
    const userData = localStorage.getItem("user_data")
    return userData ? JSON.parse(userData) : null
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    throw new Error(error.message || "Failed to parse user data from localStorage")
  }
}

// Check if user is authenticated
export const isAuthenticated = (): boolean => {
  const token = localStorage.getItem("auth_token")
  const user = getCurrentUser()
  return !!(token && user)
}

// Refresh token
export const refreshToken = async (): Promise<boolean> => {
  try {
    const response = await api.post("/api/v1/auth/refresh")

    if (response.data.success && response.data.data) {
      localStorage.setItem("auth_token", response.data.data.token)
      return true
    }

    return false
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    throw new Error(
      error.response?.data?.message || "Failed to refresh token"
    )
  }
}
