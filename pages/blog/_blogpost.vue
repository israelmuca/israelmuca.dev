<template>
  <div>
    <nuxtdown-body class="body" :body="post.body"/>
  </div>
</template>

<script>
export default {
  head: function() {
    return {
      title: `${this.post.title}`,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.post.description
        }
      ]
    };
  },
  asyncData: async ({ app, route, payload }) => {
    return {
      post: (await app.$content("/blog").get(route.path)) || payload
    };
  }
};
</script>
