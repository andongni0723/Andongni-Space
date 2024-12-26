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
import NewConvertMarkdown from "../components/Markdown/NewConvertMarkdown.vue";
import {ref} from "vue";  // 關於頁組件


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

//test
export const isRouteLoading = ref(false)
export const isResourceFullyLoaded = ref(false)

// 全局前置守卫：路由开始跳转时
router.beforeEach((to, from, next) => {
    // 设置路由加载状态为true
    isRouteLoading.value = true
    // 重置资源加载状态
    isResourceFullyLoaded.value = false
    next()
})

// 全局后置钩子：路由完成跳转后
router.afterEach(() => {
    // 开始检测资源加载
    checkResourceLoaded()
})

// 资源加载检测函数
const checkResourceLoaded = () => {
    // 获取当前页面所有图片
    const images = document.querySelectorAll('img')

    // 如果没有图片，直接标记为加载完成
    if (images.length === 0) {
        completeResourceLoading()
        return
    }

    // 记录已加载的图片数量
    let loadedImagesCount = 0

    // 遍历所有图片
    images.forEach(img => {
        // 如果图片已经加载
        if (img.complete) {
            loadedImagesCount++
        } else {
            // 监听图片加载事件
            img.addEventListener('load', () => {
                loadedImagesCount++

                // 检查是否所有图片都已加载
                if (loadedImagesCount === images.length) {
                    completeResourceLoading()
                }
            })

            // 监听图片加载错误事件
            img.addEventListener('error', () => {
                loadedImagesCount++

                // 检查是否所有图片都已加载
                if (loadedImagesCount === images.length) {
                    completeResourceLoading()
                }
            })
        }
    })

    // 设置超时处理
    setTimeout(() => {
        if (!isResourceFullyLoaded.value) {
            console.log('资源加载超时')
            completeResourceLoading()
        }
    }, 1000);
}

// 完成资源加载的函数
const completeResourceLoading = () => {
    isRouteLoading.value = false
    isResourceFullyLoaded.value = true
}

export default router;
