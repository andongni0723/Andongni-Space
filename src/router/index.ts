import { createRouter, createWebHistory ,  RouteRecordRaw, NavigationGuardNext, RouteLocationNormalized, RouteLocationNormalizedLoaded } from 'vue-router';
import store from '../store';  // 使用 Vuex


// 導入頁面組件
// @ts-ignore
import Home from "../views/Home.vue";
// @ts-ignore
import About from "../views/About.vue";
// @ts-ignore
import NotFound from "../views/NotFound.vue";
// @ts-ignore
import Project from "../views/Project.vue";
// @ts-ignore
import AllProject from "../views/AllProject.vue";
// @ts-ignore
import NewConvertMarkdown from "../components/Markdown/NewConvertMarkdown.vue";  // 關於頁組件


const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/about',
        name: 'About',
        component: About,
    },
    {
        path: '/all-project',
        name: 'AllProject',
        component: AllProject,
    },
    {
        path: '/project/:dataID?/:from?',
        name: 'Project',
        component: Project,
        props: true,
        // beforeEnter: (to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
        //     if (store.state.isButtonClicked) {
        //         next(); // 允許進入
        //     } else {
        //         next('/404'); // 禁止訪問，重定向到首頁
        //     }
        // },
    },
    {
        path: '/test',
        name: 'Test',
        component: NewConvertMarkdown
    },
    {
        path: '/:pathMatch(.*)*',
        component: NotFound,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
            return { el: to.hash };
        }
        return { top: 0 }; // 滾動到頁面頂部
    }
});

export default router;
