var items = [
  ['001', 'Kopi Kenangan', 10000, 'Kopi Yang Hanya Bisa Di Rasakan Dengan Masa Lalu nya', 'img/img_jumbotron/coffe1.png'],
  ['002', 'Kopi Aceh', 13000, 'Kopi Nikmat Tidak Pait dan Enak Juga', 'img/img_jumbotron/coffe2.jpg'],
  ['003', 'Saranghae Kopi', 15000, 'Ini Kopi Para Juara, Judika Pernah Membawakan Lagu Ini', 'img/img_jumbotron/coffe3.png'],
  ['004', 'Kosu', 8000, 'Kopi Yang Murah Dengan Susu Melimpah', 'img/img_jumbotron/coffe4.png'],
];

// todo : membuat loopingan
items.forEach(function (item) {
  var card = `
        <div class ="col-4 mt-2">
            <div class="card" style="width: 18rem;">
                <img src="${item[4]}" class="card-img-top" height="200px" width="200px" alt="...">
                <div class="card-body">
                    <h5 class="card-title" id="itemName">${item[1]}</h5>
                    <p class="card-text" id="itemDesc">${item[3]}</p>
                    <p class="card-text">Rp ${item[2]}</p>
                    <a href="#" class="btn btn-primary" id="addCart">Tambahkan ke keranjang</a>
                </div>
            </div>
        </div>
        `;
  document.querySelector('#listBarang').innerHTML += card;
});

// info : membuat event search untuk form
document.querySelector('#formItem').addEventListener('submit', function (event) {
  event.preventDefault();
  var keyword = document.querySelector('#keyword').value;
  var filteredItems = items.filter(function (item) {
    return item[1].toLowerCase().includes(keyword.toLowerCase());
  });
  document.querySelector('#listBarang').innerHTML = '';
  filteredItems.forEach(function (item) {
    var card = `
        <div class ="col-4 mt-2">
            <div class="card" style="width: 18rem;">
                <img src="${item[4]}" class="card-img-top" height="200px" width="200px" alt="...">
                <div class="card-body">
                    <h5 class="card-title" id="itemName">${item[1]}</h5>
                    <p class="card-text" id="itemDesc">${item[3]}</p>
                    <p class="card-text">Rp ${item[2]}</p>
                    <a href="#" class="btn btn-primary" id="addCart">Tambahkan ke keranjang</a>
                </div>
            </div>
        </div>
        `;
    document.querySelector('#listBarang').innerHTML += card;
  });
});

// todo : menu add
document.addEventListener('DOMContentLoaded', function () {
    var cartButton = document.querySelectorAll('#addCart');
    cartButton.forEach(function (button) {
      button.addEventListener('click', function () {
        var cartCount = document.querySelector('#cart').textContent.match(/\d+/)[0];
        cartCount = parseInt(cartCount) + 1;
        document.querySelector('#cart').textContent = `(${cartCount})`;
      });
    });
  });
  