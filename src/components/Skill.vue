<script>
import axios from 'axios'

export default({
    el: '#app',
    data () {
        return {
            skill: []
        }
    },
    mounted () {
        axios.get('https://dashboard-portfolio.mctechnologyofficial.com/api/skill').then(response => ([
            this.skill = response.data.data
        ]))
    }
})
</script>

<template>
    <!-- ======= Skills Section ======= -->
    <section id="skills" class="skills section-bg">
        <div class="container" data-aos="fade-up">

            <div class="section-title">
                <h2>Skills</h2>
            </div>

            <div class="row skills-content">

                <div class="col-lg-12">
                    <!-- :style="'width:' + percentu + '%'"> -->
                    <div v-for="skills in skill" :key="skills.id" class="progress">
                        <span class="skill">{{ skills.name }} <i class="val">{{ skills.percentage + ' %' }}</i></span>
                        <div class="progress">
                            <div class="progress-bar" :style="'width:' + skills.percentage + '%'" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    </section><!-- End Skills Section -->
</template>