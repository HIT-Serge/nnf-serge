

declare module '*.png' {
    const value: any;
    export = value;
}

declare module "*.jpg" {
    import { ImageProps } from "react-native";
    const value: ImageProps | { uri: string};
    // const value: string | { uri: string}; 
    export = value;
}


