export interface Router {
  path: string;
  exact: boolean;
  layout: any;
  main: any;
  isPrivate: boolean;
}
