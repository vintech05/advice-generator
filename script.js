const adviceId = document.querySelector(".advice-id");
const advice = document.querySelector(".advice-content");
const diceBtn = document.querySelector(".dice-btn");

async function getData() {
  const url = "https://api.adviceslip.com/advice";

  try {
    let response = await fetch(url);
    if (!response.ok) {
      throw new Error(`response status: ${response.status}`);
    }
    let data = await response.json();
    console.log(data);

    for (let key in data) {
      adviceId.innerHTML += `<span>ADVICE #${data[key].id}</span>`;
      advice.innerHTML += `<p>"${data[key].advice}"</p>`;
    }
    return data.slip;
  } catch (error) {
    console.log(error.message);
  }
}

diceBtn.addEventListener("click", async () => {
  const data = await getData();
  adviceId.innerHTML = "";
  advice.innerHTML = "";
  adviceId.innerHTML += `<span>ADVICE #${data.id}</span>`;
  advice.innerHTML += `<p>"${data.advice}"</p>`;
});

getData();
