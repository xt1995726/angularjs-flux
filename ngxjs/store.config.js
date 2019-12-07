var _scope = this;
var Config = {
    state: {
        str: 'xt',
        arr: [1, 2, 3, 'haha'],
        obj: {
            a: '1',
            b: '2'
        }
    },
    getters: {
        getStr(state) {
            return state.str;
        },
        getArr(state) {
            return state.arr;
        },
        getObj(state) {
            return state.obj;
        }
    },
    mutations: {
        setStr(state, data) {
            state.str = data;
        },
        setArr(state, data) {
            state.arr = data;
        },
        setObj(state, data) {
            state.obj = data;
        }
    }
}