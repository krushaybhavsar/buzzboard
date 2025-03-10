export enum SiteScreens {
  LANDING = '/',
}

export const SiteMap: Record<SiteScreens, SiteMapLink> = {
  [SiteScreens.LANDING]: {
    linkType: 'link',
    displayName: 'Home',
    slug: SiteScreens.LANDING,
    children: {},
    navbarSettings: {
      showNavbar: true,
    },
  },
};

export class SiteMapLink {
  slug: string;
  linkType: 'hash' | 'link' | 'custom';
  displayName: string;
  children: { [key: string]: SiteMapLink };
  navbarSettings?: {
    index?: number;
    showInNavbar?: boolean;
    showNavbar?: boolean;
    style?: 'action' | 'default';
    externalLinkURL?: string;
  };
  authProtected?: boolean;
  externalLink?: boolean;

  constructor(
    slug: string,
    linkType: 'hash' | 'link' | 'custom',
    displayName: string,
    children: { [key: string]: SiteMapLink },
    navbarSettings?: {
      index?: number;
      showInNavbar?: boolean;
      showNavbar?: boolean;
      style?: 'action' | 'default';
      externalLinkURL?: string;
    },
    authProtected?: boolean,
    externalLink?: boolean,
  ) {
    this.slug = slug;
    this.linkType = linkType;
    this.displayName = displayName;
    this.children = children;
    this.navbarSettings = {
      index: 0,
      showNavbar: false,
      showInNavbar: false,
      style: 'default',
      ...navbarSettings,
    };
    this.authProtected = authProtected ?? false;
    this.externalLink = externalLink ?? false;
  }
}
