import { defineComponent } from 'vue';

export const User = defineComponent({
  props: {
    username: String,
  },
  render() {
    return <div>{this.username}</div>;
  },
});
