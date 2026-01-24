# vue-kit-ui

A reusable **Vue 3 + Tailwind CSS UI component library** designed to speed up development of modern dashboards and MVPs.

This project is built from **real-world production components** that have been refactored into a **clean, reusable, and consistent UI kit**.

---

## ✨ Features

* ⚡ Vue 3 with `<script setup>`
* 🎨 Tailwind CSS–based styling
* 🧩 Reusable, composable UI components
* 🧠 Clear API via props & slots
* 🧪 Playground for live development & testing
* 📦 Designed as a library (not an app)

---

## 🎯 Project Goals

The main goal of **vue-kit-ui** is to:

* Reduce repetitive UI work
* Provide consistent design patterns
* Separate UI logic from business logic
* Serve as a solid base for dashboards and internal tools

This is **not** a full design system and **not** tied to any specific business domain.

---

## 📦 Installation

```bash
npm install vue-kit-ui
```

> **Note:** Tailwind CSS must already be configured in your project.

---

## ⚙️ Setup

Since this library is built with Tailwind CSS, you need to ensure your project's Tailwind configuration scans the library's files to generate the correct styles.

Update your `tailwind.config.js` (or `tailwind.config.ts`) to include the `vue-kit-ui` path in the `content` array:

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}", 
    // Add this line to scan vue-kit-ui components:
    "./node_modules/vue-kit-ui/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

---

## 🚀 Usage

Import components directly from the library in your Vue files:

```vue
<script setup>
import { ref } from 'vue'
import { Button, InputText, TextArea } from 'vue-kit-ui'

const username = ref('')
const description = ref('')
const isLoading = ref(false)
</script>

<template>
  <div class="p-4 space-y-4">
    <!-- Button Usage -->
    <Button variant="primary" :loading="isLoading">
      Submit
    </Button>

    <!-- InputText Usage -->
    <InputText
      label="Username"
      v-model:value="username"
      placeholder="Enter your username"
    />

    <!-- TextArea Usage -->
    <TextArea
      label="Bio"
      v-model="description"
      rows="4"
      placeholder="Tell us about yourself"
    />
  </div>
</template>
```

---

## 🧩 Components

### Button

A versatile button component with support for variants and loading states.

| Prop     | Type    | Default | Description          |
| -------- | ------- | ------- | -------------------- |
| variant  | String  | primary | Button style variant (`primary`, `secondary`, `danger`, etc.) |
| size     | String  | md      | Button size (`sm`, `md`, `lg`) |
| loading  | Boolean | false   | Shows a loading spinner and disables interaction |
| disabled | Boolean | false   | Disables the button |

### InputText

A standard text input field with label and error support.

| Prop         | Type             | Default | Description          |
| ------------ | ---------------- | ------- | -------------------- |
| label        | String           | -       | Label text displayed above the input |
| value        | String, Number   | -       | **(v-model:value)** The input value |
| placeholder  | String           | "Masukkan teks..." | Placeholder text |
| type         | String           | "text"  | HTML input type (text, password, etc.) |
| error        | String, Boolean  | false   | Error message or error state |
| required     | Boolean          | false   | Marks text with an asterisk |
| disabled     | Boolean          | false   | Disables the input |

### TextArea

A multi-line text area component.

| Prop         | Type             | Default | Description          |
| ------------ | ---------------- | ------- | -------------------- |
| label        | String           | -       | Label text displayed above the textarea |
| modelValue   | String           | ""      | **(v-model)** The textarea value |
| rows         | Number           | 4       | Number of visible text lines |
| placeholder  | String           | -       | Placeholder text |
| error        | String, Boolean  | -       | Error message |
| required     | Boolean          | false   | Marks label with an asterisk |

---

## 🧪 Development & Playground

This repository includes a **playground Vue app** used for:

* Developing components
* Testing props and states
* Visual verification

Run the playground:

```bash
cd playground
npm install
npm run dev
```

The playground is **not part of the library output**.

---

## 📁 Project Structure

```text
vue-kit-ui/
├─ packages/
│  └─ ui/           # Component library
├─ playground/      # Development playground
├─ docs/            # Documentation (future)
└─ README.md        # Main documentation
```

---

## 🧠 Design Principles

* Components must be **stateless by default**
* No business logic inside components
* No router, store, or API calls
* Configuration via props and slots
* Consistent naming and API design

---

## 🤝 Contributing

Contributions are welcome.

Basic guidelines:

* Keep components generic
* Follow existing folder structure
* Update documentation when adding features

---

## 📄 License

MIT License

---

## 👤 Author

**Gema Maulana**
Web Developer

---

> This project is part of a professional portfolio and is continuously evolving.
