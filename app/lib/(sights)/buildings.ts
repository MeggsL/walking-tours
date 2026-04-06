type RawBuilding = [string, number, number, string ];

type Building = {
    key: string;
    name: string;
    lat: number;
    lng: number;
    info: string;
};

const buildings: RawBuilding[] = [

    ["Crumlin Road Gaol: ", 54.609589686911356, -5.942150323272715, "HM Prison Belfast, also known as Crumlin Road Gaol, is a former prison situated on the Crumlin Road in north Belfast, Northern Ireland. Since 1996 it is the only remaining Victorian era former prison in Northern Ireland.It is colloquially known as the Crum."],
    ["Crumlin Road Courthouse: ", 54.60869323459317, -5.942640928942047, "This is a courthouse."],
    ["The Linen Hall: ", 54.597716857004805, -5.931591271269812, "This building is made of linen."],
    ["Riddell Hall: ", 54.57629559332741, -5.934817611743387, "The Clintons live here."],
    ["Custom House: ", 54.60180575806063, -5.922637157062103, "They do concerts here."],
    ["The Merchant Hotel: ", 54.601692620762634, -5.92584174605988, "Cool bar."],
    ["Belfast City Hall: ", 54.596617288210005, -5.930042286615252, "Pretty neato inside."],
    ["Belfast Cathedral: ", 54.602993322702154, -5.928552370341554, "Expect to pay to get in."],
    ["St George's Market: ", 54.59627070010794, -5.921965530797129, "Home of the Belly-Buster Breakfast Bap."],
    ["The Lanyon Building: ", 54.58461683745442, -5.935150073124921, "The Canada Room is my favourite!"],
    ["The Ulster Hall: ", 54.59476577326982, -5.930962847997169, "Home of the Ulster Orchestra."],
];

const formatted: Building[] = buildings.map(([name, lat, lng, info ]) => ({
    name,
    lat,
    lng,
    info,
    key: JSON.stringify({ name, lat, lng, info })
}));

export default formatted;