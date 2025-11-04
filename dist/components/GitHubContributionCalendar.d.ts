import { ThemeName } from '../utils/themes';
interface GitHubContributionCalendarProps {
    username: string;
    token: string;
    /** Optional callback when logout is clicked */
    onLogout?: () => void;
    /** Show or hide the header with user info and logout button */
    showHeader?: boolean;
    /** Custom class name for styling */
    className?: string;
    /** Default theme to use */
    defaultTheme?: ThemeName;
}
declare const GitHubContributionCalendar: ({ username, token, onLogout, showHeader, className, defaultTheme }: GitHubContributionCalendarProps) => import("react/jsx-runtime").JSX.Element;
export default GitHubContributionCalendar;
