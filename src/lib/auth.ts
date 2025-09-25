// src/lib/auth.ts
import { createClient } from './supabase'

export interface User {
  id: string;
  email: string;
  first_name?: string;
  last_name?: string;
  created_at: string;
}

export interface AuthError {
  message: string;
  code?: string;
}

export const authHelpers = {
  // Регистрация пользователя
  async signUp(email: string, password: string, firstName: string, lastName: string) {
    const supabase = createClient()
    
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          first_name: firstName,
          last_name: lastName,
        }
      }
    })

    if (error) {
      return { user: null, error: { message: error.message, code: error.message } }
    }

    return { user: data.user, error: null }
  },

  // Вход пользователя
  async signIn(email: string, password: string) {
    const supabase = createClient()
    
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) {
      return { user: null, error: { message: error.message, code: error.message } }
    }

    return { user: data.user, error: null }
  },

  // Выход пользователя
  async signOut() {
    const supabase = createClient()
    const { error } = await supabase.auth.signOut()
    
    if (error) {
      return { error: { message: error.message } }
    }

    return { error: null }
  },

  // Получить текущего пользователя
  async getCurrentUser() {
    const supabase = createClient()
    const { data: { user }, error } = await supabase.auth.getUser()
    
    if (error) {
      return { user: null, error: { message: error.message } }
    }

    return { user, error: null }
  },

  // Проверить сессию
  async getSession() {
    const supabase = createClient()
    const { data: { session }, error } = await supabase.auth.getSession()
    
    if (error) {
      return { session: null, error: { message: error.message } }
    }

    return { session, error: null }
  },

  // Сброс пароля
  async resetPassword(email: string) {
    const supabase = createClient()
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/reset-password`
    })

    if (error) {
      return { error: { message: error.message } }
    }

    return { error: null }
  },

  // Обновить пароль
  async updatePassword(newPassword: string) {
    const supabase = createClient()
    const { error } = await supabase.auth.updateUser({
      password: newPassword
    })

    if (error) {
      return { error: { message: error.message } }
    }

    return { error: null }
  },

  // Обновить профиль пользователя
  async updateProfile(updates: { first_name?: string; last_name?: string; email?: string }) {
    const supabase = createClient()
    const { error } = await supabase.auth.updateUser({
      email: updates.email,
      data: {
        first_name: updates.first_name,
        last_name: updates.last_name,
      }
    })

    if (error) {
      return { error: { message: error.message } }
    }

    return { error: null }
  }
}