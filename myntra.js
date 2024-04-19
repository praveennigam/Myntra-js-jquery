$(document).ready(function() {
    $(".after-click").hide();
    $("#man").on({
        click: function() {
            $(".after-click-1").hide(1000);
            $(".after-click-2").hide(1000);
            $(".after-click").slideDown(1000);
            $(".after-click-4").hide(1000);
            $(".after-click-nn").slideUp(1000);
            $(".after-click-6").slideUp(1000);

            $(".after-click-3").hide(1000);

        },
        dblclick: function() {
            $(".after-click").slideUp(1000);
        }
    });
});
$(document).ready(function() {
    $(".after-click-1").hide();
    $("#women").on({
        click: function() {
            $(".after-click-2").hide(1000);
            $(".after-click").hide(1000);
            $(".after-click-1").slideDown("slow");
            $(".after-click-3").hide(1000);
            $(".after-click-4").hide(1000);
            $(".after-click-nn").slideUp(1000);
            $(".after-click-6").slideUp(1000);


        },
        dblclick: function() {
            $(".after-click-1").slideUp(1000);
        }
    });
});
$(document).ready(function() {
    $(".after-click-2").hide();

    $("#kid").on({
        click: function() {
            $(".after-click-2").slideDown(1000);
            $(".after-click").hide(1000);
            $(".after-click-1").hide(1000);
            $(".after-click-nn").hide(1000);
            $(".after-click-4").hide(1000);
            $(".after-click-3").hide(1000);
            $(".after-click-6").slideUp(1000);
        },
        dblclick: function() {
            $(".after-click-2").slideUp(1000);
        }
    });
});
$(document).ready(function() {
    $(".after-click-3").hide();

    $("#home").on({
        click: function() {

            $(".after-click-3").slideDown(1000);
            $(".after-click-nn").slideUp(1000);
            $(".after-click-4").hide(1000);
            $(".after-click").hide(1000);
            $(".after-click-1").hide(1000);
            $(".after-click-2").hide(1000);
            $(".after-click-6").slideUp(1000);

        },
        dblclick: function() {
            $(".after-click-3").slideUp(1000);
        }
    });
});

$(document).ready(function() {
    $(".after-click-4").hide();

    $("#beauty").on({
        click: function() {
            $(".after-click-4").slideDown(1000);
            $(".after-click").hide(1000);
            $(".after-click-1").hide(1000);
            $(".after-click-3").hide(1000);
            $(".after-click-nn").slideUp(1000);
            $(".after-click-6").slideUp(1000);

            $(".after-click-2").hide(1000);
            $(".after-click-6").slideUp(1000);

        },
        dblclick: function() {
            $(".after-click-4").hide(1000);
        }
    });
});
$(document).ready(function() {
    $(".after-click-6").hide();
    $("#stu").on({
        click: function() {
            $(".after-click-1").hide(1000);
            $(".after-click-2").hide(1000);
            $(".after-click-6").slideDown(1000);
            $(".after-click-4").hide(1000);
            $(".after-click-nn").slideUp(1000);

            $(".after-click-3").hide(1000);

        },
        dblclick: function() {
            $(".after-click-6").slideUp(1000);
        }
    });
});


$(document).ready(function() {
    $("#after-click-nn").hide();

    $("#person").on({
        click: function() {
            $(".after-click-nn").slideDown(1000);
            $(".after-click").hide(1000);
            $(".after-click-1").hide(1000);
            $(".after-click-3").hide(1000);
            $(".after-click-2").hide(1000);
            $(".after-click-4").hide(1000);
            $(".after-click-6").slideUp(1000);

        },
        dblclick: function() {
            $(".after-click-nn").slideUp(1000);
        }
    });
});








let bagItem = [];
bagitemcount();

function addTobag(itemId) {
    bagitemcount();
    bagItem.push(itemId);

}

function bagitemcount() {
    let count = document.querySelector(".bag-item-count");
    if (bagItem.length > 0) {
        count.innerText = bagItem.length;
        count.style.visibility = "visible";
    } else {
        count.style.visibility = "hidden";
    }
}

function item() {
    let itemsContainerElement = document.querySelector(".items-container");

    let items = [{
            id: "0001",
            item_image: "img/8.jpg",
            rating: "3.1",
            review: "1.4k",
            company_name: "Carlton London",
            item_name: "Rhodium-plated CZ Floral studs",
            price: 1410,
            original_price: 640,
            discount: 70
        },
        {
            id: "0002",
            item_image: "img/4.jpg",
            rating: "4.5",
            review: "1.4k",
            company_name: "London",
            item_name: "Floral",
            price: 910,
            original_price: 430,
            discount: 60
        },
        {
            id: "0003",
            item_image: "img/7.jpg",
            rating: "2.5",
            review: "2.4k",
            company_name: "NIVEA",
            item_name: "Rhodium-plated CZ Floral studs",
            price: 1410,
            original_price: 640,
            discount: 70
        },
        {
            id: "0004",
            item_image: "img/8.jpg",
            rating: "4.5",
            review: "1.4k",
            company_name: "roadster",
            item_name: "CZ Floral",
            price: 910,
            original_price: 430,
            discount: 60
        },
        {
            id: "0005",
            item_image: "img/4.jpg",
            rating: "4.5",
            review: "1.4k",
            company_name: "Carlton London",
            item_name: "Rhodium-plated CZ Floral studs",
            price: 1410,
            original_price: 640,
            discount: 70
        },
        {
            id: "0006",
            item_image: "img/7.jpg",
            rating: "4.5",
            review: "1.4k",
            company_name: "London",
            item_name: "CZ Floral",
            price: 910,
            original_price: 430,
            discount: 60
        },
        {
            id: "0007",
            item_image: "img/8.jpg",
            rating: "4.5",
            review: "1.4k",
            company_name: "Carlton London",
            item_name: "Rhodium-plated CZ Floral studs",
            price: 1410,
            original_price: 640,
            discount: 70
        },
        {
            id: "0008",
            item_image: "img/4.jpg",
            rating: "4.5",
            review: "1.4k",
            company_name: "London",
            item_name: "CZ Floral",
            price: 910,
            original_price: 430,
            discount: 60
        }
    ];

    let innerHtml = "";
    items.forEach(item => {
        innerHtml += `
            <div class="item-container">
                <img src="${item.item_image}" class="item-image" alt="item image">
                <div class="rating">
                    ${item.rating} ⭐ | ${item.review}
                </div>
                <div class="company-name">${item.company_name}</div>
                <div class="item-name">${item.item_name}</div>
                <div class="price">
                    <span class="current-price"> Rs ${item.price}</span>
                    <span class="original-price"> Rs ${item.original_price}</span>
                    <span class="discount"> (${item.discount}% OFF)</span>
                </div>
                <button class="btn-add-bag" onclick="addTobag('${item.id}')">Add to Bag</button>
            </div>
        `;
    });

    itemsContainerElement.innerHTML = innerHtml;
}

item();