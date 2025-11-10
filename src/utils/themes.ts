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
 
const themes: Record<ThemeName, ThemeColors> = {
  classic: {
    noContributions: "#ebedf0",
    low: "#9be9a8",
    moderate: "#40c463",
    high: "#30a14e",
    veryHigh: "#216e39",
  },
  aurora: {
    noContributions: "#ebedf0",
    low: "#88c0d0",
    moderate: "#81a1c1",
    high: "#5e81ac",
    veryHigh: "#4c566a",
  },
  velvet: {
    noContributions: "#ebedf0",
    low: "#ff9ecd",
    moderate: "#ff69b4",
    high: "#da1884",
    veryHigh: "#851050",
  },
  solar: {
    noContributions: "#ebedf0",
    low: "#ffd700",
    moderate: "#ffa500",
    high: "#ff4500",
    veryHigh: "#8b0000",
  },
  prism: {
    noContributions: "#ebedf0",
    low: "#ff9aa2",
    moderate: "#c7ceea",
    high: "#b5ead7",
    veryHigh: "#85dcb8",
  },
  galaxy: {
    noContributions: "#ebedf0",
    low: "#8e8cd8",
    moderate: "#6b4f89",
    high: "#483475",
    veryHigh: "#2b1955",
  },
  pastel: {
    noContributions: "#ebedf0",
    low: "#ffd6e0",
    moderate: "#ffb3c6",
    high: "#ff8fab",
    veryHigh: "#ff6b8b",
  },
  monotone: {
    noContributions: "#ebedf0",
    low: "#c6c6c6",
    moderate: "#929292",
    high: "#636363",
    veryHigh: "#2f2f2f",
  },
  halloween: {
    noContributions: "#ebedf0",
    low: "#ffee4a",
    moderate: "#ffc501",
    high: "#fe9600",
    veryHigh: "#03001c",
  },
  winter: {
    noContributions: "#ebedf0",
    low: "#b6e3ff",
    moderate: "#54aeff",
    high: "#0969da",
    veryHigh: "#0a3069",
  },
  nature: {
    noContributions: "#ebedf0",
    low: "#d8e8b0",
    moderate: "#95c077",
    high: "#4f772d",
    veryHigh: "#31572c",
  },
  forest: {
    noContributions: "rgba(140, 200, 180, 0.2)",
    veryHigh: "#5B9075",
    high: "#7CCDA1",
    moderate: "#A0E3B5",
    low: "#B9F1D6",
  },
  crimson: {
    noContributions: "rgba(255, 160, 160, 0.2)",
    veryHigh: "#E84D47",
    high: "#F37874",
    moderate: "#F89F9F",
    low: "#FDC5C5",
  },
  prison: {
    noContributions: "rgba(160, 200, 240, 0.2)",
    low: "#89CFF0",
    moderate: "#7FFFD4",
    high: "#00FFFF",
    veryHigh: "#007FFF",
  },
  chocolate: {
    noContributions: "#F8D1D1",
    low: "#BF6C6E",
    moderate: "#9D4A50",
    veryHigh: "#58111A",
    high: "#4E2A1F",
  },
};
 
// Enhanced themes with both light and dark schemes
const enhancedThemes: Record<ThemeName, ThemeWithSchemes> = {
  classic: {
    light: {
      noContributions: "#ebedf0",
      low: "#9be9a8",
      moderate: "#40c463",
      high: "#30a14e",
      veryHigh: "#216e39",
    },
    dark: {
      noContributions: "#374151",
      low: "#22543d",
      moderate: "#2d5a3d",
      high: "#38a169",
      veryHigh: "#48bb78",
    },
  },
  aurora: {
    light: {
      noContributions: "#ebedf0",
      low: "#88c0d0",
      moderate: "#81a1c1",
      high: "#5e81ac",
      veryHigh: "#4c566a",
    },
    dark: {
      noContributions: "#374151",
      low: "#4a5568",
      moderate: "#5e81ac",
      high: "#81a1c1",
      veryHigh: "#8fbcbb",
    },
  },
  velvet: {
    light: {
      noContributions: "#ebedf0",
      low: "#ff9ecd",
      moderate: "#ff69b4",
      high: "#da1884",
      veryHigh: "#851050",
    },
    dark: {
      noContributions: "#374151",
      low: "#6b1d4a",
      moderate: "#a0306e",
      high: "#d1477a",
      veryHigh: "#ff69b4",
    },
  },
  solar: {
    light: {
      noContributions: "#ebedf0",
      low: "#ffd700",
      moderate: "#ffa500",
      high: "#ff4500",
      veryHigh: "#8b0000",
    },
    dark: {
      noContributions: "#374151",
      low: "#735c0f",
      moderate: "#a67c00",
      high: "#d97706",
      veryHigh: "#fbbf24",
    },
  },
  prism: {
    light: {
      noContributions: "#ebedf0",
      low: "#ff9aa2",
      moderate: "#c7ceea",
      high: "#b5ead7",
      veryHigh: "#85dcb8",
    },
    dark: {
      noContributions: "#374151",
      low: "#4d2d33",
      moderate: "#3d4080",
      high: "#2d6650",
      veryHigh: "#1a8066",
    },
  },
  galaxy: {
    light: {
      noContributions: "#ebedf0",
      low: "#8e8cd8",
      moderate: "#6b4f89",
      high: "#483475",
      veryHigh: "#2b1955",
    },
    dark: {
      noContributions: "#374151",
      low: "#1a1433",
      moderate: "#2d1f4d",
      high: "#4d3380",
      veryHigh: "#8066cc",
    },
  },
  pastel: {
    light: {
      noContributions: "#ebedf0",
      low: "#ffd6e0",
      moderate: "#ffb3c6",
      high: "#ff8fab",
      veryHigh: "#ff6b8b",
    },
    dark: {
      noContributions: "#374151",
      low: "#4d1a26",
      moderate: "#80334d",
      high: "#b34d73",
      veryHigh: "#ff6b8b",
    },
  },
  monotone: {
    light: {
      noContributions: "#ebedf0",
      low: "#c6c6c6",
      moderate: "#929292",
      high: "#636363",
      veryHigh: "#2f2f2f",
    },
    dark: {
      noContributions: "#374151",
      low: "#1a1a1a",
      moderate: "#333333",
      high: "#666666",
      veryHigh: "#cccccc",
    },
  },
  halloween: {
    light: {
      noContributions: "#ebedf0",
      low: "#ffee4a",
      moderate: "#ffc501",
      high: "#fe9600",
      veryHigh: "#03001c",
    },
    dark: {
      noContributions: "#374151",
      low: "#4d3300",
      moderate: "#806600",
      high: "#b39900",
      veryHigh: "#ffcc00",
    },
  },
  winter: {
    light: {
      noContributions: "#ebedf0",
      low: "#b6e3ff",
      moderate: "#54aeff",
      high: "#0969da",
      veryHigh: "#0a3069",
    },
    dark: {
      noContributions: "#374151",
      low: "#1a3d66",
      moderate: "#2d5999",
      high: "#4d8acc",
      veryHigh: "#80bfff",
    },
  },
  nature: {
    light: {
      noContributions: "#ebedf0",
      low: "#d8e8b0",
      moderate: "#95c077",
      high: "#4f772d",
      veryHigh: "#31572c",
    },
    dark: {
      noContributions: "#374151",
      low: "#1a331a",
      moderate: "#2d4d2d",
      high: "#4d804d",
      veryHigh: "#80cc80",
    },
  },
  forest: {
    light: {
      noContributions: "rgba(140, 200, 180, 0.2)",
      low: "#B9F1D6",
      moderate: "#A0E3B5",
      high: "#7CCDA1",
      veryHigh: "#5B9075",
    },
    dark: {
      noContributions: "rgba(20, 40, 30, 0.5)",
      low: "#1a4d33",
      moderate: "#2d6650",
      high: "#4d9973",
      veryHigh: "#80cc99",
    },
  },
  crimson: {
    light: {
      noContributions: "rgba(255, 160, 160, 0.2)",
      low: "#FDC5C5",
      moderate: "#F89F9F",
      high: "#F37874",
      veryHigh: "#E84D47",
    },
    dark: {
      noContributions: "rgba(40, 20, 20, 0.5)",
      low: "#4d1a1a",
      moderate: "#661a1a",
      high: "#992626",
      veryHigh: "#ff6666",
    },
  },
  prison: {
    light: {
      noContributions: "rgba(160, 200, 240, 0.2)",
      low: "#89CFF0",
      moderate: "#7FFFD4",
      high: "#00FFFF",
      veryHigh: "#007FFF",
    },
    dark: {
      noContributions: "rgba(20, 30, 40, 0.5)",
      low: "#1a334d",
      moderate: "#2d5980",
      high: "#4d8fb3",
      veryHigh: "#80ccff",
    },
  },
  chocolate: {
    light: {
      noContributions: "#F8D1D1",
      low: "#BF6C6E",
      moderate: "#9D4A50",
      high: "#4E2A1F",
      veryHigh: "#58111A",
    },
    dark: {
      noContributions: "#374151",
      low: "#4d2626",
      moderate: "#663333",
      high: "#994d4d",
      veryHigh: "#cc8080",
    },
  },
};
 
/**
* Get theme colors for a specific theme and color scheme
*/
export const getTheme = (
  themeName: ThemeName | string,
  colorScheme: ColorScheme = 'light'
): ThemeColors => {
  // If custom theme object is passed
  if (typeof themeName === 'object') {
    return themeName as ThemeColors;
  }
  
  // If it's a built-in theme name
  if (enhancedThemes[themeName as ThemeName]) {
    return enhancedThemes[themeName as ThemeName][colorScheme];
  }
  
  // Fallback to classic light theme
  return enhancedThemes.classic.light;
};
 
/**
* Get all available theme names
*/
export const getThemeNames = (): ThemeName[] => {
  return Object.keys(enhancedThemes) as ThemeName[];
};
 
export default themes;
 