// 亮点卡图标：svg 内部内容，配合 .bd-card__icon 由 v-html 塞进 <svg>。
// 两款产品的亮点语义一一对应，图标共用一份，避免同一段路径抄两遍。
export const iconBox = '<path d="M12 3 4 7.5v9L12 21l8-4.5v-9L12 3Z"/><path d="M4 7.5 12 12l8-4.5M12 12v9"/>'
export const iconChip =
  '<rect x="7.5" y="7.5" width="9" height="9" rx="2"/><path d="M10 3.5V7M14 3.5V7M10 17v3.5M14 17v3.5M3.5 10H7M3.5 14H7M17 10h3.5M17 14h3.5"/>'
export const iconMinusCircle = '<circle cx="12" cy="12" r="8.5"/><path d="M8.5 12h7"/>'
export const iconRefresh = '<path d="M20.5 12a8.5 8.5 0 1 1-2.5-6"/><path d="M20.5 3.5V9H15"/>'
