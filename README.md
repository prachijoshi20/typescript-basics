Welcome to my TypeScript Basics project!
This repository contains my foundational practice exercises as I learn and strengthen TypeScript skills. The goal of this project is to understand how TypeScript works, how to compile it, and how to use key TS features such as types, interfaces, classes, functions, modules, and type assertions


This project includes examples and code samples for:

Basic TypeScript syntax

Type annotations (string, number, boolean, any, etc.)

Functions (typed parameters, return types)

Interfaces & type aliases

Classes & object-oriented TypeScript

Arrays, tuples, enums

Union & intersection types

Type assertions

Compiling TS → JS with tsc

Each .ts file focuses on a different concept.

📂 Folder Structure
typescript-basics/
 ├── src/
 │    ├── basics.ts
 │    ├── functions.ts
 │    ├── classes.ts
 │    ├── interfaces.ts
 │    └── types.ts
 ├── dist/               (compiled JavaScript output)
 ├── tsconfig.json
 └── README.md

 How to Run This Project
1️⃣ Install TypeScript (if not already installed)
npm install -g typescript

2️⃣ Compile TypeScript files
tsc


This will create a dist/ folder with compiled .js files.

3️⃣ Run JavaScript output using Node
node dist/<filename>.js


If your files are currently in the root folder, that’s fine — as you expand, you can move them into a src/ directory.
