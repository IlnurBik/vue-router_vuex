import router from "../../router";
const state = {
    people: null,
    person: null,
}

const getters = {
    people: state => {
        return state.people
    },
    person: state => {
        return state.person
    },

}

const actions = {
    getPeople({commit}){
        axios.get('/api/people')
            .then( res =>{
                commit('setPeople', res.data.data);
            })
    },
    deletePerson({dispatch}, id){
        axios.delete(`/api/people/${id}`)
            .then(res => {
                dispatch('getPeople')
            })
    },
    getPerson({commit}, id){
        axios.get(`/api/people/${id}`)
            .then( res => {
                commit("setPerson", res.data.data);
            })
    },
    updatePerson({}, data){
        axios.patch(`/api/people/${data.id}`, {name: data.name, age: data.age, job:
            data.job })
            .then( res => {
                router.push({name: 'person.index'})
            })
    },
    createPerson({}, data){
        axios.post('/api/people', {name: data.name, age: data.age, job:
            data.job })
            .then( res => {
                router.push({name: 'person.index'})
            })
    }

}

const mutations = {
    setPeople(state, people){
        state.people = people
    },
    setPerson(state, person){
        state.person = person
    },

}

export default {
    state, getters, actions, mutations
}
