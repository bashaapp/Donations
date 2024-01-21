import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export const COLORS = {
    primary: "#263038", //primary
    secondary:'#d8ecf5',
    transparentPrimary: 'rgba(38,48,56)',
    darkGray2: "#757D85",
    gray: "#898B9A",
    gray2: "#BBBDC1",
    gray3: '#FAFAFA',
    lightGray1: "#DDDDDD",
    lightGray2: "#F5F5F8",
    white: '#FFFFFF',
    black: "#000000",
    red: "#FF1717",
    green: "#27AE60",
    orange:'#e5b00d'

};
export const SIZES = {
  // global sizes
    base: 8,
    base:10,
    font: 14,
    radius: 15,
    radius2:30,
    radius3:50,
    padding: 30,
    padding2:50,

    // font sizes
    largeTitle: 40,
    h1: 22,
    h2: 18,
    h3: 16,
    h4: 14,
    h5: 12,
    body1: 30,
    body2: 22,
    body3: 16,
    body4: 14,
    body5: 12,

    // app dimensions
    width,
    height
};
export const FONTS = {
    largeTitle: {fontSize: SIZES.largeTitle },
    h1: {fontSize: SIZES.h1, lineHeight: 36 },
    h2: { fontSize: SIZES.h2, lineHeight: 30 },
    h3: { fontSize: SIZES.h3, lineHeight: 22 },
    h4: { fontSize: SIZES.h4, lineHeight: 22 },
    h5: { fontSize: SIZES.h5, lineHeight: 22 },
    body1: {  fontSize: SIZES.body1, lineHeight: 36 },
    body2: { fontSize: SIZES.body2, lineHeight: 30 },
    body3: { fontSize: SIZES.body3, lineHeight: 22 },
    body4: { fontSize: SIZES.body4, lineHeight: 22 },
    body5: { fontSize: SIZES.body5, lineHeight: 22 },
};

const appTheme = { COLORS, SIZES, FONTS };

export default appTheme;
