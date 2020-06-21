module.exports = {
  name: 'Getting Started',
  content: './styleguide/docs/Installation.md',
  sectionDepth: 6,
  sections: [
    {
      name: 'Installation',
      content: './styleguide/docs/Installation.md',
    },
  ],
  components: () => {
    return ['src/components/tests/Tests.js'];
  },
};
