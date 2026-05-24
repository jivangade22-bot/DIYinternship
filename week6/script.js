const plan = document.getElementById("plan");
const addons = document.querySelectorAll(".addon");
const total = document.getElementById("total");

function updatePrice() {

    let price = Number(plan.value);

    addons.forEach(addon => {
        if(addon.checked){
            price += Number(addon.value);
        }
    });

    total.textContent = price;
}

plan.addEventListener("change", updatePrice);

addons.forEach(addon => {
    addon.addEventListener("change", updatePrice);
});

updatePrice();