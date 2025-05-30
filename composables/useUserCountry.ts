import { getRequestIP } from 'h3'

export const useUserCountry = async (event: H3Event) => {
  try {
    const ip = getRequestIP(event) || '8.8.8.8' // fallback IP para testes locais
    const res = await $fetch(`https://ipinfo.io/45.233.169.57/json?token=c5dcb76c0a809b`)
    return res?.country_name || null
  } catch (error) {
    console.error('Erro ao buscar país:', error)
    return null
  }
}
