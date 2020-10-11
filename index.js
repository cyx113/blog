import Vue from 'vue';
import VueX from './vueX'
Vue.use(VueX);
export default new VueX.store({
	state :{
		counter :0
	},
	getters:{
		doubleCounter(state){
			return state.counter*2
		}
	},
	mutations:{
		add (state){
			state.counter++
		}
	},
	actions:{
		add({commit}){
			setTimeout(()=>{
				commit('add')
			},1000)
		}
	},
	modules:{
		
	}
})