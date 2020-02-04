module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/styles/_space.scss";@import "@/styles/_variables.scss";@import "@/styles/_mixins.scss";`,
      },
    },
  },
};
