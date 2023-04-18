import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app.siewe',
  appName: 'FruitSiewe',
  webDir: 'www',
  bundledWebRuntime: false,
  plugins:{
    CapacitorHttp:{
      enabled:true,

    },
  },
};

export default config;
