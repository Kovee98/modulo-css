export interface Module {
    name: string,
    desc: string,
    isChecked: boolean
}

export interface Form {
    name: string,
    modules: Array<Module>
}

export interface File {
    name: string,
    contents: string,
    size: string
}