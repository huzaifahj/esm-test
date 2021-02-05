<template>
  <div>
    <!-- Loading -->
    <div v-if="loading" class="container">
      <div class="row">
        <div class="col">
          <img src="@/assets/loading.svg" alt="Loading" class="loader" />
        </div>
      </div>
    </div>
    <!-- User Profile -->
    <div v-if="!loading && user" class="container">
      <div class="row">
        <div class="col">
          <h2 style="margin-bottom: 25px">
            Welcome, {{ user.first_name }} {{ user.last_name }}!
          </h2>
          <div class="info-label">Email</div>
          <p style="margin-top:0;">{{ user.email }}</p>
          <div class="info-label">Company</div>
          <p style="margin-top:0;">{{ user.company }}</p>
          <div class="info-label">Current Role</div>
          <p style="margin-top:0;">{{ user.company_role }}</p>
        </div>
      </div>
    </div>
    <!-- No User Found -->
    <div v-if="!loading && !user" class="container">
      <div class="row">
        <div class="col">
          <h3>User not found</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Axios from "axios"

export default {
  metaInfo: {
    title: "Profile",
  },

  data: function () {
    return {
      user: null,
      loading: null,
    };
  },

  created: async function () {
    try {
      if (!this.$route.query.email) return;
      this.loading = true;
      const response = await Axios({
        method: "get",
        url: `${this.apiurl}/users/${this.$route.query.email}`,
      })
      this.user = response.data
    } catch (error) {
      console.log(error);
    } finally {
      this.loading = false;
    }
  },
};
</script>