export function formatLanguages(languages: (string | null | undefined)[]) {
  const validLanguages = languages.filter(Boolean) as string[];
  const languageCount: Record<string, number> = {};
  validLanguages.forEach(lang => {
    languageCount[lang] = (languageCount[lang] || 0) + 1;
  });
  
  const total = validLanguages.length;
  
  return Object.entries(languageCount).map(([lang, count]) => ({
    lang,
    percent: (count / total) * 100,
  }));
}
  