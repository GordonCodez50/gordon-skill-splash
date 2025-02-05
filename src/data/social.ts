
export type SocialLink = {
  id: string;
  platform: string;
  url: string;
  active: boolean;
  icon: string;
};

export const socialLinks: SocialLink[] = [
  {
    id: "instagram",
    platform: "Instagram",
    url: "https://instagram.com/gordonedacherie",
    active: true,
    icon: "instagram"
  },
  {
    id: "twitter",
    platform: "Twitter",
    url: "https://twitter.com/gordonedacherie",
    active: true,
    icon: "twitter"
  },
  {
    id: "linkedin",
    platform: "LinkedIn",
    url: "https://linkedin.com/in/gordonedacherie",
    active: true,
    icon: "linkedin"
  },
  {
    id: "facebook",
    platform: "Facebook",
    url: "https://facebook.com/gordonedacherie",
    active: false,
    icon: "facebook"
  }
];
