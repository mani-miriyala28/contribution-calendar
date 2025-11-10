// Main library export for React GitHub Contribution Calendar npm package
export { default as GitHubCalendar } from './components/GitHubCalendar';
export type { GitHubCalendarProps } from './components/GitHubCalendar';

// Theme utilities
export { getTheme, getThemeNames } from './utils/themes';
export type { ThemeName, ThemeColors, ColorScheme } from './utils/themes';

// GitHub API utilities
export { fetchGitHubContributions, fetchContributionDetails } from './utils/github';
export type { Contribution, ContributionDetails } from './utils/github';

// Legacy exports (for backward compatibility)
export { default as GitHubContributionCalendar } from './components/GitHubContributionCalendar';
export { default as ContributionCalendar } from './components/ContributionCalendar';
export { default as Login } from './pages/Login';
export { default as App } from './App';