export interface NavigationItem {
  label: string;
  href: string;
  isExternal?: boolean;
}

export const navigationLinks: NavigationItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/#about' },
  { label: 'Projects', href: '/#projects' },
  { label: 'Skills', href: '/#skills' },
  { label: 'Journey', href: '/#journey' },
  { label: 'Contact', href: '/#contact' },
];

export const pageRoutes: NavigationItem[] = [
  { label: 'All Projects', href: '/projects' },
  { label: 'About Owais', href: '/about' },
  { label: 'Contact', href: '/contact' },
];
