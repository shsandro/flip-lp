type FacebookPixel = {
    subscribe: () => void;
  };
  
  const useFacebookPixel = (): FacebookPixel => {
    const trackEvent = (event: string) => {
      if (fbq) {
        fbq('track', event);
      }
    };
  
    const subscribe = () => {
      trackEvent('Subscribe');
    };
  
    return {
      subscribe,
    };
  };
  
  export default useFacebookPixel;