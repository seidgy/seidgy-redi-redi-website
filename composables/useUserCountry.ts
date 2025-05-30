import { getRequestIP } from 'h3'

export const useUserCountry = async (event: H3Event) => {
  try {
    const ip = getRequestIP(event)
    const resolvedIP = (ip && ip !== '::1' && ip !== '127.0.0.1') ? ip : '8.8.8.8'
    console.log('IP detectado:', resolvedIP)

    const res = await $fetch(`https://ipinfo.io/${resolvedIP}/json?token=c5dcb76c0a809b`)
    console.log('Resposta da API IPAPI:', res)

    return res?.country || null
  } catch (error) {
    console.error('Erro ao buscar país:', error)
    return null
  }
}
