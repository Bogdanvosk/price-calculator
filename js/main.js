"use strict";

// Inputs
const squareInput = document.querySelector("#square-input"),
   squareRange = document.querySelector("#square-range"),
   inputs = document.querySelectorAll("input");

// Radio buttons
const typeReconstructionElements = document.querySelectorAll('[name="type"]'),
   typeBuildingElements = document.querySelectorAll('[name="building"]'),
   typeRoomsElements = document.querySelectorAll('[name="rooms"]');

// Checkboxes
const ceilings = document.querySelector('[name="ceiling"]');
const walls = document.querySelector('[name="walls"]');
const floor = document.querySelector('[name="floor"]');

// Price
const basePriceMeter = 6000;
const totalPriceElement = document.querySelector("#total-price");

calculate();

// Chaining range input with number input
squareRange.addEventListener("input", () => {
   squareInput.value = squareRange.value;
});
squareInput.addEventListener("input", () => {
   squareRange.value = squareInput.value;
});

inputs.forEach((input) => {
   input.addEventListener("change", calculate);
});

// Calculating price
function calculate() {
   const square = parseInt(squareInput.value);
   let typeReconstructionCost = 1;
   let typeBuildingCost = 1;
   let typeRoomCost = 1;

   // Тип ремонта
   typeReconstructionElements.forEach((el) => {
      if (el.checked) {
         typeReconstructionCost = parseFloat(el.value);
      }
   });

   // Тип дома
   typeBuildingElements.forEach((el) => {
      if (el.checked) {
         typeBuildingCost = parseFloat(el.value);
      }
   });

   // Кол-во комнат
   typeRoomsElements.forEach((el) => {
      if (el.checked) {
         typeRoomCost = parseFloat(el.value);
      }
   });

   // Доп опции
   const ceilingCost = ceilings.checked ? parseFloat(ceilings.value) : 1;
   const wallsCost = walls.checked ? parseFloat(walls.value) : 1;
   const floorCost = floor.checked ? parseFloat(floor.value) : 1;

   // Общая стоимость
   const totalPrice =
      basePriceMeter *
      square *
      typeReconstructionCost *
      typeBuildingCost *
      typeRoomCost *
      ceilingCost *
      wallsCost *
      floorCost;
   // Форматирование значение по локали "RU"
   const formatter = new Intl.NumberFormat("ru");

   totalPriceElement.innerText = formatter.format(totalPrice);
}
