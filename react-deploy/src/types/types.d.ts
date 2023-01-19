declare module "*.css" {
  const styles: { [key: string]: string };
  export = styles;
}
declare const window: any;

interface window {
  __token__: string;
}

declare module "*.jpeg";

declare module "*.png";
