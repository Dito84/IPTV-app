import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.miapp.iptv',
  appName: 'IPTV Player',
  webDir: 'www',
  // Activa peticiones HTTP nativas (fetch/XHR salen por código nativo, sin CORS)
  plugins: {
    CapacitorHttp: {
      enabled: true
    }
  }
};

export default config;
