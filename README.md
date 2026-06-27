# Micro Frontend Remote Module

This project is a **remote micro frontend module** built with **React, TypeScript, Vite, and Module Federation**.

It exposes reusable UI components that can be dynamically consumed by a host application. The goal is to keep features modular, independently deployable, and easy to integrate into larger frontend ecosystems.

---

## Overview

In large-scale frontend systems, building everything inside a single application can quickly create tight coupling and make the codebase harder to maintain.

This project demonstrates a **micro frontend architecture** where a remote application exposes reusable components to a host application using **Module Federation**.

In this implementation, the remote app exposes:

- `RecentTabs`
- `SystemList`

These components can be loaded by another application at runtime.

---

## Why Micro Frontend?

A micro frontend architecture helps solve common problems in growing frontend applications:

- large and hard-to-maintain codebases
- tightly coupled features
- slower team collaboration
- difficult independent deployments
- poor reusability across multiple applications

By splitting features into smaller independently managed modules, each part of the system becomes easier to scale and evolve.

---

## Tech Stack

- **React**
- **TypeScript**
- **Vite**
- **@originjs/vite-plugin-federation**
- **Ant Design**
- **CSS Modules**
- **SCSS**
- **Jotai**

---

## Module Federation Configuration

The project uses Vite with Module Federation to expose components from the remote app.
```ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
react(),
federation({
name: "remote_app",
filename: "remoteEntry.js",
exposes: {
"./RecentTabs": "./src/components/RecentTabs/RecentTabs.tsx",
"./SystemList": "./src/components/SystemList/SystemList.tsx",
},
shared: ["react", "react-dom", "jotai"],
}),
  ],
  build: {
modulePreload: false,
target: "esnext",
minify: false,
cssCodeSplit: false,
  },
  server: {
cors: true,
  },
});
