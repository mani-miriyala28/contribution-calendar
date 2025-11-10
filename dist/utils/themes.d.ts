export type ThemeName = 'classic' | 'aurora' | 'velvet' | 'solar' | 'prism' | 'galaxy' | 'pastel' | 'monotone' | 'halloween' | 'winter' | 'nature' | 'forest' | 'crimson' | 'prison' | 'chocolate';
export type ThemeColors = {
    noContributions: string;
    low: string;
    moderate: string;
    high: string;
    veryHigh: string;
};
export type ColorScheme = 'light' | 'dark';
export type ThemeWithSchemes = {
    light: ThemeColors;
    dark: ThemeColors;
};
declare const themes: Record<ThemeName, ThemeColors>;
/**
 * Get theme colors for a specific theme and color scheme
 */
export declare const getTheme: (themeName: ThemeName | string, colorScheme?: ColorScheme) => ThemeColors;
/**
 * Get all available theme names
 */
export declare const getThemeNames: () => ThemeName[];
export default themes;
