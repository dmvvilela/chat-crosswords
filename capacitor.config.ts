import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.d2vsolutions.chatcrosswords',
  appName: 'Chat Crosswords',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
