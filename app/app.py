from fastai.vision.all import load_learner
import gradio as gr
import platform


if platform.system() == "Windows":
    import pathlib
    temp = pathlib.PosixPath
    pathlib.PosixPath = pathlib.WindowsPath


model = load_learner("pst_recognizer_v0.pkl")
pst_labels = tuple(model.dls.vocab)


def pst_recognizer(pst_image):
    pred, idx, probs = model.predict(pst_image)
    return dict(zip(pst_labels, map(float, probs)))


image = gr.inputs.Image(shape=(192, 192))
label = gr.outputs.Label(num_top_classes=5)

examples = [
    "architecture_photography.jpg",
    "double_exposure_photography.jpg",
    "food_photography.jpg",
    "landscape_photography.jpg",
    "portrait_photography.jpg",
    "street_photography.jpg"
]

iface = gr.Interface(fn=pst_recognizer, inputs=image, outputs=label, examples=examples)
iface.launch(inline=False)
