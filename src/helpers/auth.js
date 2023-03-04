import { get_token } from '@/utils/auth'
export function auth() {
  return {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${get_token()}`
  }
}
