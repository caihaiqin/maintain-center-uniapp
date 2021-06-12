import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
	state:{
		equipmentsInfo:{},
		analyticsCount:{},
		userInfo:{}
	},
	mutations:{
		setEquipmentsInfo(state,equipmentsInfo){
			state.equipmentsInfo = equipmentsInfo
		},
		setAnalyticsCount(state,analyticsCount){
			state.analyticsCount=analyticsCount
		},
		setUserInfo(state,userInfo){
			state.userInfo=userInfo
		}
	}
})


export default store