<script>
import axios from 'axios'

export default({
    el: '#app',
    data () {
        return {
            name: null,
            birthday: null,
            address: null,
            age: null,
            degree: null,
            major: null,
            email: null,
            status: null,
            description: null,
            image: null,
        }
    },
    mounted () {
        axios.get('http://localhost:8000/api/about').then(response => ([
            this.name = response.data.data.name,
            this.birthday = response.data.data.birthday,
            this.address = response.data.data.address,
            this.age = response.data.data.age,
            this.degree = response.data.data.degree,
            this.major = response.data.data.major,
            this.email = response.data.data.email,
            this.status = response.data.data.status,
            this.description = response.data.data.description,
            this.image = response.data.data.image,
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
                    <img v-bind:src="'http://localhost:8000/' + image" class="img-fluid w-60">
                </div>
                <div class="col-lg-8 pt-4 pt-lg-0 content">
                    <h3 class="mb-4">{{ name }}</h3>
                    <div class="row">
                        <div class="col-lg-6">
                            <ul>
                                <li>
                                    <i class="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>{{ birthday }}</span></li>
                                <li>
                                    <i class="bi bi-chevron-right"></i> <strong>Address:</strong> <span>{{ address }}</span></li>
                                <li>
                                    <i class="bi bi-chevron-right"></i> <strong>Age:</strong> <span>{{ age }}</span>
                                </li>
                                <li>
                                    <i class="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>{{ degree }}</span>
                                </li>
                            </ul>
                        </div>
                        <div class="col-lg-6">
                            <ul>
                                <li>
                                    <i class="bi bi-chevron-right"></i> <strong>Major:</strong> <span>{{ major }}</span></li>
                                <li>
                                    <i class="bi bi-chevron-right"></i> <strong>Email:</strong> <span>{{ email }}</span>
                                </li>
                                <li>
                                    <i class="bi bi-chevron-right"></i> <strong>Status:</strong> <span>{{ status }}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <p>{{ description }}</p>
                </div>
            </div>

        </div>
    </section><!-- End About Section -->
</template>