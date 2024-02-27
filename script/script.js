document.addEventListener("DOMContentLoaded", function() {
  let clearButton = document.getElementById("clearButton");

  clearButton.addEventListener("click", function() {
    // Находим все поля ввода
    let textInputs = document.querySelectorAll("input[type='text']");
    let emailInput = document.getElementById("emailInput");
    
    // Очищаем значения во всех полях ввода
    textInputs.forEach(function(input) {
      input.value = "";
    });
    
    // Очищаем значение в поле email
    emailInput.value = "";
  });
});





  // Ждем, пока весь документ будет загружен
  document.addEventListener("DOMContentLoaded", function() {
    // Находим все кнопки с классом "showBlockBtn"
    const showBlockButtons = document.querySelectorAll(".showBlockBtn");
    // Находим все блоки с классом "myBlock"
    const myBlocks = document.querySelectorAll(".myBlock");

    // Для каждой кнопки добавляем обработчик события
    showBlockButtons.forEach((button, index) => {
        button.addEventListener("click", function() {
            // Проверяем, скрыт ли блок, и меняем его состояние
            if (myBlocks[index].style.display === "none" || myBlocks[index].style.display === "") {
                myBlocks[index].style.display = "block";
            } else {
                myBlocks[index].style.display = "none";
            }
        });
    });
  });





  // Получаем ссылки на input-элементы и контейнер с товарами
  const allInput = document.getElementById("all");
  const homeInput = document.getElementById("home");
  const eatInput = document.getElementById("eat");
  const cosmeticsInput = document.getElementById("cosmetics");
  const products = document.querySelectorAll(".product"); // Получаем все элементы с классом "product"

  // Функция для отображения товаров на основе выбора категории
  function showProducts(category) {
      products.forEach(product => {
          const productCategory = product.getAttribute("data-category"); // Получаем категорию товара из data-атрибута
          if (category === "all" || productCategory === category) {
              product.style.display = "block"; // Показываем товар, если он соответствует выбранной категории
          } else {
              product.style.display = "none"; // Скрываем товар, если он не соответствует выбранной категории
          }
      });
  }

  // Добавляем слушатели событий для input-элементов
  allInput.addEventListener("change", () => {
      showProducts("all");
  });

  homeInput.addEventListener("change", () => {
      showProducts("home");
  });

  eatInput.addEventListener("change", () => {
      showProducts("eat");
  });

  cosmeticsInput.addEventListener("change", () => {
      showProducts("cosmetics");
  });

  showProducts("all"); // По умолчанию отображаем все товары




//   // Получаем все кнопки "Добавить товар" в index.html
// const addToCartButtons = document.querySelectorAll(".add-to-cart");

// // Получаем элемент корзины в cart.html
// const cartContent = document.getElementById("cart-content");

// // Создаем пустой массив для отслеживания выбранных товаров
// const selectedProducts = [];

// // Добавляем обработчик события для каждой кнопки
// addToCartButtons.forEach(button => {
//   button.addEventListener("click", () => {
//     // Получаем данные о товаре из атрибута data-product
//     const productName = button.getAttribute("data-product");
    
//     // Добавляем товар в массив выбранных товаров
//     selectedProducts.push(productName);
    
//     // Обновляем содержимое корзины
//     cartContent.innerHTML = selectedProducts.join("<br>");
//   });
// });

  