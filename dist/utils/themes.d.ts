export type ThemeName = 'classic' | 'aurora' | 'velvet' | 'solar' | 'prism' | 'galaxy' | 'pastel' | 'monotone' | 'halloween' | 'winter' | 'nature' | 'forest' | 'crimson' | 'prison' | 'chocolate';
export type ThemeColors = {
    noContributions: string;
    low: string;
    moderate: string;
    high: string;
    veryHigh: string;
};
declare const themes: Record<ThemeName, ThemeColors>;
export default themes;
