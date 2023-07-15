class Gallery {
    constructor() {
        var imageNameArray = [
            "flowers-pink-small",
            "flowers-purple-small",
            "flowers-red-small",
            "flowers-white-small",
            "flowers-yellow-small"
        ]
        this.thumbnailContainer = document.getElementById('thumbnailContainer');
        this.handleArrayElement(imageNameArray);
        this.featuredImage = document.getElementById('featured-image');
        this.thumbnails = document.querySelectorAll('.thumbnail');
        this.featureImageText = document.getElementById('featured-image-text');

        this.thumbnails.forEach((thumbnail) => {
            thumbnail.addEventListener('click', () => {
                this.handleThumbnailClick(thumbnail, this.thumbnails);
            });
        });
    }

    handleThumbnailClick(thumbnail, thumbnails) {
        // Update the source of the featured image with the clicked thumbnail's source
        let featuredImageSrc = thumbnail.src;
        for (let i = 0; i < thumbnails.length; i++) {
            thumbnails[i].className = this.thumbnails[i].className.replace(" active", "");
        }
        thumbnail.classList.add("active");
        featuredImageSrc = featuredImageSrc.replace('small', 'large');
        this.featuredImage.src = featuredImageSrc;

        const startIndex = this.formatString(this.featuredImage.src, '/');
        const endIndex = this.formatString(this.featuredImage.src, '.');
        const imageName = this.getTitle(this.featuredImage.src, startIndex, endIndex);
        const str = imageName;
        this.featureImageText.innerHTML = str;
    }

    formatString(givenStr, chr) {
        const str = givenStr;
        const lastIndex = str.lastIndexOf(chr);
        return lastIndex;
    }

    getTitle(givenStr, startIndex, endIndex) {
        let str = givenStr;
        const replacement = '';

        // Convert the string to an array
        const strArray = str.split('');

        for (let i = 0; i < givenStr.length; i++) {
            if (i <= startIndex || i >= endIndex) {
                strArray[i] = replacement;
            }
            if (strArray[i] === '-') {
                strArray[i] = ' ';
            }
        }

        str = strArray.join('');
        return str;
    }

    handleArrayElement(_imageNameArray) {
        for (let i = 0; i < _imageNameArray.length; i++) {
            const element = document.createElement('li');
            const imgElement = document.createElement('img');
            imgElement.classList.add("thumbnail");
            imgElement.src = `./images/${_imageNameArray[i]}.jpg`;
            imgElement.width = "240";
            imgElement.height = "160";
            element.appendChild(imgElement);
            this.thumbnailContainer.appendChild(element);
        }
    }
}

// Create an instance of the Gallery object
const gallery = new Gallery();
