import hexToRGB from './utils/hexToRGB.js';

const colors = {
  // WordPress grays.
  black: '#000', // Use only when you truly need pure black. For UI, use $gray-900.
  gray900: '#1e1e1e',
  gray800: '#2f2f2f',
  gray700: '#757575', // Meets 4.6:1 text contrast against white.
  gray600: '#949494', // Meets 3:1 UI or large text contrast against white.
  gray400: '#ccc',
  gray300: '#ddd', // Used for most borders.
  gray200: '#e0e0e0', // Used sparingly for light borders.
  gray100: '#f0f0f0', // Used for light gray backgrounds.
  white: '#fff',

  // Opacities & additional colors.
  get darkThemeFocus() {
    return this.white;
  },
  get darkGrayPlaceholder() {
    return hexToRGB(this.gray900, 0.62);
  },
  get mediumGrayPlaceholder() {
    return hexToRGB(this.gray900, 0.55);
  },
  get lightGrayPlaceholder() {
    return hexToRGB(this.white, 0.65);
  },

  // Alert colors.
  alertYellow: '#f0b849',
  alertRed: '#cc1818',
  alertGreen: '#4ab866'
};

export default colors;
