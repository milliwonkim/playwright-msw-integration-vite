import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("https://odds.p.rapidapi.com/v4/sports", () => {
    const json = [
      {
        key: "americanfootball_cfl",
        group: "American Football",
        title: "CFL",
        description: "Canadian Football League",
        active: false,
        has_outrights: false,
      },
      {
        key: "americanfootball_ncaaf",
        group: "American Football",
        title: "NCAAF",
        description: "US College Football",
        active: true,
        has_outrights: false,
      },
    ];

    return HttpResponse.json(json);
  }),
];
