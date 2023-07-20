function readURL(input) {
    var Thisinput = $(input)
    if (input.files && input.files[0]) {

        var reader = new FileReader();

        reader.onload = function(e) {
            Thisinput.closest('.file-upload').find('.image-upload-wrap').hide();

            Thisinput.closest('.file-upload').find('.file-upload-image').attr('src', e.target.result);
            Thisinput.closest('.file-upload').find('.file-upload-content').show();

            Thisinput.closest('.file-upload').find('.image-title').html(input.files[0].name);
        };

        reader.readAsDataURL(input.files[0]);

    } else {
        removeUpload();
    }
}

function removeUpload() {
    $('.file-upload-input').replaceWith($('.file-upload-input').clone());
    $('.file-upload-content').hide();
    $('.image-upload-wrap').show();
}
$('.image-upload-wrap').bind('dragover', function () {
    $('.image-upload-wrap').addClass('image-dropping');
});
$('.image-upload-wrap').bind('dragleave', function () {
    $('.image-upload-wrap').removeClass('image-dropping');
});
