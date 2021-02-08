<template>
  <div>
    <!-- Registration -->
    <div v-show="!completed" class="container">
      <div class="row">
        <div class="col">
          <h1>Register</h1>
          <p>Create your ESM Inbound profile.</p>
          <FormulateForm v-model="user" @submit="registerUser">
            <FormulateInput
              type="text"
              name="first_name"
              label="First Name"
              placeholder="John"
              validation="required|alpha:latin"
              error-behavior="submit"
            />
            <FormulateInput
              type="text"
              name="last_name"
              label="Last Name"
              placeholder="Doe"
              validation="required|alpha:latin"
              error-behavior="submit"
            />
            <FormulateInput
              type="email"
              name="email"
              label="Email Address"
              placeholder="johndoe@example.com"
              validation="required|email"
              error-behavior="submit"
            />
            <FormulateInput
              type="text"
              name="company"
              label="Company Name"
              placeholder="Acme Limited"
              validation="required|alpha:latin"
              error-behavior="submit"
            />
            <FormulateInput
              type="text"
              name="company_role"
              label="Current Role"
              placeholder="Chief Marketing Officer"
              validation="required|alpha:latin"
              error-behavior="submit"
            />
            <div v-if="loading">
              <img src="@/assets/loading.svg" alt="Loading" class="loader" />
            </div>
            <button v-else type="submit">Create profile</button>
          </FormulateForm>
        </div>
      </div>
    </div>
    <!-- Completed -->
    <div v-show="completed" class="container">
      <div class="row">
        <div class="col">
          <h2 style="color: green">Completed</h2>
          <p>Welcome to ESM Inbound!</p>
          <router-link
            :to="{
              path: '/profile',
              query: {
                email: this.user.email,
              },
            }"
            class="button"
            >Go to profile</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Axios from "axios";

export default {
  metaInfo: {
    title: "Register",
  },

  data: function () {
    return {
      user: {},
      loading: null,
      completed: null,
    };
  },

  methods: {
    registerUser: async function () {
      try {
        this.loading = true;
        await Axios({
          method: "post",
          url: `${this.apiurl}/users`,
          data: this.user,
        });
        this.completed = true;
      } catch (error) {
        this.$toast.error("Error registering your profile");
        console.log(error);
      } finally {
        this.loading = false;
      }
    },
    viewProfile: function () {
      this.$router.push();
    },
  },
};
</script>

<style scoped>
</style>