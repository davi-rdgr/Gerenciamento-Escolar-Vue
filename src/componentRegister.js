import { defineAsyncComponent } from "vue";

export const registerComponent = (app) => {

    // layouts
    app.component(
        "login-layout",
        defineAsyncComponent(() => import('./layouts/LoginLayout.vue'))
    )
    app.component(
        'standart-layout',
        defineAsyncComponent(() => import('./layouts/StandartLayout.vue'))
    )

    // dialogs
    app.component(
        'dialog-component',
        defineAsyncComponent(() => import('./components/dialogs/DialogComponent.vue'))
    )

    //components
    app.component(
        'student-notes-component',
        defineAsyncComponent(() => import('./components/StudentNotes.vue'))
    )
    app.component(
        'home-student-component',
        defineAsyncComponent(() => import('./components/HomeStudentComponent.vue'))
    )
    app.component(
        'home-professor-component',
        defineAsyncComponent(() => import('./components/HomeProfessorComponent.vue'))
    )
    app.component(
        'home-admin-component',
        defineAsyncComponent(() => import('./components/HomeAdminComponent.vue'))
    )

    app.component(
        'options-card-component',
        defineAsyncComponent(() => import('./components/OptionsCardComponent.vue'))
    )

    app.component(
        'professor-classes-component',
        defineAsyncComponent(() => import('./components/ProfessorClasses.vue'))
    )


}