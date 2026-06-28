# Project Handoff: Lumina Borealis UI

## Context & Overview
**Project Name:** Lumina Borealis UI
**Version:** 0.2.6
**Repository Type:** npm Monorepo (using npm workspaces)
**Description:** A modern, premium, and multi-framework UI component library built for React and Vue. It is designed with glassmorphism, micro-animations, and modern typography in mind, aiming to provide beautifully crafted designs out-of-the-box.

## Project Structure
This is a monorepo containing three main packages under the `packages/` directory:
1. **`@lumina-borealis/core`**: The framework-agnostic core containing shared CSS variables, design tokens, and utility classes.
2. **`@lumina-borealis/react`**: Native React UI components.
3. **`@lumina-borealis/vue`**: Native Vue UI components.

## Current State & Recent Work
- Based on the previous conversation history ("Designing Data Display Components"), the recent focus has been on building and styling data display components (like Tables, Lists, or Data Cards) utilizing the core tokens.
- The project enforces a strict separation of concerns where styles are centralized in the `core` package and consumed by the respective framework packages (React/Vue).

## Goals for the Model
- Always maintain consistency across the React and Vue implementations.
- Ensure that any new UI component adheres to the premium "aesthetic by default" design philosophy of Lumina Borealis (vibrant colors, smooth gradients, glassmorphism, etc.).
- When adding new styles, they should be placed in `@lumina-borealis/core` so both React and Vue components can consume them equally.

---
*Note to AI Agent: Please read this document to understand the architectural constraints and design aesthetics required for this project before proposing new code changes.*
