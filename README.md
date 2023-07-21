# IC Photography Styles

[IC Photography Styles](https://github.com/MYTE21/IC.Photography.Styles) is a fascinating and cutting-edge machine learning project that aims to identify and distinguish between a broad spectrum of photographic styles. This project can recognize and categorize 25 different types of photographic genres using the most advanced machine learning algorithms. The project is made to automatically assess and categorize photographs based on their distinctive photographic style, from landscape and portrait photography to abstract and fine art photography.

![https://www.adobe.com/creativecloud/photography/discover/types-of-photography.html](docs/assets/icps.png)

In-depth knowledge of the complexities and subtleties of photography was used to build IC Photography Styles.
An intelligent system
that accurately distinguishes various photographic types was developed by the team after thorough research.
An enormous dataset of pictures from all across the world was used to train the system.

With its cutting-edge features and complex technology,
IC Photography Styles will certainly alter the way we evaluate and classify photographs.
This project is certain to give you insightful knowledge about the various kinds of photography styles available,
whether you're a professional photographer
seeking to improve your craft or a photography enthusiast wanting to explore the world of photography.
Why not try it out for yourself right now and discover what the future of photography holds?

## Project Overview

[IC Photography Styles](https://github.com/MYTE21/IC.Photography.Styles)' primary goal is
to offer an automated method for classifying and identifying various photographic styles.
The project explores significant visual aspects in photographs
by utilizing the strength of machine learning techniques and placing them in one of the 25 categories listed below:

1. **Natural World Photography**
   1. Landscape Photography
   2. Wildlife Photography
   3. Underwater Photography
   4. Astrophotography
   5. Storm Photography
   6. Pet Photography
   7. Macro Photography
   8. Flower Photography
2. **Cityscapes and Structures Photography**
   1. Architecture Photography
   2. Real estate Photography
3. **People Photography**
   1. Portrait Photography
   2. Event Photography
   3. Fashion Photography
   4. Sports Photography
   5. Documentary Photography
4. **Lifestyle Photography**
   1. Street Photography
   2. Wedding Photography
5. **Commercial Photography**
   1. Food Photography
   2. Product Photography
6. **Artistic Photography**
   1. Still Life Photography
   2. Black and White Photography
   3. Fine Art Photography
   4. Double Exposure Photography
   5. Surreal Photography
   6. Abstract Photography

## How It Works

[IC Photography Styles](https://github.com/MYTE21/IC.Photography.Styles) uses sophisticated machine learning methods,
in particular deep learning models,
to categorize and identify the photography styles visible in photos.
In order to train the model,
the project uses an extensive labeled dataset of several photos reflecting various photographic approaches.
Extensive training enables the model to recognize the unique traits and patterns that define each style,
allowing for precise classification of styles.

## Get Started

`Python version 3.10 or 3.11 is required.`

To get started with the IC Photography Styles project, follow these steps:

1. Clone the project repository from GitHub: [IC.Photography.Styles](https://github.com/MYTE21/IC.Photography.Styles.git)

    ```powershell
    git clone https://github.com/MYTE21/IC.Photography.Styles.git
    ```

2. Set up the required dependencies and libraries by executing the following command:

    ```powershell
    pip install -r requirements.txt
    ```

3. Obtain a dataset of images representing the 25 photography styles by executing the following notebook: [data_preprocessing.ipynb](notebooks/data_preprocessing.ipynb).
4. Train the machine learning model using the dataset by executing the following notebook: [training_model_and_cleaning_data.ipynb](notebooks/training_model_and_cleaning_data.ipynb).
5. Now, you can identify the photography style of any image by executing the following commands:

    ```powershell
    cd .\app\
    python app.py
    ```

   Open [http://127.0.0.1:7860](http://127.0.0.1:7860/) in your browser to play with the most recent model:

   ![icps_model.png](docs/assets/icps_model.png)

   Or you can visit [Hugging Face Space: ic-photography-styles](https://huggingface.co/spaces/myte/ic-photography-styles) and play with the most recent model.

# Development Journal

## Dataset Preparation
Data Collection: Downloaded from DuckDuckGo using term name
DataLoader: Used fastai DataBlock API to set up the DataLoader.
Data Augmentation: fastai provides default data augmentation which operates in GPU.
Details can be found in notebooks/data_prep.ipynb

## Training and Data Cleaning
Training: Fine-tuned a resnet34 model for 5 epochs (3 times) and got upto ~89% accuracy.
Data Cleaning: This part took the highest time. Since I collected data from browser, there were many noises. Also, there were images that contained. I cleaned and updated data using fastai ImageClassifierCleaner. I cleaned the data each time after training or finetuning, except for the last time which was the final iteration of the model.

## Model Deployment
I deployed to model to HuggingFace Spaces Gradio App. The implementation can be found in deployment folder or here.

## API integration with GitHub Pages
The deployed model API is integrated here in GitHub Pages Website. Implementation and other details can be found in docs folder.