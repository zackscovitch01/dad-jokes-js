const url = "https://icanhazdadjoke.com/sss";

const btn = document.querySelector(".btn");
const result = document.querySelector(".result");

const fecthDadJoke = async () => {
  result.textContent = "Loading...";
  try {
    const response = await fetch(url, {
      headers: {
        Accept: "application/json",
        "User-Agent": "learning app",
      },
    });
    if (response.ok === false) {
      throw new Error("You provided the wrong URL...");
    }
    const data = await response.json();
    result.textContent = data.joke;
  } catch (err) {
    result.textContent = "There was an error...";
  }
};

btn.addEventListener("click", fecthDadJoke);

fecthDadJoke();
