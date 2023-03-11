window.addEventListener('DOMContentLoaded', function() {

    let products = document.querySelectorAll('.product');
    let openBtn = document.querySelector('.open');
    let byeBtns = document.querySelectorAll('button');
    console.dir(products[2]);   

    function createCart() {
        let cart = document.createElement('div'),
            field = document.createElement('div'),
            heading = document.createElement('h2'),
            closeBtn = document.createElement('button');

        cart.classList.add('cart');
        field.classList.add('cart-field');
        closeBtn.classList.add('close');

        heading.textContent = 'У Вашій корзині:';
        closeBtn.textContent = 'Закрити';

        document.body.appendChild(cart);
        cart.appendChild(heading);
        cart.appendChild(field);
        cart.appendChild(closeBtn);
    }

    createCart();

    let field = document.querySelector('.cart-field');
    let cart =  document.querySelector('.cart');
    let close = document.querySelector('.close');

    function openCart() {
        cart.style.display = 'block';
    }

    function closeCart() {
        cart.style.display = 'none';
    }

    openBtn.addEventListener('click', openCart);
    close.addEventListener('click', closeCart);

    // for (let i = 0; i < byeBtns.length; i++) {
    //     byeBtns[i].addEventListener('click', function() {

    //         let item = products[i].cloneNode(true);
    //         console.log(products[i]);
    //         let btn = item.querySelector('button');

    //         btn.remove();
    //         field.appendChild(item);
    //         products[i].remove();
    //     });
    // }

    byeBtns.forEach((el, ind) => {
        el.addEventListener('click', () => {
            let item  = products[ind].cloneNode(true);
            let btn =item.querySelector('button');

            btn.remove();
            field.appendChild(item);
            products[ind].remove();
        });
    });
});

