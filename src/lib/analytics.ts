export const analytics = {
  track: (event: string, properties?: Record<string, any>) => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', event, properties);
    }
  },
  
  pageview: (url: string) => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('config', process.env.NEXT_PUBLIC_GA_ID, {
        page_path: url,
      });
    }
  },
  
  identify: (userId: string) => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('set', 'user_id', userId);
    }
  }
};
