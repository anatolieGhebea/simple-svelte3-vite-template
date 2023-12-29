# simple-svelte3-vite-template
A template for siimple svelte projects with compilation: multi components single bundle, multi components multi bundle.

## After cloning

After cloning this repo, decide if you want to use the multi components single bundle or multi components multi bundle configuration. 
Then delete the folder that you don't need.

For every other option or configuration, refer to the svelte documentation and vite documentation!

## Add tailwind CSS 

To add tailwind Css you can use the instructions from the [tailwindcss install sveltekit](https://tailwindcss.com/docs/guides/sveltekit)


## Multiple components single bundle

This is the default configuration, all svelte componets are compiled into a single bundle.js file.

## Multiple components multi bundle

If for some reason you need to export each component to a separate bundle, the best way is to use the following folder structure:

```
- src_multi
    - module1
        - index.js
        - Component1.svelte
    - module2
        - index.js
        - Component2.svelte
    - components
        - widget1.svelte
        - widget2.svelte
    -services
        - service1.js
        - service2.js
```

Then configure the rollup options in `vite.config.js` to export each `module` as a separate bundle. 
Example 
```javascript
import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  build: {
    rollupOptions: {
      input: {
        module1: 'src/module1/main.js', // entry point for module 1
        module2: 'src/module2/main.js'  // entry point for module 2
        // Add more modules here as needed
      },
      output: {
        dir: './dist',
        entryFileNames: 'assets/[name].js',
        chunkFileNames: 'assets/[name].js',
        assetFileNames: 'assets/[name].[ext]'
      }
    }
  },
  server: {
    host: '0.0.0.0'
  }
});    
```

The index file might look like this:
```html
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">    
    <!-- <link rel="icon" type="image/x-icon" href="/favicon.ico"> -->
    <title>SimpleSvelte3ViteTemplate</title>
</head>

<body>
    <div id="app"></div>
    <!-- <script type="module" src="assets/index.js"></script> -->
    <script type="module" src="assets/module1.js"></script>
    <script type="module" src="assets/module2.js"></script>
</body>
</html>
```
