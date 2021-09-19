import { IContactCard } from "../components/modules/cards/ContactCard"
import { IHeroCard } from "../components/modules/cards/HeroCard"
import { IImageCard } from "../components/modules/cards/ImageCard"
import { IEventCard } from "../components/modules/cards/EventCard"
import { IMiniCard } from "../components/modules/cards/MiniCard"

export const dataSundayMeeting: IHeroCard = {
  title: "Sunday Meetings",
  subtitle: "Maples 3rd Ward",
  paragraph: "Schedule, Broadcasts & Sign Ups",
  image: {
    src: "/images/hero-cards/church-building.webp",
    alt: "Meetinghouse",
  },
  button: {
    text: "View",
    link: {
      url: "/sunday",
    },
  },
  type: "dark",
}

/* move inactive events to the commented out section at the bottom */
export const dataInfoCards: IEventCard[] = [
  {
    title: "October 2021 General Conference",
    date: new Date("October 2, 2021 10:00:00"),
    image: {
      src: "/images/events/general-conference.jpg",
    },
    button: {
      modal: {
        type: "event",
        data: {
          title: "October 2021 General Conference",
          subtitle: "Everyone",
          image: {
            src: "/images/events/general-conference.jpg",
          },
          date: new Date("October 2, 2021 14:30:00"),
          duration: 120,
          location: "General Broadcast",
          details:
            "We welcome you to participate in the general conference of The Church of Jesus Christ of Latter-day Saints happening October 2–3, 2021. Join with millions worldwide to hear messages about the Savior Jesus Christ from living prophets and apostles.\n\nThe general conference global broadcast will originate from the Conference Center in Salt Lake City, Utah, USA. The conference consists of the following five sessions. The sessions at the Conference Center will not be open to the public.\n\nSaturday, October 2, at 10 a.m. mountain daylight time (MDT).\nSaturday, October 2, at 2 p.m. MDT.\nSaturday, October 2, at 6 p.m. MDT.\nSunday, October 3, at 10 a.m. MDT.\nSunday, October, at 2 p.m. MDT.",
          button: {
            text: "More Details",
            link: {
              url: "https://newsroom.churchofjesuschrist.org/event/october-2021-general-conference",
              external: true,
            },
          },
        },
      },
    },
    hidden: false,
  },
  {
    title: "Tithing Settlement",
    date: new Date("October 17, 2021 00:00:00"),
    image: {
      src: "/images/events/tithing-settlement.jpg",
    },
    button: {
      modal: {
        type: "event",
        data: {
          title: "Tithing Settlement",
          subtitle: "More details to come",
          image: {
            src: "/images/events/tithing-settlement.jpg",
          },
          date: new Date("October 17, 2021 00:00:00"),
          duration: 0,
          location: "Bishop's Office",
          details:
            "Tithing settlement is an opportunity for each ward member to meet with the bishop to make sure his or her donations records are correct and to declare to the bishop his or her tithing status. It gives the bishop an opportunity to discuss with families the principle of tithing, encourage a generous fast offering, and discuss other financial and spiritual matters.",
          // button: {
          //   text: "More Details",
          //   link: {
          //     url: "https://newsroom.churchofjesuschrist.org/event/october-2021-general-conference",
          //     external: true,
          //   },
          // },
        },
      },
    },
    hidden: false,
  },
]

export const dataFaceCards: IContactCard[] = [
  {
    title: "Bishop\xa0Harman",
    subtitle: "Bishop",
    images: [
      {
        src: "/images/face-cards/bishop.webp",
        alt: "Bishop\xa0Harman",
        width: 100,
        height: 100,
      },
    ],
    button: {
      text: "Schedule",
      link: {
        url: "https://calendly.com/ssr3-bishop/bishop",
        calendly: true,
      },
    },
    hidden: false,
  },
  {
    title: "Bro.\xa0Wheeler or Bro.\xa0Hammon",
    subtitle: "Counselor",
    images: [
      {
        src: "/images/face-cards/first-counselor.webp",
        alt: "Bro.\xa0Wheeler",
        width: 100,
        height: 100,
      },
      {
        src: "/images/face-cards/second-counselor.webp",
        alt: "Bro.\xa0Hammon",
        width: 100,
        height: 100,
      },
    ],
    button: {
      text: "Schedule",
      link: {
        url: "https://calendly.com/ssr3rdward/counselor",
        calendly: true,
      },
    },
    hidden: false,
  },
]

export const dataMiniCards: IMiniCard[] = [
  {
    title: "Temple Recommend",
    subtitle: "Interview",
    button: {
      text: "Schedule",
      link: [
        {
          url: "https://calendly.com/ssr3rdward/temple",
          label: { text: "Expired less than 6 months" },
          calendly: true,
        },
        {
          url: "https://calendly.com/ssr3-bishop/temple",
          label: { text: "Expired 6 months or more" },
          calendly: true,
        },
      ],
    },
    hidden: false,
  },
  {
    title: "Youth Interview",
    subtitle: "Interview",
    button: {
      text: "Schedule",
      link: [
        {
          url: "https://calendly.com/ssr3rdward/youth-interview",
          label: { text: "Ages 12-15" },
          calendly: true,
        },
        {
          url: "https://calendly.com/ssr3-bishop/youth",
          label: { text: "Ages 16-17" },
          calendly: true,
        },
      ],
    },
    hidden: false,
  },
  {
    title: "Bishopric Visit",
    subtitle: "Visit",
    button: {
      text: "Schedule",
      link: {
        url: "https://calendly.com/ssr3rdward/bishopric-visit",
        calendly: true,
      },
    },
    hidden: false,
  },
]

export const dataImageCards: IImageCard[] = [
  {
    title: "New Move-in",
    subtitle: "Welcome",
    paragraph: "Welcome! The bishop would like to get to know you better and welcome you to the ward.",
    image: {
      src: "/images/image-cards/new-movein.webp",
      alt: "New Move-in",
    },
    button: {
      text: "Schedule",
      link: {
        url: "https://calendly.com/ssr3-bishop/new-move-in",
        calendly: true,
      },
    },
    hidden: false,
  },
  {
    title: "Temple & Family History",
    subtitle: "Activities",
    paragraph:
      "Sign up for the opportunity to have the basket in your home. Find resources and activities to help your family get involved with the temple and family history.",
    image: {
      src: "/images/image-cards/temple-and-family-history.webp",
      alt: "New Move-in",
    },
    button: {
      text: "Learn More",
      link: {
        url: "/temple-family-history",
        calendly: false,
      },
    },
    hidden: false,
  },
  {
    title: "Welfare & Service",
    subtitle: "Where Charity Never Faileth",
    paragraph: "View information about all of the upcoming service opportunities this year.",
    image: {
      src: "/images/image-cards/welfare-and-service.png",
      alt: "The Lord's Vineyard",
    },
    button: {
      text: "Learn More",
      link: {
        url: "/welfare",
        calendly: false,
      },
    },
    hidden: false,
  },
  {
    title: "Young Women",
    subtitle: "A Great Work",
    paragraph: "Find information about what we are doing in our Young Women's group.",
    image: {
      src: "/images/young-women/background.jpg",
    },
    button: {
      text: "Learn More",
      link: {
        url: "https://sites.google.com/view/maples3yw",
        external: true,
      },
    },
    hidden: false,
  },
  {
    title: "Ward Mission",
    subtitle: "Inspire and Invite Others to Come Unto Christ",
    paragraph: "Find out how to help members and friends of other faiths embrace the restored gospel.",
    image: {
      src: "/images/ward-mission/ward-mission.png",
      alt: "Come Unto Christ",
    },
    button: {
      text: "Learn More",
      link: {
        url: "/ward-mission",
        calendly: false,
      },
    },
    hidden: false,
  },
]

/*
  {
    title: "Bishop Mobile",
    date: new Date("July 15, 2021 17:00:00"),
    image: {
      src: "/images/events/bishop-mobile.png",
    },
    button: {
      modal: {
        type: "event",
        data: {
          title: "Bishop Mobile",
          subtitle: "Ward Activity",
          image: {
            src: "/images/events/bishop-mobile.png",
          },
          date: new Date("July 15, 2021 17:00:00"),
          duration: 90,
          location: "Watch for us outside your home",
          details:
            "Members of the bishopric will be driving around the neighborhoods handing out candy to the primary and youth in the ward. We'll start in the entry roundabout at Serengeti Springs and work through the ward neighborhoods as we usually do.",
        },
      },
    },
    hidden: true,
  },
  {
    title: "Relief Society Ministering Interviews",
    date: new Date("June 13, 2021 14:30:00"),
    image: {
      src: "/images/events/relief-society.png",
    },
    button: {
      modal: {
        type: "event",
        data: {
          title: "Ministering Interviews",
          subtitle: "Relief Society",
          image: {
            src: "/images/events/relief-society.png",
          },
          date: new Date("June 13, 2021 14:30:00"),
          duration: 120,
          location: "Relief Society Room",
          details: "Please sign-up for a time to come and visit with one of the members of the Relief Society Presidency to see how ministering is going.",
          button: {
            text: "Sign Up",
            link: {
              url: "https://forms.gle/a7pURbJ6AXEuSh7E6",
              external: true,
            },
          },
        },
      },
    },
    hidden: true,
  }
  {
    title: "Gail Miller Homeless Resource Center Sept. Assignment",
    date: new Date("September 7, 2021 16:30:00"),
    image: {
      src: "/images/welfare/gail-miller.png",
    },
    button: {
      modal: {
        type: "event",
        data: {
          title: "September Assignment",
          subtitle: "Help Prepare Food for Those in Need",
          image: {
            src: "/images/welfare/gail-miller.png",
          },
          date: new Date("September 7, 2021 16:30:00"),
          duration: 120,
          location: "242 West Paramount Avenue\nSalt Lake City UT, 84115",
          details: "See details on sign-up form",
          button: {
            text: "Sign Up",
            link: {
              url: "https://forms.gle/txSJvcFEwubXVzGZ7",
              external: true,
            },
          },
        },
      },
    },
    hidden: true,
  },
  {
    title: "Deseret Soap Factory August Assignment",
    date: new Date("August 16, 2021 12:00:00"),
    image: {
      src: "/images/welfare/soap-factory.png",
    },
    button: {
      modal: {
        type: "event",
        data: {
          title: "August Assignment",
          subtitle: "Help make and package soap",
          image: {
            src: "/images/welfare/soap-factory-landscape.jpg",
          },
          date: new Date("August 16, 2021 12:00:00"),
          duration: 240,
          location: "3602 S 7200 W, Magna, UT 84044",
          details: "See details on sign-up form",
          button: {
            text: "Sign Up",
            link: {
              url: "https://forms.gle/S1QxmgjiLxbs9sRs8",
              external: true,
            },
          },
        },
      },
    },
    hidden: true,
  },
  {
    title: "Vincent De Paul Service July Assignment",
    date: new Date("July 28, 2021 15:00:00"),
    image: {
      src: "/images/welfare/st-vincent-de-paul.png",
    },
    button: {
      modal: {
        type: "event",
        data: {
          title: "Vincent De Paul July Assignment",
          subtitle: "Help Prepare Food for Those in Need",
          image: {
            src: "/images/welfare/st-vincent-de-paul.png",
          },
          date: new Date("July 28, 2021 15:00:00"),
          duration: 120,
          location: "437 West 200 South\nSalt Lake City, UT 84101",
          details:
            "Parking available in fenced lot east of building\n\nYouth 12 and older welcome with adult supervision\n\nAprons and plastic gloves provided\n\nAdditional details on sign-up form",
          button: {
            text: "Sign Up",
            link: {
              url: "https://forms.gle/CSgBwoNDheMsVW597",
              external: true,
            },
          },
        },
      },
    },
    hidden: true,
  },
  {
    title: "ARUP Blood Drive",
    date: new Date("July 22, 2021 15:00:00"),
    image: {
      src: "/images/welfare/arup-donate4life.png",
    },
    button: {
      modal: {
        type: "event",
        data: {
          title: "ARUP Blood Drive",
          subtitle: "Give local - Save local",
          image: {
            src: "/images/welfare/arup-flag-local.png",
          },
          date: new Date("July 22, 2021 15:00:00"),
          duration: 240,
          location: "Sunset Ridge Stake Center\n8107 South 6700 West\nWest Jordan, UT 84081\nin the Cultural Hall",
          details: 'Just click "Sign Up", then click "Schedule" from ARUP\'s website. The need for blood never takes a vacation!',
          button: {
            text: "Sign Up",
            link: {
              url: "https://arupbloodservices.org/index.cfm?group=op&expand=16642&zc=84084",
              external: true,
            },
          },
        },
      },
    },
    hidden: true,
  },
  {
    title: "Building Cleaning",
    date: new Date("July 31, 2021 10:00:00"),
    image: {
      src: "/images/events/cleaning.png",
    },
    button: {
      modal: {
        type: "event",
        data: {
          title: "Building Cleaning",
          image: {
            src: "/images/events/cleaning.png",
          },
          date: new Date("July 31, 2021 10:00:00"),
          duration: 60,
          location: "Ward Building",
          details:
            "We have the opportunity to clean the building. Please sign up and bring your family to help clean the building. Supplies will be provided upon arrival.",
          button: {
            text: "Sign Up",
            link: {
              url: "https://calendly.com/ssr3rdward/cleaning",
              external: true,
            },
          },
        },
      },
    },
    hidden: true,
  },
*/
