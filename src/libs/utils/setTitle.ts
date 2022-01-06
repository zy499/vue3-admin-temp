export default function setTitle(title?: string) {
  const { VITE_GLOB_APP_TITLE } = import.meta.env;
  const processTitle = VITE_GLOB_APP_TITLE || 'MaBang';
  window.document.title = `${title ? `${title} | ` : ''} ${processTitle}`;
}
