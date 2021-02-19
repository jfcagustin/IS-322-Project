(function() {
    let mockDatabase = [
        {
            title: 'Razer Black Widow',
            price: '$100',
            id: 0,
            tag: 'razer',
            img: 'media/rbw.jpg'
        },
        {
            title: 'Razer Huntsman TE',
            price: '$120',
            id: 1,
            tag: 'razer',
            img: 'media/rhte.jpg'
        },
        {
            title: 'Razer Huntsman Mini',
            price: '$90',
            id: 2,
            tag: 'razer',
            img: 'media/rhm.jpg'
        },
        {
            title: 'HyperX Alloy Origins',
            price: '$92',
            id: 3,
            tag: "hyperx",
            img: 'media/hxo.jpg'
        },
        {
            title: 'HyperX Alloy FPS RGB',
            price: '$110',
            id: 4,
            tag: "hyperx",
            img: 'media/hxfr.jpg'
        },
        {
            title: 'HyperX Alloy FPS Pro',
            price: '$70',
            id: 5,
            tag: 'hyperx',
            img: 'media/hxfp.jpg'
        },
        {
            title: 'Corsair K70 RGB',
            price: '$150',
            id: 6,
            tag: 'corsair',
            img: 'media/ck70.jpg'
        },
        {
            title: 'Corsair K95 RGB',
            price: '$200',
            id: 7,
            tag: 'corsair',
            img: 'media/ck95.jpg'
        },
        {
            title: 'Corsair Strafe',
            price: '$95',
            id: 8,
            tag: 'corsair',
            img: 'media/cs.jpg'
        },
        {
            title: `Priceless Antique Keyboard`,
            price: '$1000',
            id: 9,
            tag: 'antique',
            img: 'media/poskb.jpg'
        },
    ];

    function renderKey(results) {
        const prodDiv = document.querySelector('#prodList');
        prodDiv.innerHTML = '';

        const products = results.map((product) =>
            `<div class="card">
                <img src="${product.img}" width="400">
                <h1>${product.title}</h1>
                <h2>${product.price}</h2>
             </div>
            `
        )

        products.forEach((product) => {
            prodDiv.innerHTML += product;
        });


    }

    renderKey(mockDatabase);
    /*function renderKey(results) {
        const prodDiv = document.querySelector('#prodList');
        prodCon.innerHTML = '';

        const products = results.map(function (product, index) {
            return (
                `
                <div class="product">
                    <img class="prodIMG" src="${product.img}" id="${index}" alt="kbpic">
                    <div class="prodInfo">
                        <h1 class="prodTitle">${product.title}</h1>
                        <h2 class="prodPrice">${product.price}</h2>
                    </div>
                </div>
            `
            )
        });

        products.forEach(function (product) {
            prodDiv.innerHTML += product
        });

        renderKey(mockDatabase);
    }*/

})();

