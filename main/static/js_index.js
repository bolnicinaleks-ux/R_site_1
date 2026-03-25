const glav_basket = document.getElementById('glav_basket');
const button = document.getElementById('pod_glav_op_op_img_basket');
const pod_glav_op_basket = document.getElementById('pod_glav_op_basket');
const pod_glav_op_op_basket_blure = document.getElementById('pod_glav_op_op_basket_blure'); 
const pod_glav_op_op_basket = document.getElementById('pod_glav_op_op_basket');
const pod_glav_photo_basket = document.getElementById('pod_glav_photo_basket');
const pod_glav_photo_ten_basket = document.getElementById('pod_glav_photo_ten_basket');
const pod_glav_op_menu_basket_op = document.getElementById('pod_glav_op_menu_basket_op');
const pod_glav_op_menu_basket_xar = document.getElementById('pod_glav_op_menu_basket_xar');
const pod_glav_op_menu_basket_ot = document.getElementById('pod_glav_op_menu_basket_ot');
pod_glav_op_op_basket_1 = document.getElementById('pod_glav_op_op_basket_1');
pod_glav_op_op_basket_2 = document.getElementById('pod_glav_op_op_basket_2');
pod_glav_op_op_basket_3 = document.getElementById('pod_glav_op_op_basket_3');
var p_button = 'nons';
var op_xar_ot = 'op';

button.addEventListener('click', (e) => {
    if (p_button === 'nons') {
        glav_basket.classList.add('glav_basket_anim');
        glav_basket.classList.remove('glav_basket');
        button.classList.add('pod_glav_op_op_img_basket_anim');
        button.classList.remove('pod_glav_op_op_img_basket');
        pod_glav_op_basket.classList.add('pod_glav_op_basket_anim');
        pod_glav_op_basket.classList.remove('pod_glav_op_basket');
        pod_glav_op_op_basket_blure.classList.add('pod_glav_op_op_basket_blure_anim');
        pod_glav_op_op_basket_blure.classList.remove('pod_glav_op_op_basket_blure');
        pod_glav_op_op_basket.classList.add('pod_glav_op_op_basket_anim');
        pod_glav_op_op_basket.classList.remove('pod_glav_op_op_basket');
        pod_glav_photo_basket.classList.add('pod_glav_photo_basket_anim');
        pod_glav_photo_basket.classList.remove('pod_glav_photo_basket');
        pod_glav_photo_ten_basket.classList.add('pod_glav_photo_ten_basket_anim');
        pod_glav_photo_ten_basket.classList.remove('pod_glav_photo_ten_basket');
        p_button = 'scrol';
    } else {
        glav_basket.classList.remove('glav_basket_anim');
        glav_basket.classList.add('glav_basket');
        button.classList.remove('pod_glav_op_op_img_basket_anim');
        button.classList.add('pod_glav_op_op_img_basket');
        pod_glav_op_basket.classList.remove('pod_glav_op_basket_anim');
        pod_glav_op_basket.classList.add('pod_glav_op_basket');
        pod_glav_op_op_basket_blure.classList.remove('pod_glav_op_op_basket_blure_anim');
        pod_glav_op_op_basket_blure.classList.add('pod_glav_op_op_basket_blure');
        pod_glav_op_op_basket.classList.remove('pod_glav_op_op_basket_anim');
        pod_glav_op_op_basket.classList.add('pod_glav_op_op_basket');
        pod_glav_photo_basket.classList.remove('pod_glav_photo_basket_anim');
        pod_glav_photo_basket.classList.add('pod_glav_photo_basket');
        pod_glav_photo_ten_basket.classList.remove('pod_glav_photo_ten_basket_anim');
        pod_glav_photo_ten_basket.classList.add('pod_glav_photo_ten_basket');
        p_button = 'nons';
    }
});

pod_glav_op_menu_basket_op.addEventListener('click', (e) => {
    pod_glav_op_menu_basket_ot.style.color = '#484848';
    pod_glav_op_menu_basket_xar.style.color = '#484848';
    pod_glav_op_menu_basket_op.style.color = '#000000';
    op_xar_ot = 'op';
    op_menu();
});
pod_glav_op_menu_basket_xar.addEventListener('click', (e) => {
    pod_glav_op_menu_basket_ot.style.color = '#484848';
    pod_glav_op_menu_basket_xar.style.color = '#000000';
    pod_glav_op_menu_basket_op.style.color = '#484848';
    op_xar_ot = 'xar';
    op_menu();
});
pod_glav_op_menu_basket_ot.addEventListener('click', (e) => {
    pod_glav_op_menu_basket_ot.style.color = '#000000';
    pod_glav_op_menu_basket_xar.style.color = '#484848';
    pod_glav_op_menu_basket_op.style.color = '#484848';
    op_xar_ot = 'ot';
    op_menu(); 
});
op_menu();

function op_menu(){
    if (op_xar_ot === 'op') {
        pod_glav_op_op_basket_1.classList.remove('display-none');
        pod_glav_op_op_basket_2.classList.add('display-none');
        pod_glav_op_op_basket_3.classList.add('display-none');
    } else if (op_xar_ot === 'xar') {
        pod_glav_op_op_basket_1.classList.add('display-none');
        pod_glav_op_op_basket_2.classList.remove('display-none');
        pod_glav_op_op_basket_3.classList.add('display-none');
    } else {
        pod_glav_op_op_basket_1.classList.add('display-none');
        pod_glav_op_op_basket_2.classList.add('display-none');
        pod_glav_op_op_basket_3.classList.remove('display-none');
    }
};