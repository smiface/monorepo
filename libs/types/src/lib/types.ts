export type TTodoItem = {
  id: number;
  title: string;
  isDone: boolean;
};

export type TTodoItemToAdd = {
  title: string;
};

export type TLink = {
  href: string;
  str: string;
};

export type MainLayoutProps = {
  children?: React.ReactNode;
  links: TLink[];
};

export interface HeaderProps {
  links: TLink[] | [];
}
