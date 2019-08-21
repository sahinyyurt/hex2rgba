import { sliceHash, isNum, parseHex } from "./utils";

export const hexToRgba = (hex: string, alpha: any) : string => {
    const noHashHex = sliceHash(hex);
    const parsedAlpha:number = isNum(alpha) ? alpha : parseFloat(alpha);
    const rgba = parseHex(noHashHex, parsedAlpha);

    return `rgba(${rgba.Red}, ${rgba.Green}, ${rgba.Blue}, ${rgba.Alpha})`;
};
