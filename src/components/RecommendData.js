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
        itemdescription: "Watch the latest spiderman movie, staring Tom Holland and Benedict Cumberbatch",
        itemlocation: "Available on Imax"
    },
    {
        id: 2,
        image: restaurantimg,
        type: "Restaurant",
        caption: "Power Breakfast",
        itemname: "The Original Pancake House",
        itemdescription: "Start your day with a perfect breakfast from the OPH",
        itemlocation: "5th street, 26th avenue, NewYork, USA"
    },
    {
        id: 3,
        image: placeimg,
        type: "Place",
        caption: "Pet Care",
        itemname: "Woof Petshop",
        itemdescription: "Treat your pet to a nice day at woof petshop",
        itemlocation: "8th street, 26th drive, LasVegas, USA"

    },
]