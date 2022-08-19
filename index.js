const chart = document.querySelector(".bar-con");

const fetchData = async () => {
  try {
    const res = await fetch("data.json");
    if (!res.ok) {
      throw new Error(res.statusText);
    }
    const data = await res.json();
   
    return data;
  } catch (error) {
    console.log("error");
  }
};

fetchData().then((data) => {

  data.forEach((element) => {
    let height = element.amount * 3;
    chart.innerHTML += ` <div class="bars">
                             <p class="pri">$${element.amount}</p>
                             <p class=" bar ${element.day}"style=height:${height}px></p>
                             <p class="day">${element.day}</p>
                          </div>
        `;
  });
});

chart.addEventListener("mouseover", (e) => {
  try {
    let barEl = e.target;

    if (barEl.classList.contains("bar")) {
      let amount = barEl.previousElementSibling;
      amount.style.display = "flex";
    }
  } catch (error) {
    console.log("error");
  }
});
chart.addEventListener("mouseout", (e) => {
  try {
    let barEl = e.target;

    if (barEl.classList.contains("bar")) {
      let amount = barEl.previousElementSibling;
      amount.style.display = "none";
    }
  } catch (error) {
    console.log("error");
  }
});
