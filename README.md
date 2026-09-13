# DevStack

## Description

DevStack is a responsive technology stack builder built with React and TypeScript. It allows users to explore different technologies and create their own stack by selecting technologies from different categories.

Users can add technologies to their stack, remove individual items, or clear the entire stack. The application also provides toast notifications for different user actions.


## Technologies Used

- React
- TypeScript
- Vite
- Tailwind CSS
- DaisyUI
- React Icons
- React Toastify
- JSON
- Vite

## Features

1. Displays technology information in organized, reusable cards.
2. Loads technology data dynamically from a JSON file and add technologies to the "Your Stack" section. The same technology cannot be added more than once.
3. Remove a single technology or clear the entire stack using the "Remove All" button. In addition, Includes a responsive layout with navigation, banner, loading state, and footer sections.

## Getting Started

Install the dependencies and start the development server:

```bash
npm install
npm run dev
```

# ⚛️ React Questions & Answers

## 1. What is JSX, and why is it used in React?
JSX is a syntax that allows to write html inside javaScript or TypeScript and make components easier to write, read, reusable and understand.

## 2. What is the difference between props and state?
**Props** are used for passing data from parent to child component
**State** are used for managing data inside a component. State can change and when it changes, React updates the UI.

## 3. What does the `useState` hook do, and where did you use it in this project?
The `useState` hook is used to store and update state in a React component. I used `useState` to manage the technologies data into the stack component.
```tsx
const [stacks, setStacks] = useState<TechnologyType[]>([])
```

## 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?
The `useEffect` hook is used to perform side effects in a React component, such as fetching data.

But, in this project, I did not need to use `useEffect` to load the JSON data. Instead, the data is fetched in `App.tsx` and passed as a promise to the `Technologies` component. The component uses React's `use()` hook to read the promise, while `Suspense` displays a loading state until the data is ready. This keeps the data-loading logic simple and gives the user feedback while the technologies are loading.

## 5. Why does every item in a `.map()` list need a unique `key` prop?
Unique keys in a `.map()` list allow React to identify which items in the list have changed, been added, or removed. This identification facilitates efficient updates and re-rendering of the list, minimizing unnecessary changes.

## 6. What is conditional rendering? Show one place you used it.
Conditional rendering means displaying different UI based on a condition.

I used conditional rendering in different places example to show an empty message when no technology is selected.

Example:

```tsx
{stacks.length === 0
  ? "No technologies selected yet."
  : `${stacks.length} Technologies Selected`}
```

## 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
Data is passed from a parent component to a child component through props. A child cannot directly change the parent's state, so the parent can pass a state-updating function as a prop. The child can then call that function to send information back to the parent.

In this project, the `Technologies` component keeps the `stacks` state and passes `stacks` and `setStacks` to each `Technology` component. When the user clicks **Add to Stack**, the child component calls `setStacks` to add the selected technology to the parent's stack.
