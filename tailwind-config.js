/**
 * LifeSync - Tailwind Configuration (Daily Habit Tracker and Assistance)
 * Palet warna kanonikal LifeSync
 */
tailwind.config = {
    theme: {
        extend: {
            colors: {
                surface: {
                    DEFAULT: '#f6fbf5',
                    dim: '#d7dbd6',
                    bright: '#f6fbf5',
                    variant: '#dfe4df'
                },
                'surface-container': {
                    lowest: '#ffffff',
                    low: '#f0f5f0',
                    DEFAULT: '#ebefea',
                    high: '#e5e9e4',
                    highest: '#dfe4df'
                },
                'on-surface': {
                    DEFAULT: '#181d1a',
                    variant: '#414942'
                },
                'inverse-surface': '#2c322e',
                'inverse-on-surface': '#edf2ed',
                outline: {
                    DEFAULT: '#717971',
                    variant: '#c1c9bf'
                },
                primary: {
                    DEFAULT: '#316342',
                    default: '#316342',
                    dark: '#1e5031',
                    light: '#4a7c59',
                    container: '#4a7c59',
                    fixed: '#b9efc5',
                    'fixed-dim': '#9dd3aa'
                },
                'on-primary': {
                    DEFAULT: '#ffffff',
                    container: '#e1ffe5',
                    fixed: '#00210e',
                    'fixed-variant': '#1e5031'
                },
                secondary: {
                    DEFAULT: '#9a442d',
                    default: '#9a442d',
                    dark: '#742814',
                    light: '#fc9174',
                    container: '#fc9174',
                    fixed: '#ffdbd2',
                    'fixed-dim': '#ffb4a1'
                },
                'on-secondary': {
                    DEFAULT: '#ffffff',
                    container: '#742814',
                    fixed: '#3c0800',
                    'fixed-variant': '#7c2e19'
                },
                tertiary: {
                    DEFAULT: '#356243',
                    default: '#356243',
                    dark: '#1e5031',
                    light: '#4e7b5a',
                    container: '#4e7b5a',
                    fixed: '#bdeec7',
                    'fixed-dim': '#a1d2ac'
                },
                'on-tertiary': {
                    DEFAULT: '#ffffff',
                    container: '#dfffe3',
                    fixed: '#00210e',
                    'fixed-variant': '#234f32'
                },
                // Backward compatibility aliases
                brand: {
                    DEFAULT: '#316342',
                    50: '#f0f5f0',
                    100: '#b9efc5',
                    200: '#9dd3aa',
                    300: '#6ea880',
                    400: '#4a7c59',
                    500: '#316342',
                    600: '#285336',
                    700: '#1e5031',
                    800: '#143821',
                    900: '#00210e'
                },
                ink: {
                    DEFAULT: '#181d1a',
                    soft: '#414942',
                    muted: '#717971'
                }
            },
            fontFamily: {
                sans: ['"Plus Jakarta Sans"', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
                display: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
                serif: ['ui-serif', 'Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif']
            },
            boxShadow: {
                soft: '0 2px 8px -2px rgba(24, 29, 26, 0.05), 0 1px 3px -1px rgba(24, 29, 26, 0.03)',
                card: '0 4px 20px -4px rgba(24, 29, 26, 0.06), 0 2px 6px -2px rgba(24, 29, 26, 0.04)',
                tactile: '0 4px 20px -4px rgba(24, 29, 26, 0.05), 0 2px 6px -2px rgba(24, 29, 26, 0.03)',
                'tactile-hover': '0 12px 28px -6px rgba(49, 99, 66, 0.12), 0 4px 10px -2px rgba(49, 99, 66, 0.06)',
                ambient: '0 20px 40px -15px rgba(24, 29, 26, 0.08)'
            },
            borderRadius: {
                '2xl': '1rem',
                '3xl': '1.5rem',
                '4xl': '2rem',
                '5xl': '2.5rem'
            }
        }
    }
};
