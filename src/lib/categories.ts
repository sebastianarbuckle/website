const CATEGORY_TAG_CLASSES: Record<string, string> = {
  Finance: 'inline-block text-xs uppercase tracking-widest px-2 py-0.5 rounded-sm mb-3 bg-green-100 text-green-800',
};

const DEFAULT_TAG_CLASS = 'text-xs uppercase tracking-widest opacity-50 mb-3';

export function categoryTagClass(category: string): string {
  return CATEGORY_TAG_CLASSES[category] ?? DEFAULT_TAG_CLASS;
}
