async function loaded(reader) {
    try {
        const response = await fetch("https://myte-ic-photography-styles.hf.space/run/predict", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                data: [reader.result]
            })
        });

        if (!response.ok) {
            throw new Error("Error: HTTP status " + response.status);
        }

        const json = await response.json();
        const label = json.data[0].label;

        results.innerHTML = `<p>${label}</p>
                                     <p>${json.data[0].confidences[0].confidence}</p>`;
    } catch (error) {
        console.error("An error occurred: ", error);
    }
}

function readURL(input) {
    let image_input = $(input);
    if (input.files && input.files[0]) {

        let reader = new FileReader();

        reader.onload = function(e) {
            image_input.closest('.file-upload').find('.image-upload-wrap').hide();

            image_input.closest('.file-upload').find('.file-upload-image').attr('src', e.target.result);
            image_input.closest('.file-upload').find('.file-upload-content').show();

            image_input.closest('.file-upload').find('.image-title').html(input.files[0].name);
        };

        reader.addEventListener("load", () => loaded(reader))
        reader.readAsDataURL(input.files[0]);

    } else {
        removeUpload();
    }
}

function removeUpload() {
    const fileUploadInput = $('.file-upload-input');
    const clonedFileUploadInput = fileUploadInput.clone();
    fileUploadInput.replaceWith(clonedFileUploadInput);

    $('.file-upload-content').hide();
    $('.image-upload-wrap').show();
}


$(document).on('dragover', '.image-upload-wrap', function () {
    $(this).addClass('image-dropping');
});

$(document).on('dragleave', '.image-upload-wrap', function () {
    $(this).removeClass('image-dropping');
});
