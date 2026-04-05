import Image from "next/image";

const BuildingCard = () => {
  return (
    <Image
      src="/selection-card-buildings.jpg"
      alt="Tour of Belfast"
      width={700}
      height={467}
      priority
    />
  );
};

const StatuesCard = () => {
  return (
    <Image
      src="/selection-card-statues.jpg"
      alt="Tour of Belfast"
      width={700}
      height={467}
      priority
    />
  );
};

const LandmarkCard = () => {
  return (
    <Image
      src="/selection-card-monuments.jpg"
      alt="Tour of Belfast"
      width={700}
      height={467}
      priority
    />
  );
};

export { BuildingCard, StatuesCard, LandmarkCard };
