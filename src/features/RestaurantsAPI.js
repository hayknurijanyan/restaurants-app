export const restaurantsData = [
  {
    name: "Pizza Mizza",
    info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    rating: 10,
    hours: "10:00-19:00",
    location: {
      lat: 40.181926,
      lng: 44.475236,
    },
    reviews: [
      {
        name: "John",
        rating: 10,
        date: "23/03/2021",
        text: "Thank You for service",
      },
    ],
  },
  {
    name: "Tom's Bakery",
    info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    rating: 8,
    hours: "10:00-20:00",
    location: {
      lat: 40.192267,
      lng: 44.508751,
    },
    reviews: [
      {
        name: "Sam",
        text: "Nice Service",
      },
    ],
  },
  {
    name: "Hamov Dolma",
    info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    rating: 6,
    hours: "10:00-16:00",
    location: {
      lat: 40.182578,
      lng: 44.507761,
    },
    reviews: [
      {
        name: "Anna",
        text: "Not bad",
      },
    ],
  },
  {
    name: "Hamburger Club",
    info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    rating: 3,
    hours: "10:00-19:00",
    location: {
      lat: 40.169793,
      lng: 44.469818,
    },
    reviews: [
      {
        name: "John",
        text: "Thank You for service",
      },
    ],
  },
  {
    name: "Jerry's Cheese",
    info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    rating: 8,
    hours: "10:00-20:00",
    location: {
      lat: 40.199617,
      lng: 44.491422,
    },
    reviews: [
      {
        name: "Sam",
        text: "Nice Service",
      },
    ],
  },
  {
    name: "Hamov Sujukh",
    info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    rating: 6,
    hours: "10:00-16:00",
    location: {
      lat: 40.157044,
      lng: 44.509434,
    },
    reviews: [
      {
        name: "Anna",
        text: "Not bad",
      },
    ],
  },
];

export const loadRestaurantsData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(restaurantsData);
    }, 100);
  });
};
