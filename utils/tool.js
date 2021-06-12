import {throttle} from "lodash"
export const backToTop = throttle(function(e){
			
			if(e.scrollTop>1000){
				this.backTopShow = true
			}else{
				this.backTopShow=false
			}
		},500)
		
		