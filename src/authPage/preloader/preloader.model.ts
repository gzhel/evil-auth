export const useModel = () => {
  const isMobile = window.screen.width < 768;

  const preloaderElement = document.getElementById("preloader") as HTMLElement;

  return { preloaderElement, isMobile };
};
