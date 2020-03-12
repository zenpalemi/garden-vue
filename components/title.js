const template = `
  <p :class="classes">
    <slot></slot>
  </p>
`;

const Title = {
  template,
  props: {
    size: {
      type: String,
      required: false,
      default: '',
      validator(value) {
        return ['sm', 'md', 'lg', 'xl', 'xxl', 'xxxl'].includes(value);
      }
    }
  },
  computed: {
    classes() {
      return {
        [`u-fs-${size}`]: this.size
      };
    }
  }
};

export default Title;
