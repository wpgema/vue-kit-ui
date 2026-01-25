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

## 📝 Requirements

* Vue 3
* Tailwind CSS

> ⚠️ **Tailwind CSS is not bundled with this library.** You are responsible for configuring Tailwind in your application.

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
import { 
  Button, 
  InputText, 
  TextArea, 
  InputSelect, 
  Toggle 
} from 'vue-kit-ui'

const username = ref('')
const description = ref('')
const isLoading = ref(false)
const role = ref('')
const notifications = ref(false)
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
      v-model="username"
      placeholder="Enter your username"
    />

    <!-- InputSelect Usage -->
    <InputSelect 
        label="Role"
        v-model="role"
        :options="[{label: 'Admin', value: 'admin'}, {label: 'User', value: 'user'}]"
    />
    
    <!-- Toggle Usage -->
    <Toggle 
        label="Notifications"
        v-model="notifications"
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
| variant  | String  | primary | Button style variant (`primary`, `secondary`, `danger`, `outline`, `yellow`) |
| size     | String  | md      | Button size (`sm`, `md`, `lg`) |
| loading  | Boolean | false   | Shows a loading spinner and disables interaction |
| disabled | Boolean | false   | Disables the button |
| type     | String  | button  | Button type (`button`, `submit`, `reset`) |

### InputText

A standard text input field.

| Prop         | Type             | Default | Description          |
| ------------ | ---------------- | ------- | -------------------- |
| label        | String           | -       | Label text displayed above the input |
| name         | String           | -       | Input name attribute |
| modelValue   | String, Number   | -       | **(v-model)** The input value |
| placeholder  | String           | "Type something..." | Placeholder text |
| type         | String           | "text"  | HTML input type (text, password, etc.) |
| error        | String, Boolean  | false   | Error message or error state |
| required     | Boolean          | false   | Marks text with an asterisk |
| disabled     | Boolean          | false   | Disables the input |
| readonly     | Boolean          | false   | Readonly state |
| icon         | String, Object   | -       | Icon component or string |
| iconPosition | String           | "left"  | Icon position (`left`, `right`) |

### TextArea

A multi-line text area component.

| Prop         | Type             | Default | Description          |
| ------------ | ---------------- | ------- | -------------------- |
| label        | String           | -       | Label text displayed above the textarea |
| name         | String           | -       | Input name attribute |
| modelValue   | String           | ""      | **(v-model)** The textarea value |
| rows         | Number           | 4       | Number of visible text lines |
| placeholder  | String           | -       | Placeholder text |
| error        | String, Boolean  | -       | Error message |
| required     | Boolean          | false   | Marks label with an asterisk |
| disabled     | Boolean          | false   | Disables the textarea |
| readonly     | Boolean          | false   | Readonly state |

### InputSelect

A dropdown select component.

| Prop        | Type             | Default | Description          |
| ----------- | ---------------- | ------- | -------------------- |
| label       | String           | -       | Label text displayed above the select |
| name        | String           | -       | Input name attribute |
| modelValue  | String, Number   | -       | **(v-model)** The selected value |
| options     | Array            | []      | Array of objects `{ label, value }` |
| placeholder | String           | "Select option..." | Placeholder text |
| filter      | Boolean          | false   | Enable filtering |
| error       | String           | -       | Error message |
| required    | Boolean          | false   | Marks label with an asterisk |
| valueLabel  | String           | -       | Label to display for the selected value (override) |

### FileUpload

A file upload component with drag and drop support.

| Prop         | Type             | Default | Description          |
| ------------ | ---------------- | ------- | -------------------- |
| label        | String           | -       | Label text |
| name         | String           | -       | Input name attribute |
| modelValue   | Array            | []      | **(v-model)** Array of file objects |
| accept       | String           | "*"     | File types to accept |
| multiple     | Boolean          | false   | Allow multiple file selection |
| multipleText | String           | "(multiple allowed)" | Text to show when multiple is allowed |
| required     | Boolean          | false   | Marks label with an asterisk |
| placeholder  | String           | "Click or drag files here" | Placeholder text |

### RadioInput

A radio button group component.

| Prop       | Type     | Default | Description          |
| ---------- | -------- | ------- | -------------------- |
| label      | String   | -       | Group label |
| name       | String   | -       | **Required**. Input name attribute |
| modelValue | String, Number, Boolean   | ""      | **(v-model)** Selected value |
| options    | Array    | []      | **Required**. Array of objects `{ label, value }` |
| horizontal | Boolean  | false   | Display options horizontally |
| error      | String   | -       | Error message |
| required   | Boolean  | false   | Marks label with an asterisk |

### Checkbox

A checkbox component.

| Prop       | Type             | Default | Description          |
| ---------- | ---------------- | ------- | -------------------- |
| label      | String           | -       | Checkbox label |
| name       | String           | -       | Input name attribute |
| modelValue | Boolean          | false   | **(v-model)** Checked state |
| error      | String, Boolean  | false   | Error state |
| disabled   | Boolean          | false   | Disables the checkbox |
| readonly   | Boolean          | false   | Readonly state |
| required   | Boolean          | false   | Marks label with an asterisk |

### Toggle

A toggle switch component.

| Prop             | Type             | Default | Description |
| ---------------- | ---------------- | ------- | ----------- |
| label            | String           | -       | Label text |
| name             | String           | -       | Input name attribute |
| modelValue       | Boolean          | false   | **(v-model)** Toggle state |
| descriptionTrue  | String           | -       | Text when true (e.g. "On") |
| descriptionFalse | String           | -       | Text when false (e.g. "Off") |
| horizontal       | Boolean          | false   | Horizontal layout |
| error            | String, Boolean  | -       | Error message |
| required         | Boolean          | false   | Marks label with an asterisk |

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

## 📄 License

MIT License

---

## 👤 Author

**M. Gema Maulana**
Web Developer
