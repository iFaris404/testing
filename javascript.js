let counter = 0;
let counter_box = document.getElementById("click_box");
let place_holder = (counter_box.innerHTML = "0000");
const click_button = document.getElementById("click_button");
const reset_button = document.getElementById("reset_button");
click_button.addEventListener("click", Iteratingover);
reset_button.addEventListener("click", function reset() {
  counter_box.innerHTML = "0000";
  Current_value = 0;
});
let Current_value = 0;
function Iteratingover() {
  counter_box.innerHTML = Current_value + 1;
  Current_value = Current_value + 1;
  console.log(Current_value);
  console.log(counter_box.innerHTML);
}
