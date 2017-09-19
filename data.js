var timeNow = new Date();

const headerNavItems = [
  { name: "Home", href:"https://ru.wikipedia.org/wiki/%D0%94%D0%B6%D0%BE%D0%BD_%D0%94%D0%BE%D1%83" },
  { name: "About Us", href:"https://en.wikipedia.org/wiki/The_Areas_of_My_Expertise" },
  { name: "Demo Page", href:"http://www.nvidia.com.ua/object/geforce-experience-ru.html" },
  { name: "Contact Page", href:"https://www.theatlantic.com/education/" }
];

const allNews = [
  {
    id: "n1",
    title: "Prince Carl Philip, Duke of Värmland",
    shortDescription: "On Friday, the proud parents returned home to Villa Solbacken, posing for a photo with their new bundle of joy at the hospital before leaving. Sofia looked incredible in the photo, showing off an impressive post-baby body merely one day after giving birth. The royal wore a white top, grey jacket and casual jeans.",
    fullDescription: "On Friday, the proud parents returned home to Villa Solbacken, posing for a photo with their new bundle of joy at the hospital before leaving. Sofia looked incredible in the photo, showing off an impressive post-baby body merely one day after giving birth. The royal wore a white top, grey jacket and casual jeans. Last summer, Sofia spoke about the joys of motherhood, telling Sweden's Svenskdam: \"It's amazing. Having children changes your whole life.\" She also noted, \"[Alexander] is very sweet and well-behaved.\" Carl Philip also discussed his new role as a father, telling the outlet that it took \"some adjustment, of course, but it is still absolutely amazing and wonderful\".",
    imgLink: "http://peopledotcom.files.wordpress.com/2017/04/prince-alexander-21.jpg?crop=250px%2C0px%2C1000px%2C1500px&resize=750%2C1125",
    comments: [
      { id: "c1", comment: "Some Comment 1", createdAt: timeNow },
      { id: "c2", comment: "Some Comment 2", createdAt: timeNow },
      { id: "c3", comment: "Some Comment 3", createdAt: timeNow }
    ],
    createdAt: timeNow
  },
  {
    id: "n2",
    title: "Vuelta a Espana: Chris Froome maintains lead before deciding stage",
    shortDescription: "Saturday\'s 117.5km route, which ends with a gruelling 13.2km climb up the Alto de l\'Angliru, precedes Sunday\'s processional stage to Madrid.Belgium\'s Thomas de Gendt won stage 19 in Gijon on Friday by reeling in Ivan Garcia Cortina of Spain.Garcia faded to finish third, with Colombia\'s Jarlinson Pantano in second.",
    fullDescription: "Saturday\'s 117.5km route, which ends with a gruelling 13.2km climb up the Alto de l\'Angliru, precedes Sunday\'s processional stage to Madrid.Belgium\'s Thomas de Gendt won stage 19 in Gijon on Friday by reeling in Ivan Garcia Cortina of Spain.Garcia faded to finish third, with Colombia\'s Jarlinson Pantano in second.",
    imgLink: "http://ichef.bbci.co.uk/onesport/cps/800/cpsprodpb/BED4/production/_97725884_vuekltra.jpg",
    comments: [
      { id: "c1", comment: "Some Comment 1", createdAt: timeNow },
      { id: "c2", comment: "Some Comment 2", createdAt: timeNow },
      { id: "c3", comment: "Some Comment 3", createdAt: timeNow }
    ],
    createdAt: timeNow
  },
  {
    id: "n3",
    title: "Tracking down the whale-shark highway",
    shortDescription: "Did you know that August 30 is International Whale Shark Day? Whale sharks are the largest fishes on Earth, growing up to 18 meters (60 feet) long, but they feed mostly on tiny drifting animals such as copepods and, occasionally, small fish such as anchovies. To satisfy their immense appetites, whale sharks travel long distances to find dense swarms of prey.",
    fullDescription: "Did you know that August 30 is International Whale Shark Day? Whale sharks are the largest fishes on Earth, growing up to 18 meters (60 feet) long, but they feed mostly on tiny drifting animals such as copepods and, occasionally, small fish such as anchovies. To satisfy their immense appetites, whale sharks travel long distances to find dense swarms of prey.",
    imgLink: "https://www.sciencedaily.com/images/2017/08/170830155506_1_540x360.jpg",
    comments: [
      { id: "c1", comment: "Some Comment 1", createdAt: timeNow },
      { id: "c2", comment: "Some Comment 2", createdAt: timeNow },
      { id: "c3", comment: "Some Comment 3", createdAt: timeNow }
    ],
    createdAt: timeNow
  },
  {
    id: "n4",
    title: "People Mover passengers get free wi-fi",
    shortDescription: "Durban\'s People Mover bus passengers are eager to log on to the new on-board wi-fi system launched by the eThekwini Municipality on Thursday.Ten buses will be fitted with routers, to give passengers who have registered online, access to 250MB free daily.",
    fullDescription: "Durban\'s People Mover bus passengers are eager to log on to the new on-board wi-fi system launched by the eThekwini Municipality on Thursday.Ten buses will be fitted with routers, to give passengers who have registered online, access to 250MB free daily.",
    imgLink: "https://image.iol.co.za/image/1/process/620x349?source=https://inm-baobab-prod-eu-west-1.s3.amazonaws.com/public/inm/media/image/97835016.JPG",
    comments: [
      { id: "c1", comment: "Some Comment 1", createdAt: timeNow },
      { id: "c2", comment: "Some Comment 2", createdAt: timeNow },
      { id: "c3", comment: "Some Comment 3", createdAt: timeNow }
    ],
    createdAt: timeNow
  },
  {
    id: "n5",
    title: "North Korea urges nuclear build-up on anniversary",
    shortDescription: "North Korea\'s state media marked the nation\'s founding anniversary Saturday with calls for a nuclear arms buildup, in defiance of mounting international sanctions.South Korea\'s military said it was keeping close tabs on the North amid speculation it could stage a missile launch or another nuclear test to mark the 1948 establishment of the Democratic.",
    fullDescription: "North Korea\'s state media marked the nation\'s founding anniversary Saturday with calls for a nuclear arms buildup, in defiance of mounting international sanctions.South Korea\'s military said it was keeping close tabs on the North amid speculation it could stage a missile launch or another nuclear test to mark the 1948 establishment of the Democratic.",
    imgLink: "https://tu9srvbirvvtmjikaw1nlxmtbxnulwnvbs5ha2ftywl6zwqubmv0.g00.msn.com/g00/2_d3d3Lm1zbi5jb20%3D_/TU9SRVBIRVVTMjIkaHR0cHM6Ly9pbWctcy1tc24tY29tLmFrYW1haXplZC5uZXQvdGVuYW50L2FtcC9lbnRpdHlpZC9BQXJ4NXRzLmltZz9oPTUzOSZ3PTcyOCZtPTYmcT02MCZvPWYmbD1mJng9MzY5Jnk9MzQ4JmkxMGMubWFyay5pbWFnZS50eXBl_$/$/$/$/$",
    comments: [
      { id: "c1", comment: "Some Comment 1", createdAt: timeNow },
      { id: "c2", comment: "Some Comment 2", createdAt: timeNow },
      { id: "c3", comment: "Some Comment 3", createdAt: timeNow }
    ],
    createdAt: timeNow
  },
];

const columnNews = {
  popularPostsList: {
    title: "Popular Post",
    items: [
      "Make Money Online",
      "Top 100 Internet Marketing",
      "Tutorial: How to add videos in your post",
      "Sample post unorder list",
      "Sample Post Blockquote"
    ]
  },
  tagsList: {
    title: "Tags",
    items: []
  },
  categoriesList: {
    title: "Categories",
    items: [
      "Enternainment",
      "Fashion",
      "Lifestyle",
      "Parenting",
      "Resources",
      "Videos"
    ]
  },
  archivesList: {
    title: "Archives",
    items: [
      "August 2008",
      "July 2008",
      "June 2008",
      "May 2008",
      "April 2008",
      "March 2008"
    ]
  },
  pagesList: {
    title: "Pages",
    items: [
      "Home",
      "About",
      "Archives",
      "Links",
      "Contact",
      "Sitemap"
    ]
  },
  blogrollList: {
    title: "Blogroll",
    items: [
      "Carlos",
      "Digital Point Forum",
      "Eric's Photo Gallery",
      "Fashion Trends",
      "Google Scoreboard",
      "Marketing Forum"
    ]
  },
  metaList: {
    title: "Meta",
    items: [
      "Login"
    ]
  },
};

// Так неправильно!!!
// const columnNews2 = [
//   {
//     id: "t1",
//     title: "Popular Post",
//     list1: "Make Money Online",
//     list2: "Top 100 Internet Marketing",
//     list3: "Tutorial: How to add videos in your post",
//     list4: "Sample post unorder list",
//     list5: "Sample Post Blockquote"
//   },
//   {
//     id: "t2",
//     title: "Tags"
//   }
//   {
//     id: "t3",
//     title: "Categories",
//     list1: "Enternainment",
//     list2: "Fashion",
//     list3: "Lifestyle",
//     list4: "Parenting",
//     list5: "Resources",
//     list6: "Videos"
//   },
//   {
//     id: "t3",
//     title: "Archives",
//     list1: "August 2008",
//     list2: "July 2008",
//     list3: "June 2008",
//     list4: "May 2008",
//     list5: "April 2008",
//     list6: "March 2008"
//   },
//   {
//     id: "t4",
//     title: "Pages",
//     list1: "Home",
//     list2: "About",
//     list3: "Archives",
//     list4: "Links",
//     list5: "Contact",
//     list6: "Sitemap"
//   },
//   {
//     id: "t5",
//     title: "Blogroll",
//     list1: "Carlos",
//     list2: "Digital Point Forum",
//     list3: "Eric's Photo Gallery",
//     list4: "Fashion Trends",
//     list5: "Google Scoreboard",
//     list6: "Marketing Forum"
//   },
//   {
//     id: "t6",
//     title: "Meta",
//     list1: "Login"
//   },
// ];
