# vue-template-kit

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

The main goal of **vue-template-kit** is to:

* Reduce repetitive UI work
* Provide consistent design patterns
* Separate UI logic from business logic
* Serve as a solid base for dashboards and internal tools

This is **not** a full design system and **not** tied to any specific business domain.

---

## 📦 Installation

```bash
npm install vue-template-kit
```

> Tailwind CSS must already be configured in your project.

---

## 🚀 Usage

Import components directly from the library:

```js
import { Button } from 'vue-template-kit'
```

Example usage:

```vue
<Button variant="primary" size="md">
  Click me
</Button>
```

---

## 🧩 Available Components (v1)

* Button
* Modal *(coming next)*
* Card *(planned)*
* Input *(planned)*

> The library is intentionally kept small and focused.

---

## 🔘 Button Component

### Props

| Prop     | Type    | Default | Description          |
| -------- | ------- | ------- | -------------------- |
| variant  | String  | primary | Button style variant |
| size     | String  | md      | Button size          |
| loading  | Boolean | false   | Show loading state   |
| disabled | Boolean | false   | Disable the button   |

### Example

```vue
<Button variant="danger" size="lg" :loading="isSaving">
  Delete
</Button>
```

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
vue-template-kit/
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
