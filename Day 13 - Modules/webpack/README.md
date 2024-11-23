

## **Webpack Building Process**

### 1. **Initialize the Project**

Start by setting up your project environment.

```bash
# Step 1: Create a new project folder
mkdir webpack-demo
cd webpack-demo

# Step 2: Initialize a new Node.js project (creates package.json)
npm init -y

# Step 3: Install lodash package for testing
npm install lodash

# Step 4: Install Webpack and Webpack CLI as development dependencies
npm install webpack webpack-cli --save-dev
```

---

### 2. **Set Up the Project Structure**

Organize your project files:

```bash
# Step 1: Create the necessary folders and files
mkdir src public
touch src/index.js public/index.html
```

---

### 3. **Add JavaScript Code**

Write a simple JavaScript file to demonstrate Webpack bundling.

- **`src/index.js`:**
  ```javascript
  import { camelCase } from 'lodash';

  console.log(camelCase("hello world"));
  ```

---

### 4. **Add an HTML File**

Create an HTML file to load your bundled JavaScript.

- **`public/index.html`:**
  ```html
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Webpack Demo</title>
  </head>
  <body>
      <h1>Check the Console</h1>
      <script src="./dist/main.js"></script> <!-- Include the bundled file -->
  </body>
  </html>
  ```

---

### 5. **Add Build Script to `package.json`**

Update the `scripts` section of your `package.json` file to include a build command:

```json
"scripts": {
  "build": "webpack"
}
```

What this does:
- Webpack takes `src/index.js` as the entry point.
- It bundles all necessary files into a single output file, `dist/main.js`.

---

### 6. **Build and Test**

1. Run the build command to create the bundled JavaScript:
   ```bash
   npm run build
   ```

2. Open the **`public/index.html`** file in your browser.

3. Check the developer console (`Ctrl+Shift+I` or `F12`) to see the message:
   ```
   helloWorld
   ```

---

Now you're all set! 🎉 You can modify the code and re-run the build process with:

```bash
npm run build
``` 
