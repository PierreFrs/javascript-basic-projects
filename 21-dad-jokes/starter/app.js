const btn = document.querySelector(".btn");
const result = document.querySelector(".result");

url = "https://icanhazdadjoke.com/";

const fetchDadJoke = async () => {
  result.textContent = "Loading...";
  try {
    const response = await fetch(url, {
      headers: {
        Accept: "application/json",
        "User-Agent": "learning app",
      },
    });
    if (!response.ok) {
      throw new Error("Whoops !");
    }
    const data = await response.json();
    result.textContent = data.joke;
  } catch (error) {
    result.textContent = "Oopsy Daisy there were an error...";
  }
};

window.addEventListener("load", fetchDadJoke);

btn.addEventListener("click", fetchDadJoke);
