module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'ReactReduxToasts',
      externals: {
        react: 'React'
      }
    }
  }
}
