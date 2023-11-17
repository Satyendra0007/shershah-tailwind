const { defineConfig } = require('vite')

module.exports = defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
        about: './about.html',
        academic: './academic.html',
        administration: './administration.html',
        notes: 'notes.html',
        staff: 'staff.html',
        script: 'script.js',
        index: 'index.js'
        // ...
        // List all files you want in your build
      }
    }
  }
})