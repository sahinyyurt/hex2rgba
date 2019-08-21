import { Rgba } from "../models/Rgba";

export const hexToDec = (hex: string) : number => {
    return parseInt(hex, 16);
};

export const isNum = (n: any): boolean => {
    return !isNaN(parseFloat(n)) && isFinite(n);
};

export const sliceHash = (hex: string): string => {
    return hex.charAt(0) === '#' ? hex.slice(1) : hex
};

export const parseHex = (hex: string, alpha = 0) : Rgba => {
    const isShort = (
      hex.length === 3
      || hex.length === 4
    );

    const isLong = hex.length === 6;

    if(!isLong && !isShort) throw new Error('hex is invalid');
    
    const hexRed = isShort ? `${hex.slice(0, 1)}${hex.slice(0, 1)}` : hex.slice(0, 2);
    const hexGreen = isShort ? `${hex.slice(1, 2)}${hex.slice(1, 2)}` : hex.slice(2, 4);
    const hexBlue = isShort ? `${hex.slice(2, 3)}${hex.slice(2, 3)}` : hex.slice(4, 6);
  
    const rgb: Rgba =  {
      Red: hexToDec(hexRed),
      Green: hexToDec(hexGreen),
      Blue: hexToDec(hexBlue),
      Alpha: alpha
    };
    
    return rgb;
  };