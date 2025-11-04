// Import compiled CSS styles
import './compiled-styles.css';

// Main library export for GitHub Contribution Calendar npm package
export { default as GitHubContributionCalendar } from './components/GitHubContributionCalendar';
export { default as themes } from './utils/themes';
export type { ThemeName } from './utils/themes';
export type { Contribution, ContributionDetails } from './utils/github';
export { fetchGitHubContributions, fetchContributionDetails } from './utils/github';

// Optional exports for advanced usage (includes router dependencies)
export { default as ContributionCalendar } from './components/ContributionCalendar';
export { default as Login } from './pages/Login';
export { default as App } from './App';