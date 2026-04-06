import TheWeather from "@/app/weather/GetWeather";

<html lang="en">
  <head>
    <meta name="viewport" content="initial-scale=1, width=device-width" />
    <title>Tours of Belfast</title>
  </head>
  <body></body>
</html>;

export default function DisplayTheWeather() {
  return (
    <main>
      <div className="body">
        <TheWeather />
      </div>
    </main>
  );
}