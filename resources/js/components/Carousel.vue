<!-- Carousel.vue -->
<template>
    <div v-if="slides.length" id="homeCarousel" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button v-for="(slide, index) in slides" :key="`indicator-${index}`"
                type="button" data-bs-target="#homeCarousel" 
                :data-bs-slide-to="index" :class="{ active: index === 0 }"
                :aria-current="index === 0 ? 'true' : 'false'" 
                :aria-label="`Slide ${index + 1}`"></button>
      </div>
      <div class="carousel-inner">
        <div v-for="(slide, index) in slides" :key="`slide-${index}`" 
             class="carousel-item" :class="{ active: index === 0 }">
          <img :src="getImageUrl(slide.image)" class="d-block w-100" :alt="slide.heading">
          <div class="carousel-caption d-none d-md-block">
            <h5>{{ slide.heading }}</h5>
            <p>{{ slide.paragraph }}</p>
          </div>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#homeCarousel" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#homeCarousel" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
    <div v-else>Loading...</div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'Carousel',
    data() {
      return {
        slides: []
      }
    },
    mounted() {
      this.fetchCarouselData();
    },
    methods: {
        async fetchCarouselData() {
      try {
        const response = await axios.get(`${import.meta.env.VITE_APP_URL}/api/carousel`);
        this.slides = response.data;
      } catch (error) {
        console.error('Error fetching carousel data:', error);
      }
    },
    getImageUrl(image) {
      return `${import.meta.env.VITE_APP_URL}${image}`;
    }
    }
  }
  </script>