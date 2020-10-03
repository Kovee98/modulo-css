# Contributing
> Things to consider for contributing

## Modules
Before submitting a module PR, please be thoughtful and make sure there isn't already a module that exists that does what your module does. If a module already exists and can be improved upon, please create an [issue](https://github.com/Kovee98/modulo-css/issues) about it instead and discussion can happen there.

When submitting a new module PR, the following file structure needs to be used:
```
modules/
    %module_name%/
        <src_style_files>
```

## Commits
This project follows the conventional commits format for commit messages. This allows for automatically generated release notes. See more about the conventional commit standard [here](https://www.conventionalcommits.org).

If you are not used to this style of commit messages or need a refresher of the different **types** (feat, fix, refactor, etc.) I strongly recommend using [commitizen](http://commitizen.github.io/cz-cli/). There's even a VSCode [plugin](https://marketplace.visualstudio.com/items?itemName=KnisterPeter.vscode-commitizen)!

## Vue Code Style
It is strongly recommended to read and understand Vue's [style guide](https://v3.vuejs.org/style-guide/). This will ensure a more readable codebase and make it easier for all who wish to contribute to this project.

In this project, this isn't enforced and will differ slightly due to the fact that this project uses Vite, Typescript, and the Composition API. As a general rule of thumb, the closer to the style guide the better.

Happy modding!
