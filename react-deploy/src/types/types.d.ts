declare module "*.css" {
  const styles: { [key: string]: string };
  export = styles;
}
declare const window: any;

interface Window {
  __token__: string;
}

declare module "*.jpeg";

declare module "*.png";
