/* eslint-disable max-len */
import colors from './colors.js';
import hexToRGB from './utils/hexToRGB.js';

const variables = {
  /**
   * Fonts & basic variables.
   */
  defaultFont:
    '-apple-system, BlinkMacSystemFont,"Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell,"Helvetica Neue", sans-serif',
  defaultFontSize: '13px',
  defaultLineHeight: '1.4',
  editorHtmlFont: 'Menlo, Consolas, monaco, monospace',
  editorFontSize: '16px',
  defaultBlockMargin: '28px', // This value provides a consistent, contiguous spacing between blocks'
  textEditorFontSize: '15px',
  editorLineHeight: '1.8',
  mobileTextMinFontSize: '16px', // Any font size below 16px will cause Mobile Safari to "zoom in"

  /**
     * Grid System.
     https:/'/make.wordpress.org/design/2019/10/31/proposal-a-consistent-spacing-system-for-wordpress',
    */
  gridUnit: 8,
  get gridUnit05() {
    return `${0.5 * this.gridUnit}px`;
  }, // 4p',
  get gridUnit10() {
    return `${1 * this.gridUnit}px`;
  }, // 8p',
  get gridUnit15() {
    return `${1.5 * this.gridUnit}px`;
  }, // 12p',
  get gridUnit20() {
    return `${2 * this.gridUnit}px`;
  }, // 16p',
  get gridUnit30() {
    return `${3 * this.gridUnit}px`;
  }, // 24p',
  get gridUnit40() {
    return `${4 * this.gridUnit}px`;
  }, // 32p',
  get gridUnit50() {
    return `${5 * this.gridUnit}px`;
  }, // 40p',
  get gridUnit60() {
    return `${6 * this.gridUnit}px`;
  }, // 48p',

  /**
   * Dimensions.
   */
  iconSize: '24px',
  buttonSize: '36px',
  buttonSizeSmall: '24px',
  headerHeight: '60px',
  get panelHeaderHeight() {
    return this.gridUnit60;
  },
  navSidebarWidth: '300px',
  adminBarHeight: '32px',
  adminBarHeightBig: '46px',
  adminSidebarWidth: '160px',
  adminSidebarWidthBig: '190px',
  adminSidebarWidthCollapsed: '36px',
  modalMinWidth: '360px',
  spinnerSize: '18px',

  /**
   * Shadows.
   */
  get shadowPopover() {
    return `0 2px 6px ${hexToRGB(colors.black, 0.05)}`;
  },
  get shadowModal() {
    return `0 10px 10px ${hexToRGB(colors.black, 0.25)}`;
  },

  /**
   * Editor widths.
   */
  sidebarWidth: '280px',
  contentWidth: '840px',
  wideContentWidth: '1100px',
  widgetAreaWidth: '700px',

  /**
   * Block & Editor UI.
   */
  get blockToolbarHeight() {
    return this.gridUnit60;
  },
  borderWidth: '1px',
  borderWidthFocus: '2px', // This exists as a fallback, and is ideally overridden by var(--wp-admin-border-width-focus) unless in some SASS,math cases.
  borderWidthTab: '4px',
  helptextFontSize: '12px',
  radiusRound: '50%',
  radiusBlockUi: '2px',
  radioInputSize: '20px',
  radioInputSizeSm: '24px', // Width & height for small viewports'

  /**
   * Block paddings.
   */
  // Padding for blocks with a background color (e.g. paragraph or group).
  blockBgPaddingV: '1.25em',
  blockBgPaddingH: '2.375em',

  /**
   * React Native specific.
   * These variables do not appear to be used anywhere else.
   */

  // Dimensions.
  mobileHeaderToolbarHeight: '44px',
  mobileFloatingToolbarHeight: '44px',
  mobileFloatingToolbarMargin: '8px',
  mobileColorSwatch: '48px',

  // Block UI.
  mobileBlockToolbarHeight: '44px',
  dimmedOpacity: '1',
  blockEdgeToContent: '16px',
  solidBorderSpace: '12px',
  dashedBorderSpace: '6px',
  blockSelectedMargin: '3px',
  blockSelectedBorderWidth: '1px',
  blockSelectedPadding: '0',
  blockSelectedChildMargin: '5px'
};

export default variables;
