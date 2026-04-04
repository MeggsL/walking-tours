type RawStatue = [string, number, number, string];

type Statue = {
    key: string;
    name: string;
    lat: number;
    lng: number;
    info: string;
};

const statues: RawStatue[] = [

 ["The Big Fish: ", 54.60157071099889, -5.921668522486072, "It's a big 'un alright."],
 ["Beacon of Hope: ",54.59963348933054, -5.921414815904341, "Affectionately known as'Nuala-with-a-hula'."],
 ["The Masts: ",54.59831284496603, -5.930482437964718, "Representing the masts of historic big ships built in Belfast."],
 ["Spirit of Belfast: ",54.598735724784746, -5.927203822007786, "A hot spot of buskers and activity on nice days."],
 ["The Speaker: ",54.601673836678735, -5.922809237197805, "In front of Custom House."],
 ["Queen Victoria Memorial: ",54.596967674342125, -5.930081393985419, "Many present-day Belfast structures from Victorian era."],
 ["Edward James Harland Statue: ", 54.59684175309949, -5.930891682714485, "He was half of Belfast's major ship-building operation."],
    ];

const formatted: Statue[] = statues.map(([name, lat, lng, info]) => ({
    name,
    lat,
    lng,
    info,
    key: JSON.stringify({ name, lat, lng, info })
}));

export default formatted;