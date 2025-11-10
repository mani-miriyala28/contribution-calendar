# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2024-12-19

### Added
- Initial release of GitHub Contribution Calendar component
- Support for real GitHub contribution data via GraphQL API
- 14 beautiful built-in themes (Galaxy, Ocean, Forest, Sunset, etc.)
- Interactive tooltips with contribution details
- Year selection and navigation
- Responsive design for desktop and mobile
- TypeScript support with full type definitions
- Customizable component props
- Header with user information and logout functionality
- Theme switcher with smooth transitions
- Zero external UI library dependencies

### Features
- **GitHubContributionCalendar** - Main standalone component
- **Real GitHub Data** - Fetches actual contribution data using GitHub API
- **Multiple Themes** - 14+ beautiful color schemes
- **Interactive UI** - Hover tooltips and smooth animations
- **TypeScript** - Full type safety and IntelliSense support
- **Responsive** - Works on all screen sizes
- **Customizable** - Flexible props for different use cases

### Technical Details
- Built with React 18.3.1 and TypeScript
- Uses Vite for building and bundling
- TailwindCSS for styling
- date-fns for date manipulation
- GitHub GraphQL API integration
- ESM and UMD builds available