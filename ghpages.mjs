import ghpages from "gh-pages";

ghpages.publish("public", (err) => console.log("ERROR PUBLISHING:\n ${err}"));
