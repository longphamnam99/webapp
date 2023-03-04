import UserService from "@/api/user";
import { set_token } from "@/utils/auth";

const state = {
  token: "",
  name: "",
  user_id: "",
};

const getters = {
  user_id: (state) => state.user_id,
  user_name: (state) => state.name,
  token: (state) => state.token,
};

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token;
  },
  SET_NAME: (state, name) => {
    state.name = name;
  },
  SET_USER_ID: (state, user_id) => {
    state.user_id = user_id;
  },
};

const actions = {
  set_token({ commit }, token) {
    if (token) {
      commit("SET_TOKEN", token);
      set_token(token);
    }
  },
  login({ commit }, userInfo) {
    const { email, password } = userInfo;
    return new Promise((resolve, reject) => {
      UserService.login({
        email: email.trim(),
        password: password,
      })
        .then((response) => {
          if (response.status === 200) {
            const { data } = response;
            commit("SET_TOKEN", data.token);
            set_token(data.token);
            resolve();
          } else {
            reject(response.message);
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
  info({ commit, state, dispatch }) {
    return new Promise((resolve, reject) => {
      UserService.info()
        .then((response) => {
          const { name, id } = response.data;

          commit("SET_NAME", name);
          commit("SET_USER_ID", id);
          resolve(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    });
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
