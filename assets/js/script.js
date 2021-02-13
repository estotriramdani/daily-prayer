fetch("https://api.pray.zone/v2/times/day.json?city=makassar&date=2021-02-12")
  .then((res) => res.json())
  .then((res) => console.log(res.results.location.city));
