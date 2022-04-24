import { IContactCard } from "../components/modules/cards/ContactCard"
import { IHeroCard } from "../components/modules/cards/HeroCard"
import { IImageCard } from "../components/modules/cards/ImageCard"
import { IAnnouncement } from "../components/modules/announcements/Announcement"
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

export const dataAnnouncements: IAnnouncement[] = [
  {
    title: "Young Adult Devotional with Pres. & Sis. Nelson",
    date: new Date("May 15, 2022 14:00:00"),
    description: "The Lord's prophet of the Church of Jesus Christ of Latter Day Saints, President Russel M. Nelson and Sister Wendy W. Nelson will be speaking at the Worldwide Devotional for young adults form the Conference Center.",
    button: {
      text: "Broadcast",
      link: {
        url: "https://newsroom.churchofjesuschrist.org/event/worldwide-devotional-for-young-adults-may-2022",
        external: true
      }
    }
  }
]

export const dataFaceCards: IContactCard[] = [
  {
    title: "Bishop\xa0Budge",
    subtitle: "Bishop",
    images: [
      {
        src: "/images/face-cards/bishop.jpg",
        alt: "Bishop\xa0Budge",
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
    title: "Bro.\xa0Nichols or Bro.\xa0Smith",
    subtitle: "Counselor",
    images: [
      {
        src: "/images/face-cards/first-counselor.jpg",
        alt: "Bro.\xa0Nichols",
        width: 100,
        height: 100,
      },
      {
        src: "/images/face-cards/second-counselor.jpg",
        alt: "Bro.\xa0Smith",
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
