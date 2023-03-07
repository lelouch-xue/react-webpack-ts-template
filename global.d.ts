declare global {
  namespace NodeJS {
    interface ProcessEnv {
      REACT_APP_DEV_API: string;
      NODE_ENV: 'development' | 'production';
    }
  }
}

export {};
