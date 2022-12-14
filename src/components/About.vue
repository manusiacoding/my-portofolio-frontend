<script>
import axios from 'axios'

export default({
    el: '#app',
    data () {
        return {
            about: [],

        }
    },
    mounted () {
        axios.get('https://dashboard-portfolio.mctechnologyofficial.com/api/about').then(response => ([
            this.about = response.data.data
        ]))
    }
})
</script>


<template>
    <!-- ======= About Section ======= -->
    <section id="about" class="about">
        <div class="container" data-aos="fade-up">

            <div class="section-title">
                <h2>About</h2>
            </div>

            <div class="row">
                <div class="col-lg-4">
                    <img v-bind:src="'https://dashboard-portfolio.mctechnologyofficial.com/' + about.image" class="img-fluid w-60">
                </div>
                <div class="col-lg-8 pt-4 pt-lg-0 content">
                    <h3 class="mb-4">{{ about.name }}</h3>
                    <div class="row">
                        <div class="col-lg-6">
                            <ul>
                                <li>
                                    <i class="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>{{ about.birthday }}</span></li>
                                <li>
                                    <i class="bi bi-chevron-right"></i> <strong>Address:</strong> <span>{{ about.address }}</span></li>
                                <li>
                                    <i class="bi bi-chevron-right"></i> <strong>Age:</strong> <span>{{ about.age }}</span>
                                </li>
                                <li>
                                    <i class="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>{{ about.degree }}</span>
                                </li>
                            </ul>
                        </div>
                        <div class="col-lg-6">
                            <ul>
                                <li>
                                    <i class="bi bi-chevron-right"></i> <strong>Major:</strong> <span>{{ about.major }}</span></li>
                                <li>
                                    <i class="bi bi-chevron-right"></i> <strong>Email:</strong> <span>{{ about.email }}</span>
                                </li>
                                <li>
                                    <i class="bi bi-chevron-right"></i> <strong>Status:</strong> <span>{{ about.status }}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <p>{{ about.description }}</p>
                </div>
            </div>

        </div>
    </section><!-- End About Section -->
</template>