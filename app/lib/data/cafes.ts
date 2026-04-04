type RawCafe = [string, number, number, string];

type Cafe = {
    key: string;
    name: string;
    lat: number;
    lng: number;
    info: string;
};

const spots: RawCafe[] = [

 
 ["White's Tavern", 54.600178616965685, -5.928476735745936, "Low ceilings and lighting with cozy nooks and cold pints."],
 ["Coffee House - Starbucks", 54.595263381466246, -5.928251522487488, "Clean, modern setting with high ceilings."],
 ["Kitchen Bar", 54.59870059580423, -5.924599915336676, "Small, cosy pub serving hot and cold drinks."],
 ["Kelly's Cellars", 54.59957374369946, -5.932134561008094, "Traditional Irish pub with quiet nooks, serving hot and cold drinks."],
    ];

const formatted: Cafe[] = spots.map(([name, lat, lng, info]) => ({
    name,
    lat,
    lng,
    info,
    key: JSON.stringify({ name, lat, lng, info})
}));

export default formatted;