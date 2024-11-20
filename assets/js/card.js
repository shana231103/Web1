let list = document.querySelector('.list');

let products = [
    {
        id: 1,
        cardType: 'Monster',
        name: 'Bahamut Shark',
        price: 10000,
        image: 'assets/card/Bahamut_Shark.jpg'
    },
    {
        id: 2,
        cardType: 'Monster',
        name: 'Blue-eyes Alternative White Dragon',
        price: 10000,
        image: 'assets/card/BE_Alternative.jpg'
    },
    {
        id: 3,
        cardType: 'Monster',
        name: 'Blue-eyes Chaos Dragon',
        price: 10000,
        image: 'assets/card/BE_Chaos.jpg'
    },
    {
        id: 4,
        cardType: 'Monster',
        name: 'Blue-eyes Chaos MAX Dragon',
        price: 10000,
        image: 'assets/card/BE_Chaos_MAX.jpg'
    },
    {
        id: 5,
        cardType: 'Monster',
        name: 'Blue-eyes Jet Dragon',
        price: 10000,
        image: 'assets/card/BE_Spirit.jpg'
    },
    {
        id: 6,
        cardType: 'Spell',
        name: 'Super Polymerization',
        price: 500000,
        image: './assets/card/Super_Poly.jpg'
    },
    {
        id: 7,
        cardType: 'Trap',
        name: 'Mirror Force',
        price: 30000,
        image: './assets/card/Mirror_Force.jpg'
    },
    {
        id: 8,
        cardType: 'Trap',
        name: 'Mirror Force',
        price: 30000,
        image: './assets/card/Mirror_Force.jpg'
    },
    {
        id: 9,
        cardType: 'Trap',
        name: 'Mirror Force',
        price: 30000,
        image: './assets/card/Mirror_Force.jpg'
    },
    {
        id: 10,
        cardType: 'Trap',
        name: 'Mirror Force',
        price: 30000,
        image: './assets/card/Mirror_Force.jpg'
    },
    {
        id: 11,
        cardType: 'Trap',
        name: 'Mirror Force',
        price: 30000,
        image: './assets/card/Mirror_Force.jpg'
    }
];
let listCards = [];
function initApp(){
    list.innerHTML = '';
    
    products.forEach((value, key)=>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="${value.image}">
            <div class="name">Tên card: ${value.name}</div>
            <div class="price">Giá: ${value.price.toLocaleString()}</div>
            <button class="button" onclick="addToCart(${key})">Thêm vào giỏ hàng</button>`;
        list.appendChild(newDiv);
    })
}
initApp();