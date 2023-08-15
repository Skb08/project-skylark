export const socials = [
  {
    name: "LinkedIn",
    imgSrc: "/images/navbar/linkedin.png",
    link: "https://www.linkedin.com/in/",
  },
  {
    name: "facebook",
    imgSrc: "/images/navbar/facebook.png",
    link: "https://www.facebook.com/",
  },
  {
    name: "youtube",
    imgSrc: "/images/navbar/youtube.png",
    link: "https://www.youtube.com/",
  },
];

export const navbarItems = [
  {
    value: "Home",
    link: "/",
    dropItem: [],
  },
  {
    value: "Brochue",
    link: "/brochure",
    dropItem: [],
  },
  {
    value: "RC plane",
    link: "/#navbar",
    dropItem: [
      {
        value: "Members",
        link: "/planes/members",
      },
      {
        value: "Projects",
        link: "/planes/",
      },
    ],
  },
  {
    value: "Rocket",
    link: "/#navbar",
    dropItem: [
      {
        value: "Members",
        link: "/members/rockets",
      },
      {
        value: "Projects",
        link: "/rockets/",
      },
    ],
  },
  {
    value: "Drone",
    link: "/#navbar",
    dropItem: [
      {
        value: "Members",
        link: "/members/drones",
      },
      {
        value: "Projects",
        link: "/drones/",
      },
    ],
  },
  {
    value: "Gallery",
    link: "/gallery",
    dropItem: [],
  },
  {
    value: "Executive Body",
    link: "/executives",
    dropItem: [],
  },
  {
    value: "Alumni",
    link: "/alumni",
    dropItem: [],
  },
  {
    value: "Sponsorship and Management",
    link: "/#navbar",
    dropItem: [
      {
        value: "PR Team",
        link: "/members/pr",
      },
      {
        value: "Design and Management",
        link: "/members/design-management",
      },
      {
        value: "Sponsors and Collaborators",
        link: "/collaborations",
      },
    ],
  },
];
