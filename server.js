import express from "express";

import { Liquid } from "liquidjs";

// Vul hier jullie team naam in
const teamName = "Bliss";

const app = express();

const params = {
  "filter[cohort]": "2526",
  "filter[tribe][name]": "FDND Jaar 1",
};

const squadResponse = await fetch(
  "https://fdnd.directus.app/items/squad?" + new URLSearchParams(params),
);

// Lees van de response van die fetch het JSON object in, waar we iets mee kunnen doen
const squadResponseJSON = await squadResponse.json();

app.use(express.static("public"));

const engine = new Liquid();
app.engine("liquid", engine.express());

app.set("views", "./views");

app.use(express.urlencoded({ extended: true }));

app.get("/", async function (request, response) {
  const params = {
    fields: "*,squads.*",
    "filter[squads][squad_id][tribe][name]": "FDND Jaar 1",
    "filter[squads][squad_id][cohort]": "2526",
  };

  // sorteren
  if (request.query.sort) {
    params.sort = request.query.sort;
  }

  // filteren
  if (request.query["filter[squads][squad_id][_eq]"]) {
    params["filter[squads][squad_id][_eq]"] =
      request.query["filter[squads][squad_id][_eq]"];
  }

  // zoeken
  if (request.query.name) {
    params["filter[name][_icontains]"] = request.query.name;
  }

  const personResponse = await fetch(
    "https://fdnd.directus.app/items/person/?" + new URLSearchParams(params),
  );
  const personResponseJSON = await personResponse.json();
  response.render("index.liquid", {
    persons: personResponseJSON.data,
    squads: squadResponseJSON.data,
    currentSort: request.query.sort || "",
  });
});

app.post("/", async function (request, response) {
  // Stuur een POST request naar de messages tabel
  // Een POST request bevat ook extra parameters, naast een URL
  await fetch("https://fdnd.directus.app/items/messages", {
    // Overschrijf de standaard GET method, want ook hier gaan we iets veranderen op de server
    method: "POST",

    // Geef de body mee als JSON string
    body: JSON.stringify({
      // Dit is zodat we ons bericht straks weer terug kunnen vinden met ons filter
      for: `Team ${teamName}`,
      // En dit zijn onze formuliervelden
      from: request.body.from,
      text: request.body.text,
    }),

    // En vergeet deze HTTP headers niet: hiermee vertellen we de server dat we JSON doorsturen
    // (In realistischere projecten zou je hier ook authentication headers of een sleutel meegeven)
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
    },
  });

  // Stuur de browser daarna weer naar de homepage
  response.redirect(303, "/");
});

app.set("port", process.env.PORT || 8000);

if (teamName == "") {
  console.log("Voeg eerst de naam van jullie team in de code toe.");
} else {
  app.listen(app.get("port"), function () {
    console.log(`Application started on http://localhost:${app.get("port")}`);
  });
}

// student liquid

app.get("/student/:id", async function (request, response) {
  // Gebruik de request parameter id en haal de juiste persoon uit de WHOIS API op
  const personDetailResponse = await fetch(
    "https://fdnd.directus.app/items/person/" + request.params.id,
  );
  // En haal daarvan de JSON op
  const personDetailResponseJSON = await personDetailResponse.json();

  // Render student.liquid uit de views map en geef de opgehaalde data mee als variable, genaamd person
  // Geef ook de eerder opgehaalde squad data mee aan de view
  response.render("student.liquid", {
    person: personDetailResponseJSON.data,
    squads: squadResponseJSON.data,
  });
});

// berichten achter laten
app.get("/berichten", async function (request, response) {
  const messageParams = {
    "filter[for]": "bliss-demo",
  };

  const apiURL =
    "https://fdnd.directus.app/items/messages?" +
    new URLSearchParams(messageParams);
  const messagesResponse = await fetch(apiURL);
  const messagesResponseJSON = await messagesResponse.json();
  const messages = messagesResponseJSON.data;

  response.render("message.liquid", { messages });
});

app.post("/berichten", async function (request, response) {
  await fetch("https://fdnd.directus.app/items/messages", {
    method: "POST",

    body: JSON.stringify({
      for: "bliss-demo",
      from: request.body["message-from"],
      text: request.body["message-text"],
    }),

    headers: {
      "Content-Type": "application/json;charset=UTF-8",
    },
  });

  response.redirect("/berichten");
});
