var items = [
  ['001', 'Keyboard Logitek', 60000, 'Keyboard yang mantap untuk kantoran', 'logitek.jpg'],
  ['002', 'Keyboard MSI', 300000, 'Keyboard gaming MSI mekanik', 'msi.jpg'],
  ['003', 'Mouse Genius', 50000, 'Mouse Genius biar lebih pinter', 'genius.jpeg'],
  ['004', 'Mouse Jerry', 30000, 'Mouse yang disukai kucing', 'jerry.jpg'],
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
