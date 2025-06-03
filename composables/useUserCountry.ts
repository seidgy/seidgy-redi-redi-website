import { getRequestIP, H3Event } from 'h3'

export const useUserCountry = async (event: H3Event) => {
  try {
    // Tenta obter o IP real do cliente através dos headers do Netlify
    const clientIP = event.node.req.headers['x-forwarded-for'] || 
                    event.node.req.headers['x-real-ip'] ||
                    getRequestIP(event)
    
    const resolvedIP = (clientIP && clientIP !== '::1' && clientIP !== '127.0.0.1') 
      ? clientIP.split(',')[0].trim() // Pega o primeiro IP se houver múltiplos
      : '8.8.8.8'
    
    console.log('IP detectado:', resolvedIP)

    const res = await $fetch(`https://ipinfo.io/${resolvedIP}/json?token=c5dcb76c0a809b`)
    console.log('Resposta da API IPAPI:', res)

    return {
      country: res?.country || null,
      ip: resolvedIP
    }
  } catch (error) {
    console.error('Erro ao buscar país:', error)
    return null
  }
}