import movieimg from'../images/recommendedmovie.jpg';
import restaurantimg from'../images/recommendedrestaurant3.jpg';
import placeimg from'../images/recommendedplace.jpg';

export default[
    {
        id: 1,
        image: movieimg,
        type: "Movie",
        caption: "Movie Night",
        itemname: "Spider-Man: No Way Home ",
        itemdescription: "Watch the latest spiderman movie, staring Tom Holland and Benedict Cumberbatch"
    },
    {
        id: 2,
        image: restaurantimg,
        type: "Restaurant",
        caption: "Power Breakfast",
        itemname: "The Original Pancake House"
    },
    {
        id: 3,
        image: placeimg,
        type: "Place",
        caption: "Pet Care",
        itemname: "Woof Petshop"
    },
]