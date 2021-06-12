<template>
	<view>
		<h5-header></h5-header>
		<el-container style=" border: 1px solid #eee">
		  <el-aside width="200px">
		    <el-menu :default-openeds="['1',]"
				default-active="1-1"
				 background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
		      <el-submenu index="1">
		        <template slot="title"><i class="el-icon-menu"></i>设备管理</template>
		        <el-menu-item-group>
		          <el-menu-item index="1-1">设备清单</el-menu-item>
		          <el-menu-item index="1-2">添加设备</el-menu-item>
							
		        </el-menu-item-group>
		       
		      </el-submenu>
		    
		      
		    </el-menu>
		  </el-aside>
		  <h5-equipment-list></h5-equipment-list>
		  
		</el-container>
	</view>
</template>

<script>
	
	import H5Header from "components/common/h5-header/h5-header.vue"
	import H5EquipmentList from "components/content/equipments/h5-equipment-list/h5-equipment-list.vue"
	import {getEquipmentInfo,getEquipmentCount} from "services/database/equipments.js"
	
	export default {
	    data() {
	      
	      return {
	        
	      }
	    },
			components:{H5Header,H5EquipmentList},
			
	
			
	  };
</script>
	
<style>
	
	 
	  
</style>
