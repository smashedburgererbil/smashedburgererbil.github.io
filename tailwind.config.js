module.exports = Object.assign({
    theme: {
      extend: {
        colors: {
          base:        'rgb(var(--c-base) / <alpha-value>)',
          surface:     'rgb(var(--c-surface) / <alpha-value>)',
          surfaceAlt:  'rgb(var(--c-surface-alt) / <alpha-value>)',
          ink:         'rgb(var(--c-ink) / <alpha-value>)',
          muted:       'rgb(var(--c-muted) / <alpha-value>)',
          edge:        'rgb(var(--c-edge) / <alpha-value>)',
          accent:      'rgb(var(--c-accent) / <alpha-value>)',
          accentHover: 'rgb(var(--c-accent-hover) / <alpha-value>)',
          hot:         'rgb(var(--c-hot) / <alpha-value>)',
          brand:       '#C4453A',
          brandDark:   '#A8372E',
          brandDeeper: '#8E2C25',
          wood:        '#D4B896',
          concrete:    '#C9C4BD',
        },
        fontFamily: {
          display: ['"Playfair Display"', 'Georgia', 'serif'],
          sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        },
        boxShadow: {
          card: '0 10px 30px -12px var(--shadow-card)',
          glow: '0 0 0 1px rgba(196,69,58,.4), 0 14px 44px -14px rgba(196,69,58,.55)',
        },
        keyframes: {
          pulseBadge: { '0%,100%': { transform: 'scale(1)' }, '50%': { transform: 'scale(1.2)' } },
          fadeIn:     { from: { opacity: '0' }, to: { opacity: '1' } },
          riseIn:     { from: { opacity: '0', transform: 'translateY(10px)' }, to: { opacity: '1', transform: 'translateY(0)' } },
        },
        animation: {
          pulseBadge: 'pulseBadge .35s ease-out',
          fadeIn:     'fadeIn .2s ease-out',
          riseIn:     'riseIn .5s cubic-bezier(.22,1,.36,1) both',
        },
      },
    },
  }, { content: ['./menu.html'] });