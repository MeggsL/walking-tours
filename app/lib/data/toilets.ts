type RawToilets = [string, number, number, string];

type Toilets = {
    key: string;
    name: string;
    lat: number;
    lng: number;
    info: string;
};

const spots: RawToilets[] = [

 ["Shopping Centre - CastleCourt", 54.60089987292416, -5.931363254698043, "Clean, modern, with bright lighting and plenty of seating."],
 ["Shopping Centre - Victoria Square", 54.59820050194058, -5.926550048524812, "Clean, modern, open air with greenery. Beautiful atrium."],
    ];

const formatted: Toilets[] = spots.map(([name, lat, lng, info]) => ({
    name,
    lat,
    lng,
    info,
    key: JSON.stringify({ name, lat, lng, info})
}));

export default formatted;