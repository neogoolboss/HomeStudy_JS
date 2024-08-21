
// $('.tab-button').eq(0).on('click', function() {
//     $('.tab-button').removeClass('orange');
//     $('.tab-button').eq(0).addClass('orange');
//     $('.tab-content').removeClass('show');
//     $('.tab-content').eq(0).addClass('show');
// });

// $('.tab-button').eq(1).on('click', function() {
//     $('.tab-button').removeClass('orange');
//     $('.tab-button').eq(1).addClass('orange');
//     $('.tab-content').removeClass('show');
//     $('.tab-content').eq(1).addClass('show');
// });

// $('.tab-button').eq(2).on('click', function() {
//     $('.tab-button').removeClass('orange');
//     $('.tab-button').eq(2).addClass('orange');
//     $('.tab-content').removeClass('show');
//     $('.tab-content').eq(2).addClass('show');
// });

for (let index = 0; index < $('.tab-button').length; index++) {
    $('.tab-button').eq(index).on('click', function() {
        $('.tab-button').removeClass('orange');
        $('.tab-button').eq(index).addClass('orange');
        $('.tab-content').removeClass('show');
        $('.tab-content').eq(index).addClass('show');
    });
    
}
