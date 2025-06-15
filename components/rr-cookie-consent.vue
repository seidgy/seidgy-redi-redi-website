<template>
    <div v-if="showBanner" class="rr-cookie-banner">
      <div class="rr-cookie-content">
        <h3>{{ translations[locale].barTitle }}</h3>
        <p>{{ translations[locale].barDescription }}</p>
        <div class="rr-cookie-buttons">
          <button @click="acceptCookies" class="rr-accept-button">{{ translations[locale].acceptAll }}</button>
          <button @click="rejectCookies" class="rr-reject-button">{{ translations[locale].declineAll }}</button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  const showBanner = ref(false)
  const locale = ref('pt') // Padrão para português

  const translations = {
    en: {
      barTitle: 'Cookie Consent',
      barDescription: 'This website uses cookies for statistics and advertising. Learn more in our Privacy Policy.',
      acceptAll: 'Accept',
      declineAll: 'Decline'
    },
    es: {
      barTitle: 'Consentimiento de cookies',
      barDescription: 'Este sitio web utiliza cookies para estadísticas y publicidad. Obtén más información en nuestra Política de Privacidad.',
      acceptAll: 'Aceptar',
      declineAll: 'Rechazar'
    },
    pt: {
      barTitle: 'Consentimento de cookie',
      barDescription: 'Este site utiliza cookies para estatísticas e publicidade. Saiba mais em nossa Política de Privacidade.',
      acceptAll: 'Aceitar',
      declineAll: 'Recusar'
    }
  }
  
  onMounted(() => {
    const cookieConsent = localStorage.getItem('rr-cookieConsent')
    if (!cookieConsent) {
      showBanner.value = true
    }
  })
  
  const acceptCookies = () => {
    localStorage.setItem('rr-cookieConsent', 'accepted')
    showBanner.value = false
  }
  
  const rejectCookies = () => {
    localStorage.setItem('rr-cookieConsent', 'rejected')
    showBanner.value = false
  }
  </script>
  
  <style scoped>
  .rr-cookie-banner {
    position: fixed;
    bottom: 24px;
    right: 24px;
    background-color: #fff;
    box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
    z-index: 1000;
    padding: 24px;
    border-radius: 16px;
    @media(max-width: 36em) {
        bottom: 0;
        right: 0;
        left: 0;
        border-radius: 16px 16px 0 0;
    }
  }
  
  .rr-cookie-content {
    max-width: 800px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 32px;
  }
  
  .rr-cookie-buttons {
    display: flex;
    gap: 1rem;
    justify-content: flex-end;
  }
  
  .rr-accept-button, .rr-reject-button {
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-weight: 500;
    transition: all 0.3s ease;
  }
  
  .rr-accept-button {
    background-color: #19A944;
    color: white;
  }
  
  .rr-reject-button {
    background-color: #f5f5f5;
    color: #333;
  }
  
  .rr-accept-button:hover {
    background-color: #158a38;
  }
  
  .rr-reject-button:hover {
    background-color: #e5e5e5;
  }
  
  @media (max-width: 768px) {
    .rr-cookie-content {
      text-align: center;
    }
  }
  </style>