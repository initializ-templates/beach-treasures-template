import picture1 from '../image/place1.jpg'
import picture2 from '../image/another.jpg'
import picture3 from '../image/place4.jpg'
import picture4 from '../image/beautiful.jpg'
import picture5 from '../image/discover1.jpg'
import picture6 from '../image/discover2.jpg'
import picture7 from '../image/discover3.jpg'
import picture8 from '../image/discover4.jpg'
import picture9 from '../image/landscape.jpg';
import picture10 from '../image/palm.jpg'
import { Link } from 'react-router-dom'


// export const links = [
//   {
//     id: 1,
//     url: '/products',
//     text: 'Product',
//     link2: [
//       { link: '/products', id: 1, image: market, title:  'Carbon Reporting', desc: 'Simple accurate emission reporting' },

export const beach = [
  {
    id: 1,
    rank: "1",
    image: picture1,
    name: "Trunk Bay",
    links: [{ link: "/trunk", title: "Learn More" }],
  },
  {
    id: 2,
    rank: "2",
    image: picture2,
    name: "Cala Mariolu",
    links: [{ link: "/cala", title: "Learn More" }],
  },
  {
    id: 3,
    rank: "3",
    image: picture3,
    name: "Meads Bay",
    links: [{ link: "/meady", title: "Learn More" }],
  },
  {
    id: 4,
    rank: "4",
    image: picture4,
    name: "Entalula Beach",
    links: [{ link: "/entalula", title: "Learn More" }],
  },
  ,
  {
    id: 5,
    rank: "5",
    image: picture5,
    name: "Voutoumi Beach",
    links: [{ link: "/voutomi", title: "Learn More" }],
  },
  {
    id: 6,
    rank: "6",
    image: picture6,
    name: "Turquoise Bay",
    links: [{ link: "/turquoise", title: "Learn More" }],
  },
  {
    id: 7,
    rank: "7",
    image: picture7,
    name: "Pink Beach",
    links: [{ link: "/pink", title: "Learn More" }],
  },
  {
    id: 8,
    rank: "8",
    image: picture8,
    name: "Anse Georgette",
    links: [{ link: "/anse", title: "Learn More" }],
  },
  {
    id: 9,
    rank: "9",
    image: picture9,
    name: "Green Lagoon",
    links: [{ link: "/green", title: "Learn More" }],
  },
  {
    id: 10,
    rank: "10",
    image: picture10,
    name: "Horse Shoe Island",
    links: [{ link: "/horse", title: "Learn More" }],
  },
];