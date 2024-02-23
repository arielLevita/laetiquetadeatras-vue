<script>
export default {
    data() {
        return {
            project: 'La Etiqueta de Atrás',
            name: '',
            email: '',
            product: '',
            url_front: '',
            url_back: '',
            message: ''
        }
    },
    methods: {
        async submitForm() {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json'
                },
                body: JSON.stringify({
                    access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY,
                    project: this.project,
                    name: this.name,
                    email: this.email,
                    product: this.product,
                    url_front: this.url_front,
                    url_back: this.url_back,
                    message: this.message
                })
            })
            const result = await response.json()
            if (result.success) {
                console.log(result)
                this.$swal({
                    icon: 'success',
                    titleText: 'Su mensaje ha sido enviado con éxito',
                    background: '#EDDFB3',
                    iconColor: '#4ca538',
                    showConfirmButton: false
                })
            }
        },
        clearForm() {
            this.$refs.contactForm.reset()
        }
    }
}
</script>

<template>
    <div class="wrapper">
        <p class="text-center my-3 my-md-4 px-2">
            Si tenés alguna consulta o querés agregar información, no dudes en enviarnos un mensaje.
        </p>
    </div>

    <div class="wrapper mb-4 px-3">
        <div class="row">
            <div class="col"></div>
            <div class="col-12 col-md-8 col-lg-6 contact-form shadow p-4 rounded rounded-lg">
                <form id="contact-form" @submit.prevent="submitForm" ref="contactForm">
                    <input type="hidden" name="contact_number" />

                    <label for="name" class="form-label">Nombre:</label>
                    <input
                        type="text"
                        class="form-control"
                        id="name"
                        name="name"
                        v-model="name"
                        required
                    />

                    <label for="email" class="form-label">Correo electrónico:</label>
                    <input
                        type="email"
                        class="form-control"
                        id="email"
                        name="email"
                        v-model="email"
                        required
                    />

                    <fieldset class="mt-4">
                        <legend>----- Podés colaborar con una etiqueta -----</legend>
                        <label for="product" class="form-label">Producto:</label>
                        <input
                            type="text"
                            class="form-control"
                            id="product"
                            name="product"
                            v-model="product"
                        />
                        <label for="urlFront" class="form-label">URL de la imagen frontal:</label>
                        <input
                            type="text"
                            class="form-control"
                            id="urlFront"
                            name="url_front"
                            v-model="url_front"
                        />
                        <label for="urlBack" class="form-label">URL de la imagen trasera:</label>
                        <input
                            type="text"
                            class="form-control"
                            id="urlBack"
                            name="url_back"
                            v-model="url_back"
                        />
                    </fieldset>

                    <fieldset class="mt-4">
                        <legend>----- Y dejar tu comentario -----</legend>
                        <label for="message" class="form-label">Mensaje:</label>
                        <textarea
                            class="form-control"
                            id="message"
                            rows="3"
                            name="message"
                            v-model="message"
                        ></textarea>
                    </fieldset>

                    <div class="d-flex justify-content-between mt-4">
                        <button
                            class="btn border border-dark w-25"
                            type="button"
                            @click.prevent="clearForm"
                        >
                            Borrar
                        </button>
                        <button class="btn shadow ms-auto w-50" type="submit" value="send">
                            Enviar
                        </button>
                    </div>
                </form>
                <p id="sent-message"></p>
            </div>
            <div class="col"></div>
        </div>
    </div>
</template>

<style scope>
.contact-form,
.form-control {
    border: 1px solid rgba(0, 0, 0, 0.25);
}

legend {
    font-size: smaller;
    color: #888888;
    text-align: center;
    font-style: italic;
    margin-bottom: 0;
}

.contact-form input,
#message {
    background-color: #fffad7;
}

.form-label {
    font-weight: 600;
    margin-bottom: 0;
    margin-top: 0.5rem;
}

button[type='submit'] {
    border: 1px solid var(--color-logo);
}

button[type='button'] {
    background-color: var(--color-pastel-3);
}

button[type='button']:hover {
    background-color: var(--color-pastel-4);
}
</style>
