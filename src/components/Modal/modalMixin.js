export function modalMixin(type) {
  return {
    methods: {
      closeModal() {
        this.$emit('close-modal', { type });
      },
    },
  };
}
