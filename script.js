const adviceId = document.querySelector(".advice-id");
const advice = document.querySelector(".advice-content");
const diceBtn = document.querySelector(".dice-btn");

async function getData() {
  const url = "https://api.adviceslip.com/advice";

  try {
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);

    if (!response.ok) {
      throw new error(`response status: ${response.status}`);
    }

    for (let key in data) {
      adviceId.innerHTML += `<span>ADVICE #${data[key].id}</span>`;
      advice.innerHTML += `<p>"${data[key].advice}"</p>`;
      diceBtn.addEventListener("click", () => {
        window.location.reload();
      });
    }
  } catch (error) {
    console.log(error.message);
  }
}

getData();
