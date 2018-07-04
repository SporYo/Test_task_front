window.onload = function what() { // Событие onload на window срабатывает, когда загружается вся страница, включая ресурсы на ней – стили, картинки, ифреймы и т.п.

    $.ajax({
        url: 'https://raw.githubusercontent.com/SporYo/Test_task_front/master/products.json',
        dataType: 'json',
        success: function(cardsData) {
          
        }
      });

    function template(cardsData) {
        return cardsData.map(card =>
            `<div class='products_page pg_0'>
            <div class='product product_horizontal'>
                    <span class='product_code'>Код:${card.code}</span>
                    <div class='product_status_tooltip_container'>
                        <span class='product_status'>Наличие</span>
                    </div>  
                    <div class='product_photo'>
                        <a href='#' class='url--link product__link'>
                            <img src="${card.primaryImageUrl.slice(0, -4)}_220x220_1.jpg">
                        </a>
                    </div>
                    <div class='product_description'>
                        <a href='#' class='product__link'>${card.title}</a>
                    </div>
                    <div class='product_tags hidden-sm'>
                        <p>Могут понадобиться:</p>
                        <a href='#' class='url--link'>${card.assocProducts}</a>
                    </div>
                    <div class='product_units'>
                        <div class='unit--wrapper'>
                            <div class='unit--select unit--active'>
                                <p class='ng-binding'>За м. кв.</p>
                            </div>
                            <div class='unit--select'>
                                <p class='ng-binding'>За упаковку</p>
                            </div>
                        </div>
                    </div>
                    <p class='product_price_club_card'>
                        <span class='product_price_club_card_text'>По карте<br>клуба</span>
                        <span class='goldPrice'>${card.priceGoldAlt}</span>
                        <span class='rouble__i black__i'>
                            <svg version='1.0' id='rouble__b' xmlns='http://www.w3.org/2000/svg' x='0' y='0' width='30px' height='22px' viewBox='0 0 50 50' enable-background='new 0 0 50 50' xml:space='preserve'>
                                <use xmlns:xlink='http://www.w3.org/1999/xlink' xlink:href='#rouble_black'>
                                </use>
                            </svg>
                        </span>
                    </p>
                    <p class='product_price_default'>
                        <span class='retailPrice'>${card.priceRetailAlt}</span>
                        <span class='rouble__i black__i'>
                            <svg version='1.0' id='rouble__b' xmlns='http://www.w3.org/2000/svg' x='0' y='0' width='30px' height='22px' viewBox='0 0 50 50' enable-background='new 0 0 50 50' xml:space='preserve'>
                                <use xmlns:xlink='http://www.w3.org/1999/xlink' xlink:href='#rouble_gray'>
                                </use>
                            </svg>
                        </span>
                    </p>
                    <div class='product_price_points'>
                        <p class='ng-binding'>Можно купить за 231,75 балла</p>
                    </div>
                    <div class='list--unit-padd'>
                    </div>
                    <div class='list--unit-desc'>
                        <div class='unit--info'>
                            <div class='unit--desc-i'>
                        </div>
                        <div class='unit--desc-t'>
                            <p>
                                <span class='ng-binding'>Продается упаковками:</span>
                                <span class='unit--infoInn'>1 упак. = 2.47 м. кв.</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div class='product__wrapper'>
                <div class='product_count_wrapper'>
                    <div class='stepper'>
                        <input class='product__count stepper-input' type='text' value='1'>
                            <span class='stepper-arrow up'>
                            </span>
                            <span class='stepper-arrow down'>
                            </span>
                    </div>
                </div>
                <span class='btn btn_cart' data-url='/cart/' data-product-id=${card.productId}>
                    <svg class='ic ic_cart'>
                        <use xmlns:xlink='http://www.w3.org/1999/xlink' xlink:href='#cart'>
                        </use>
                    </svg>
                    <span class='ng-binding'>В корзину</span>
                </span>
            </div>
        </div>`
        )
        .join('')
    }

    document.getElementById("products_section").innerHTML = template(cardsData);

    $(document).ready(function () {
        $('.up').click(function () {
            var $input = $(this).parent().find('input');
            $input.val(parseInt($input.val()) + 1);
            $input.change();
            return false;
        });
        $('.down').click(function () {
            var $input = $(this).parent().find('input');
            var count = parseInt($input.val()) - 1;
            count = count < 1 ? 1 : count;
            $input.val(count);
            $input.change();
            return false;
        });
    });

};
