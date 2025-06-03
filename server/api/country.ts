// server/api/country.ts
import { useUserCountry } from '../../composables/useUserCountry'

export default defineEventHandler(async (event) => {
  const obj = await useUserCountry(event)
  return obj
})
