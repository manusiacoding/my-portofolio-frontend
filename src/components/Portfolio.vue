<script>
import axios from 'axios'

export default({
    el: '#app',
    data () {
        return {
            portfolio: []
        }
    },
    mounted () {
        axios.get('https://dashboard-portfolio.mctechnologyofficial.com/api/portfolio').then(response => ([
            this.portfolio = response.data.data
        ]))
    }
})
</script>

<template>
    <!-- ======= Portfolio Section ======= -->
    <section id="portfolio" class="portfolio section-bg">
        <div class="container" data-aos="fade-up">

            <div class="section-title">
                <h2>Portfolio</h2>
            </div>

            <div class="row">
                <div class="col-lg-12 d-flex justify-content-center" data-aos="fade-up" data-aos-delay="100">
                    <ul id="portfolio-flters">
                        <li data-filter="*" class="filter-active">All</li>
                        <li data-filter="#mobileapp">Application</li>
                        <li data-filter="#website">Website</li>
                    </ul>
                </div>
            </div>

            <div class="row portfolio-container" data-aos="fade-up" data-aos-delay="200">

                <div v-for="portfolios in portfolio" :key="portfolios.id" class="col-lg-4 col-md-6 portfolio-item" :id="portfolios.type">
                    <div class="portfolio-wrap">
                        <img v-bind:src="'https://dashboard-portfolio.mctechnologyofficial.com/' + portfolios.image" class="img-fluid" alt="">
                        <div class="portfolio-info">
                            <h4>{{ portfolios.name }}</h4>
                            <div v-if="portfolios.type == 'mobileapp'">
                                <p >Application</p>
                            </div>
                            <div v-if="portfolios.type == 'website'">
                                <p >Website</p>
                            </div>
                            <div class="portfolio-links">
                                <a href="assets/img/portfolio/app.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox" title=""><i class="bx bx-plus"></i></a>
                                <a :href="portfolios.url" target="_blank" class="portfolio-details-lightbox" data-glightbox="type: external" title="Portfolio Details"><i class="bx bx-link"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </section><!-- End Portfolio Section -->
</template>