# Contributing
> Things to consider for contributing

## Modules
Before submitting a module PR, please be thoughtful and make sure there isn't already a module that exists that does what your module does. If a module already exists and can be improved upon, please create an [issue](https://github.com/Kovee98/modulo-css/issues) about it instead and discussion can happen there.

When submitting a new module PR, the following file structure needs to be used:
```
src/modules/
    <module_name>/
        index.scss
```
And don't forget to update src/modules.js!

## Commits
This project follows the conventional commits format for commit messages. This allows for automatically generated release notes. See more about the conventional commit standard [here](https://www.conventionalcommits.org).

If you are not used to this style of commit messages or need a refresher of the different **types** (feat, fix, refactor, etc.) I strongly recommend using [commitizen](http://commitizen.github.io/cz-cli/). There's even a VSCode [plugin](https://marketplace.visualstudio.com/items?itemName=KnisterPeter.vscode-commitizen)!

## Vue Code Style
It is strongly recommended to read and understand Vue's [style guide](https://v3.vuejs.org/style-guide/). This will ensure a more readable codebase and make it easier for all who wish to contribute to this project.

In this project, this isn't enforced and will differ slightly due to the fact that this project uses Vite, Typescript, and the Composition API. As a general rule of thumb, the closer to the style guide the better.

## Getting Started
1. Clone the repository
    ```
    git clone https://github.com/Kovee98/modulo-css.git
    ```
2. Create a new branch off develop
    ```
    git branch -b feature/<module_name>
    ```
3. Create a new folder and the main index.scss for your module
    ```
    mkdir src/modules/<module_name>
    touch src/modules/<module_name>/index.scss
    ```
4. Add your module to the list of modules in src/modules.js
    ```
    export default [
        ...
        {
            name: '<module_name>',
            desc: 'Brief, single-sentence description of the module.',
            isChecked: false
        }
    ];

    ```
5. Run the dev:modules npm script to watch for scss src file changes
    ```
    npm run dev:modules
    ```
6. A test/index.html has been provided for you to test your module during development. It is recommended to run this with [live-server](https://www.npmjs.com/package/live-server) so changes are hot-reloaded for you.
7. When you're done with your module, create a PR for your branch to merge into develop!

**Note:** Output \*.css files are ignored and are built into the dist directory at compile time. So you only need to worry about developing in the src/modules directory.

Happy modding!
