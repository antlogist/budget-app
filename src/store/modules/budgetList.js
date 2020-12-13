import Vue from "vue";

const listStore = {
    namespaced: true,
    state: {
        list: {
            1: {
                type: "INCOME",
                value: 100,
                comment: "Some income comment",
                id: 1
            },
            2: {
                type: "OUTCOME",
                value: -50,
                comment: "Some outcome comment",
                id: 2
            }
        }
    },
    getters: {
        getList: ({ list }) => list,
        totalBalance: ({ list }) => {
            return Object.values(list).reduce(
                (acc, item) => acc + item.value,
                0
            );
        }
        
//{
//            return Object.values(this.getList).reduce(
//                (acc, item) => acc + item.value,
//                0
//            );
//        }
    },
    mutations: {
        ADD_ITEM(state, data) {
            Vue.set(state.list, data.id, data);
        },
        DELETE_ITEM(state, id) {
            Vue.delete(state.list, id);
        },
    },
    actions: {
        addItem({ commit }, data) {
            const newObj = {
                ...data,
                id: String(Math.random())
            };
             commit("ADD_ITEM", newObj);
        },
        deleteItem({ commit }, id) {
            commit("DELETE_ITEM", id);
        }
    }
}

export default listStore;
