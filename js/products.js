(function() {
    var mockDatabase = [
        {
            title: 'Razer Black Widow',
            price: '$100',
            id: 0,
            tag: 'razer',
            img: 'media/rbw.jpg',
            size: 100
        },
        {
            title: 'Razer Huntsman TE',
            price: '$120',
            id: 1,
            tag: 'razer',
            img: 'media/rhte.jpg',
            size: 80
        },
        {
            title: 'Razer Huntsman Mini',
            price: '$90',
            id: 2,
            tag: 'razer',
            img: 'media/rhm.jpg',
            size: 60
        },
        {
            title: 'HyperX Alloy Origins',
            price: '$92',
            id: 3,
            tag: "hyperx",
            img: 'media/hxo.jpg',
            size: 100
        },
        {
            title: 'HyperX Alloy FPS RGB',
            price: '$110',
            id: 4,
            tag: "hyperx",
            img: 'media/hxfr.jpg',
            size: 100
        },
        {
            title: 'HyperX Alloy FPS Pro',
            price: '$70',
            id: 5,
            tag: 'hyperx',
            img: 'media/hxfp.jpg',
            size: 80
        },
        {
            title: 'Corsair K70 RGB',
            price: '$150',
            id: 6,
            tag: 'corsair',
            img: 'media/ck70.jpg',
            size: 100
        },
        {
            title: 'Corsair K95 RGB',
            price: '$200',
            id: 7,
            tag: 'corsair',
            img: 'media/ck95.jpg',
            size: 100
        },
        {
            title: 'Corsair Strafe',
            price: '$95',
            id: 8,
            tag: 'corsair',
            img: 'media/cs.jpg',
            size: 100
        },
        {
            title: `Priceless Antique Keyboard`,
            price: '$1000',
            id: 9,
            tag: 'antique',
            img: 'media/poskb.jpg',
            size: 100
        },
    ];

    function renderKey(results) {
        var prodDiv = document.querySelector('#prodList');
        prodDiv.innerHTML = '';

        var products = results.map((product) =>
            `<div class="card">
                <img src="${product.img}" width="200">
                <h3>${product.title}</h3>
                <h4>${product.price}</h4>
             </div>
            `
        )

        products.forEach((product) => {
            prodDiv.innerHTML += product;
        });
    }

    renderKey(mockDatabase);


    function orderBy(sortValue) {
        // Sort method varies based on what type of value we're sorting
        var sortedResults = (sortValue === 'title')?
            mockDatabase.sort(function (a, b) { // Strings need to be sorted in a slightly more compldex way
                var titleA = a.title.toUpperCase(); // ignore upper and lowercase
                var titleB = b.title.toUpperCase(); // ignore upper and lowercase
                // Sorts alphabetically.  -1 puts it before. 1 puts it after
                if (titleA < titleB) {
                    return -1;
                }
                if (titleA > titleB) {
                    return 1;
                }
            }):
            mockDatabase.sort(function (a, b) { // Numbers a booleans are much simpler.
                // Just need postive or negative number
                // Object properties can be accessed through a string representing their title
                return a[sortValue] - b[sortValue];
            });
        renderKey(sortedResults);
    }

    document.querySelector('#orderBy').addEventListener('change', function(event){
        // Event is the JavaScript event that transpired, in our change a CHANGE event.
        // Target is the element it was performed on, useful for when the event targets
        // multiple elements.
        // Value has the name implies is the current value of the input element, if there is one
        console.log(event.target.value);
        orderBy(event.target.value);
    });




})();

