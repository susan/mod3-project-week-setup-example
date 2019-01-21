# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command SeaLife.create(or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.creaname: 'Star Warname: 'Lord of the Rings' }])
#   Character.createSeaLife.create(name: 'Luke', movie: movies.first)
Ocean.destroy_all
SeaLife.destroy_all

Ocean.create(
name: "Pacific Ocean",
image: "http://gowild.wwf.org.uk/wp-content/uploads/PacificOcean_pag1.jpg"
)

Ocean.create(
name: "Atlantic Ocean",
image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyFID2uVqZHdIC7LvHycfua9fEi_P0dyLIrUMVFE82lRl_7fB4"
)

Ocean.create(
name: "Indian Ocean",
image: "https://thumbs-prod.si-cdn.com/faChACEGBApDo484R1X794xdjXU=/800x600/filters:no_upscale()/https://public-media.si-cdn.com/filer/d1/c4/d1c4f3ea-3817-4829-a05b-afd5e50c2139/istock-134215790.jpg"
)


SeaLife.create(
name: "Australian Giant Cuttlefishk",
isMyFavorite: true,
image: "https://deepoceanfacts.com/wp-content/uploads/2017/07/cuttlefish-768x512.jpg",
ocean_id: 1
)

SeaLife.create(
name: "Bull Shark",
isMyFavorite: true,
image: "https://deepoceanfacts.com/wp-content/uploads/2017/07/bull-768x480.jpg",
ocean_id: 1
)

SeaLife.create(
name: "Branch Coral",
isMyFavorite: false,
image: "https://deepoceanfacts.com/wp-content/uploads/2017/07/coral-768x647.jpg",
ocean_id: 1
)

SeaLife.create(
name: "Blue Whale",
isMyFavorite: false,
image: "https://deepoceanfacts.com/wp-content/uploads/2017/07/blue-whale.jpg",
ocean_id: 1
)

SeaLife.create(
name: "Basking Shark",
isMyFavorite: false,
image: "https://deepoceanfacts.com/wp-content/uploads/2017/07/basking-768x432.jpg",
ocean_id: 1
)

SeaLife.create(
name: "Hawksbill Turtle",
isMyFavorite: false,
image: "https://deepoceanfacts.com/wp-content/uploads/2017/07/turtle-768x576.jpg",
ocean_id: 1
)

SeaLife.create(
name: "Vaquita",
isMyFavorite: false,
image: "https://deepoceanfacts.com/wp-content/uploads/2017/07/vaquita-raziel-levi-mendez-moreno-768x419.jpg",
ocean_id: 1
)

SeaLife.create(
name: "Oval Butterfish",
isMyFavorite: false,
image: "https://deepoceanfacts.com/wp-content/uploads/2017/07/img2E.jpg",
ocean_id: 1
)

SeaLife.create(
name: "BelugaSeaLife.create(White Whales)",
isMyFavorite: false,
image: "https://deepoceanfacts.com/wp-content/uploads/2017/07/whale1-768x540.jpg",
ocean_id: 2
)

SeaLife.create(
name: "Atlantic Bluefin Tuna",
isMyFavorite: false,
image: "https://deepoceanfacts.com/wp-content/uploads/2017/07/bluefin.jpg",
ocean_id: 2
)

SeaLife.create(
name: "Lined Seahorse",
isMyFavorite: false,
image: "https://deepoceanfacts.com/wp-content/uploads/2017/07/Lined-Seahorse-In-Aquarium.jpg",
ocean_id: 2
)

SeaLife.create(
name: "Hooded Seal",
isMyFavorite: false,
image: "https://deepoceanfacts.com/wp-content/uploads/2017/07/hooded-768x512.jpg",
ocean_id: 2
)

SeaLife.create(
name: "LeatherBack Sea Turtle",
isMyFavorite: false,
image: "https://deepoceanfacts.com/wp-content/uploads/2017/07/leatherback-sea-turtle-florida-everglades-768x510.jpg",
ocean_id: 2
)

SeaLife.create(
name: "Walrus",
isMyFavorite: false,
image: "https://deepoceanfacts.com/wp-content/uploads/2017/07/maxresdefault-768x432.jpg",
ocean_id: 2
)

SeaLife.create(
name: "Amazonian Manatee",
isMyFavorite: false,
image: "https://deepoceanfacts.com/wp-content/uploads/2017/07/amanatee4-e1500865611588-768x536.jpg",
ocean_id: 2
)

SeaLife.create(
name: "Dusky Dolphin",
isMyFavorite: false,
image: "https://deepoceanfacts.com/wp-content/uploads/2017/07/dusky.jpg",
ocean_id: 2
)

SeaLife.create(
name: "African Penguin",
isMyFavorite: true,
image: "https://deepoceanfacts.com/wp-content/uploads/2017/10/ap-300x201.jpg",
ocean_id: 3
)

SeaLife.create(
name: "Albatross",
isMyFavorite: true,
image: "https://deepoceanfacts.com/wp-content/uploads/2017/10/a-1-300x204.jpg",
ocean_id: 3
)

SeaLife.create(
name: "Angelfish",
isMyFavorite: false,
image: "https://deepoceanfacts.com/wp-content/uploads/2017/10/freshwater-angelfish-300x200.jpg",
ocean_id: 3
)

SeaLife.create(
name: "Blue Whale",
isMyFavorite: false,
image: "https://deepoceanfacts.com/wp-content/uploads/2017/10/bw-300x169.jpg",
ocean_id: 3)

SeaLife.create(
name: "Butterfly fish",
isMyFavorite: false,
image: "https://deepoceanfacts.com/wp-content/uploads/2017/10/Butterfly-Fish1.jpg",
ocean_id: 3
)

SeaLife.create(
name: "Cuttlefish",
isMyFavorite: false,
image: "https://deepoceanfacts.com/wp-content/uploads/2017/10/giant-cuttlefish.jpg",
ocean_id: 3
)

SeaLife.create(
name: "Dugong",
isMyFavorite: false,
image: "https://deepoceanfacts.com/wp-content/uploads/2017/10/dugong.jpg",
ocean_id: 3
)

SeaLife.create(
name: "Zebra Shark",
isMyFavorite: false,
image: "https://deepoceanfacts.com/wp-content/uploads/2017/10/gc-768x432.jpg",
ocean_id: 3
)
