declare module '*.vue' {
    import { defineComponent } from 'vue'
    const component: ReturnType<typeof defineComponent>
    export default component
}

declare module 'types' {
    interface Module {
        name: string,
        desc: string,
        isChecked: boolean
    }

    interface GenForm {
        name: string,
        modules: Array<Module>
    }
}