import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    pointColor: {
      red: string;
      orange: string;
      blue: string;
    };
    textColor: string;
    navColor: string;
    backgroundColor: {
      grey: string;
      white: string;
    };

    grey: string;
    black: {
      darker: string;
      lighter: string;
    };
    white: {
      darker: string;
      lighter: string;
    };
  }
}
