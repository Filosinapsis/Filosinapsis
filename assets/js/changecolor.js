let platform_map = document.getElementById('PMap')

$(function() {
    $('.color').click(function() {
        var color = $(this).attr('data-value');
        var is_image = $(this).attr('data-image');

        if (is_image) {
            platform_map.style['background-image'] = "url(" + color + ")";
        } else {
            platform_map.style['background-image'] = "";
            platform_map.style['background-color'] = color;
        }

    });

    //add color picker if supported
    if (Modernizr.inputtypes.color) {
        $('.picker').css('display', 'inline-block');
        var c = document.getElementById('colorpicker');
        c.addEventListener(
            'change',
            function(e) {
                var color = c.value;
                $('.colormap').css('background-color', color);
            },
            false
        );
    }
});
function pickColor() {
    $('#colorpicker').click();
}
