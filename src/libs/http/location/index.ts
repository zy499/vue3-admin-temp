// 获取当前浏览器域名
export function getCurrentDomain(): string {
  return location.origin;
}

// 根据参数名获取url参数
export function getQueryString(name: string): string | null {
  const reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
  const p = window.location.href.split('?')[1] || '';
  const r = p.match(reg);
  if (r != null) return unescape(r[2]);
  return null;
}
