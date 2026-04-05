type RawBench = [string, number, number, string];

type Bench = {
    key: string;
    name: string;
    lat: number;
    lng: number;
    info: string;
};

const spots: RawBench[] = [

 ["Bench - Belfast City Hall", 54.596915014281, -5.929266650996174, "Wooden bench with views of City Hall."],
 ["Bench - Arthur Street", 54.598157026905284, -5.927845258541258, "Bench in middle of pedestrian street. Surrounded by lovely buildings."],
 ["Bench - Fountain Street", 54.597824240724, -5.931800043792969, "Comfy bench where you can blend into the background."],
    ];

const formatted: Bench[] = spots.map(([name, lat, lng, info]) => ({
    name,
    lat,
    lng,
    info,
    key: JSON.stringify({ name, lat, lng, info})
}));

export default formatted;