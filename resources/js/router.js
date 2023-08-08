import { createRouter, createWebHistory} from "vue-router";

const routes = [
    {
        path: '/',
        component: () => import('./components/Person/Index.vue'),
        name: 'person.index'
    },
    {
        path: '/people/create',
        component: () => import('./components/Person/Create.vue'),
        name: 'person.create'
    },
    {
        path: '/people/:id/edit',
        component: () => import('./components/Person/Edit.vue'),
        name: 'person.edit'
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;
