export type ThemeName = 'classic' | 'aurora' | 'velvet' | 'solar' | 'prism' | 'galaxy' | 'pastel' | 'monotone' | 'halloween' | 'winter' | 'nature' | 'forest' | 'crimson' | 'prison' | 'chocolate';

export type ThemeColors = {
  noContributions: string;
  low: string;
  moderate: string;
  high: string;
  veryHigh: string;
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

export default themes;