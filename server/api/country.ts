// server/api/country.ts
import { useUserCountry } from '../../composables/useUserCountry'

export default defineEventHandler(async (event) => {
  const country = await useUserCountry(event)
  return { country }
})
