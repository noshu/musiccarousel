export type songType = {
  artist: string;
  title: string;
  rating: number;
  cover: any;
};
export const songs: songType[] = [
  {
    artist: "Shironamhin",
    title: "Ei Obelay",
    rating: 5,
    cover: require("../assets/images/shironamhin.jpeg"),
  },
  {
    artist: "The Tree",
    title: "Onno Aloy",
    rating: 5,
    cover: require("../assets/images/thetree.jpeg"),
  },
  {
    artist: "AFTERMATH",
    title: "UTHSORGO",
    rating: 4,
    cover: require("../assets/images/aftermath.jpeg"),
  },
  {
    artist: "Arekta Rock Band",
    title: "Chaap (চাপ)",
    rating: 3,
    cover: require("../assets/images/arektarockband.jpeg"),
  },
  {
    artist: "Meghdol",
    title: "Amar Sohore",
    rating: 5,
    cover: require("../assets/images/meghdol.jpeg"),
  },
];
