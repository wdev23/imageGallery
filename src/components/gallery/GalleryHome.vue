<template>
    <div class="gallery_container container flex flex-col min-h-screen">
        <!-- Header -->
        <div class="gallery_header flex flex-col text-cl_blue font-bold text-lg">
            <h1 class="text-white text-2xl font-extrabold">Image Gallery</h1>
            <p>You can add up to 8 images</p>
        </div>

        <!-- Images Container -->
        <div class="bg-cl_baige flex flex-col flex-grow justify-center px-4 py-4">
            <div class="h-96" v-if="images.length === 0">
                <h4>No images added yet.</h4>
            </div>

            <div class="gallery_content" v-else>
                <div class="h-[200px] bg-cl_blue rounded-lg relative" v-for="(image, index) in images" :key="image.id">
                    <img :src="image.url" :alt="image.id" class="rounded-lg h-full w-full border-2 border-cl_yellow">
                    <button class="favorite-button bg-none border-none absolute bottom-2 right-4 cursor-pointer z-10
                    text-3xl transform transition-all hover:scale-150" @click.prevent="toggleFavorite(image)"
                        :class="image.isFavorite ? 'text-cl_yellow' : 'text-white'">★</button>
                    <button class="absolute bottom-2 left-4 py-1 px-4 rounded-lg bg-transparent text-white border-2 border-cl_blue font-bold
                    transition-all duration-300 hover:bg-cl_blueLight"
                    @click.prevent="removeImage(index)">Delete</button>
                </div>
            </div>
        </div>

        <!-- Button and Input to add a new image -->
        <form @submit.prevent="addImage">
            <footer
                class="bg-cl_yellow flex flex-col md:flex-row flex-grow h-full p-8 justify-center items-center gap-4">
                <button type="submit"
                    class="text-2xl font-extrabold text-white border-white px-6 py-2 border-x-2 shadow-lg bg-cl_blueLight rounded-lg
                   cursor-pointer transform transition-all duration-300 hover:scale-90 hover:bg-cl_blue hover:text-[#ccc]">
                    Add Image URL
                </button>
                <input type="text" name="image_url" placeholder="Enter Image URL"
                    class="peer h-10 w-96 border-2 border-cl_blue rounded-[7px] px-3 py-2.5" v-model="imageUrl">
            </footer>
        </form>
    </div><!-- gallery_container -->
</template>

<script setup>
import { ref } from 'vue'

// Variables
const images = ref([])
const imageUrl = ref('')


// Functions

// Add Image
const addImage = () => {
    if (images.value.length >= 8) {
        alert('You have reached the maximum number of images (8).')
        return
    }

    if (imageUrl.value.trim() !== '') {
        const image = {
            id: images.value.length + 1,
            url: imageUrl.value,
            isFavorite: false
        }
        images.value.push(image)
        imageUrl.value = ''
    }
}

// Toggle Favorite 
const toggleFavorite = (image) => {
    image.isFavorite = !image.isFavorite
}

// Remove Image
const removeImage = (index) => {
    images.value.splice(index, 1)
}


</script>

<style scoped>
.gallery_header {
    @apply h-20 bg-cl_yellow flex justify-center items-center;
}

.gallery_content {
    @apply grid md:grid-cols-4 gap-3 md:grid-rows-2;
}
</style>