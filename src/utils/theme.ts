export interface ThemeColors {
  background: string;
  surface: string;
  surfaceAlt: string;
  border: string;
  primary: string;
  primaryLight: string;
  accent: string;
  text: string;
  textSecondary: string;
  textMuted: string;
  tag: Record<string, { bg: string; text: string }>;
  section: Record<string, string>;
  sectionText: Record<string, string>;
}

export interface AppTheme {
  id: string;
  name: string;
  colors: ThemeColors;
}

const baseTags = (primary: string, primaryLight: string): ThemeColors['tag'] => ({
  'low-calorie': { bg: '#E8F0DC', text: '#2D5016' },
  'low-carb':    { bg: '#FEF3E2', text: '#92400E' },
  vegetarian:    { bg: '#E0F2FE', text: '#0369A1' },
  vegan:         { bg: '#D1FAE5', text: '#065F46' },
  'high-protein':{ bg: '#FDE8E8', text: '#9B1C1C' },
  quick:         { bg: '#F3F0FF', text: '#4C1D95' },
  'gluten-free': { bg: '#FFF7ED', text: '#C2410C' },
});

const baseSections: ThemeColors['section'] = {
  cutting:    '#FEF3E2',
  preparing:  '#E0F2FE',
  cooking:    '#FDE8E8',
  assembling: '#F3F0FF',
  baking:     '#FFF7ED',
};

const baseSectionText: ThemeColors['sectionText'] = {
  cutting:    '#92400E',
  preparing:  '#0369A1',
  cooking:    '#9B1C1C',
  assembling: '#4C1D95',
  baking:     '#C2410C',
};

export const themes: Record<string, AppTheme> = {
  classic: {
    id: 'classic',
    name: 'Classic',
    colors: {
      background:    '#F9F7F4',
      surface:       '#FFFFFF',
      surfaceAlt:    '#F4F1ED',
      border:        '#E8E4DF',
      primary:       '#2D5016',
      primaryLight:  '#E8F0DC',
      accent:        '#C4622D',
      text:          '#1A1A1A',
      textSecondary: '#6B6560',
      textMuted:     '#9E9893',
      tag:           baseTags('#2D5016', '#E8F0DC'),
      section:       baseSections,
      sectionText:   baseSectionText,
    },
  },

  cream: {
    id: 'cream',
    name: 'Cream',
    colors: {
      background:    '#FFFED1',
      surface:       '#FFFFE7',
      surfaceAlt:    '#FFFCBB',
      border:        '#EEE7CA',
      primary:       '#9B6217',
      primaryLight:  '#F5E8C8',
      accent:        '#C7A144',
      text:          '#2C2416',
      textSecondary: '#6B5C3E',
      textMuted:     '#A8926A',
      tag:           baseTags('#9B6217', '#F5E8C8'),
      section:       baseSections,
      sectionText:   baseSectionText,
    },
  },

  bordeaux: {
    id: 'bordeaux',
    name: 'Bordeaux',
    colors: {
      background:    '#FFF8F0',
      surface:       '#FFFFFF',
      surfaceAlt:    '#FDEEE8',
      border:        '#F0D8CC',
      primary:       '#800020',
      primaryLight:  '#F9E0E0',
      accent:        '#A42E4A',
      text:          '#1A0008',
      textSecondary: '#5C2030',
      textMuted:     '#9E7070',
      tag:           baseTags('#800020', '#F9E0E0'),
      section:       baseSections,
      sectionText:   baseSectionText,
    },
  },

  honey: {
    id: 'honey',
    name: 'Honey',
    colors: {
      background:    '#FFFCEE',
      surface:       '#FFFFFF',
      surfaceAlt:    '#FFF8D6',
      border:        '#F0DFA0',
      primary:       '#B8860B',
      primaryLight:  '#FFF3C0',
      accent:        '#C7A144',
      text:          '#1A1400',
      textSecondary: '#5C4A00',
      textMuted:     '#9E8430',
      tag:           baseTags('#B8860B', '#FFF3C0'),
      section:       baseSections,
      sectionText:   baseSectionText,
    },
  },

  coral: {
    id: 'coral',
    name: 'Coral',
    colors: {
      background:    '#FFF5F0',
      surface:       '#FFFFFF',
      surfaceAlt:    '#FEEEE8',
      border:        '#F8D8CC',
      primary:       '#D4583A',
      primaryLight:  '#FDDDD4',
      accent:        '#F57F58',
      text:          '#1A0800',
      textSecondary: '#6B3020',
      textMuted:     '#9E6858',
      tag:           baseTags('#D4583A', '#FDDDD4'),
      section:       baseSections,
      sectionText:   baseSectionText,
    },
  },

  blush: {
    id: 'blush',
    name: 'Blush',
    colors: {
      background:    '#FFF5F8',
      surface:       '#FFFFFF',
      surfaceAlt:    '#FEEEF3',
      border:        '#F0D0DC',
      primary:       '#B84060',
      primaryLight:  '#FDDDE8',
      accent:        '#D7707C',
      text:          '#1A0010',
      textSecondary: '#6B2040',
      textMuted:     '#9E6878',
      tag:           baseTags('#B84060', '#FDDDE8'),
      section:       baseSections,
      sectionText:   baseSectionText,
    },
  },
};

export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
};

export const radius = {
  sm: 6,
  md: 12,
  lg: 20,
};

export const font = {
  sizes: {
    xs: 11,
    sm: 13,
    md: 15,
    lg: 18,
    xl: 22,
    xxl: 28,
  },
  weights: {
    regular: '400' as const,
    medium:  '500' as const,
    semibold:'600' as const,
    bold:    '700' as const,
  },
};
