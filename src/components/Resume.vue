<script>
/* eslint-disable */ 

import axios from 'axios'

export default({
    data () {
        return {
            education: [],
            about: [],
            experience: [],
        }
    },
    mounted () {
        axios.get('https://dashboard-portfolio.mctechnologyofficial.com/api/about').then(response => ([
            this.about = response.data.data
        ]))

        axios.get('https://dashboard-portfolio.mctechnologyofficial.com/api/education').then(response => ([
            this.education = response.data.data
        ]))
        
        axios.get('https://dashboard-portfolio.mctechnologyofficial.com/api/experience').then(response => ([
            this.experience = response.data.data
        ]))
    },
})
</script>

<template>
    <!-- ======= Resume Section ======= -->
    <section id="resume" class="resume">
        <div class="container" data-aos="fade-up">

            <div class="section-title">
                <h2>Resume</h2>
            </div>

            <div class="row">
                <div class="col-lg-6">
                    <h3 class="resume-title">Summary</h3>
                    <div class="resume-item pb-0">
                        <h4>{{ about.name }}</h4>
                        <p><em>{{ about.description }}</em></p>
                        <ul>
                            <li>{{ about.address }}</li>
                            <li>{{ about.email }}</li>
                        </ul>
                    </div>

                    <h3 class="resume-title">Education</h3>
                    <div v-for="educations in education" :key="educations.id" class="resume-item">
                        <h4>{{ educations.name }}</h4>
                        <h5>{{ educations.year }}</h5>
                        <p><em>{{ educations.major }}</em></p>
                        <p>{{ educations.description }}</p>
                    </div>
                </div>
                <div class="col-lg-6">
                    <h3 class="resume-title">Professional Experience</h3>
                    <div v-for="experiences in experience" :key="experiences.id" class="resume-item">
                        <h4>{{ experiences.position }}</h4>
                        <h5>{{ experiences.date }}</h5>
                        <p><em>{{ experiences.company }}</em></p>
                        <ul>
                            <li>{{ experiences.description }}</li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    </section><!-- End Resume Section -->
</template>