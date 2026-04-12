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

    //popups
    app.component(
        'student-notes-component',
        defineAsyncComponent(() => import('./components/popups/StudentNotes.vue'))
    )
    app.component(
        'professor-classes-component',
        defineAsyncComponent(() => import('./components/popups/ProfessorClasses.vue'))
    )
    app.component(
        'professor-add-notes-component',
        defineAsyncComponent(() => import('./components/popups/ProfessorAddNotes.vue'))
    )
    app.component(
        'professor-edit-notes-component',
        defineAsyncComponent(() => import('./components/popups/ProfessorEditNotes.vue'))
    )
    app.component(
        'admin-add-student-component',
        defineAsyncComponent(() => import('./components/popups/AdminAddStudent.vue'))
    )
    app.component(
        'admin-remove-student-component',
        defineAsyncComponent(() => import('./components/popups/AdminRemoveStudent.vue'))
    )
    app.component(
        'admin-add-professor-component',
        defineAsyncComponent(() => import('./components/popups/AdminAddProfessor.vue'))
    )
    app.component(
        'admin-add-class-component',
        defineAsyncComponent(() => import('./components/popups/AdminAddClass.vue'))
    )
}