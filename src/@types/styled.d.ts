import 'styled-components';
declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;
    colors: {
      black: string;
      blue: string;
      white: string;
      gray: string;
      dark: string;
      dark_light: string;
      light: string;
      black: string;
      gray: string;
      sucess: string;
      info: string;
      warning: string;
      danger: string;
    };
  }
}
