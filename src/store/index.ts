import { createStore, MutationTree } from 'vuex';

// 定義 State 的接口
interface State {
    isButtonClicked: boolean;
}

// 定義 state 類型
const state: State = {
    isButtonClicked: false, // 初始狀態為 false
};

// 定義 Mutation 的類型
interface Mutations extends MutationTree<State> {
    SET_BUTTON_CLICKED(state: State, clicked: boolean): void;
}

// 定義 Mutations
const mutations: Mutations = {
    SET_BUTTON_CLICKED(state, clicked) {
        state.isButtonClicked = clicked;
    },
};

// 創建 Vuex store
const store = createStore<State>({
    state,
    mutations,
});

export default store;
