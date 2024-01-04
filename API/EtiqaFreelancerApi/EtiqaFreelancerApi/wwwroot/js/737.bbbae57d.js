"use strict";(self["webpackChunkvue_client"]=self["webpackChunkvue_client"]||[]).push([[737,863],{809:function(e,l,s){s.r(l),s.d(l,{default:function(){return $}});var t=s(3396),r=s(9242),n=s(7139);const a={class:"row"},d={class:"col-md-9"},o={class:"input-group mb-3"},u={class:"input-group-append"},c={class:"col-md-9 col-sm-9"},i={class:"card"},_=(0,t._)("div",{class:"card-header"},[(0,t._)("div",{class:"col-md-4 flexContainer"},[(0,t._)("div",null,[(0,t._)("h4",null,"Users List")]),(0,t._)("div",null,[(0,t._)("button",{class:"btn btn-primary","data-bs-toggle":"modal","data-bs-target":"#myModal"},"Add User")])])],-1),h={class:"card-body"},b={key:0,class:"table table-hover"},v=(0,t._)("thead",null,[(0,t._)("tr",null,[(0,t._)("th"),(0,t._)("th",null,"User Name"),(0,t._)("th",null,"Email"),(0,t._)("th",null,"Phone Number"),(0,t._)("th",null,"Skills"),(0,t._)("th",null,"Hobby"),(0,t._)("th",null,"File Name"),(0,t._)("th")])],-1),m=["onClick"],g=["onClick"],y={key:1},U={class:"col-md-3 col-sm-3"},p={key:0},k={key:1},w=(0,t._)("div",{class:"card"},[(0,t._)("div",{class:"card-header"},[(0,t._)("p",null,"Please click on a user...")])],-1),f=[w],N={id:"myModal",class:"modal"},z={class:"modal-dialog"},D={class:"modal-content"},C=(0,t._)("div",{class:"modal-header"},[(0,t._)("h4",{class:"modal-title"},"Create a New User"),(0,t._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal"})],-1),S={class:"modal-body"};function A(e,l,s,w,A,L){const x=(0,t.up)("user-details"),Z=(0,t.up)("add-user");return(0,t.wg)(),(0,t.iD)(t.HY,null,[(0,t._)("div",a,[(0,t._)("div",d,[(0,t._)("div",o,[(0,t.wy)((0,t._)("input",{type:"text",class:"form-control",placeholder:"Search by key","onUpdate:modelValue":l[0]||(l[0]=e=>A.key=e)},null,512),[[r.nr,A.key]]),(0,t._)("div",u,[(0,t._)("button",{class:"btn btn-outline-secondary",type:"button",onClick:l[1]||(l[1]=(...e)=>L.searchByKey&&L.searchByKey(...e))}," Search ")])])]),(0,t._)("div",c,[(0,t._)("div",i,[_,(0,t._)("div",h,[A.users?((0,t.wg)(),(0,t.iD)("table",b,[v,(0,t._)("tbody",null,[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(A.users,((e,l)=>((0,t.wg)(),(0,t.iD)("tr",{class:(0,n.C_)({active:l==A.currentIndex}),onClick:s=>L.setActiveUser(e,l),key:l},[(0,t._)("td",null,(0,n.zw)(l+1),1),(0,t._)("td",null,(0,n.zw)(e.userName),1),(0,t._)("td",null,(0,n.zw)(e.email),1),(0,t._)("td",null,(0,n.zw)(e.phoneNumber),1),(0,t._)("td",null,(0,n.zw)(e.skillSets),1),(0,t._)("td",null,(0,n.zw)(e.hobby),1),(0,t._)("td",null,(0,n.zw)(e.fileName),1),(0,t._)("td",null,[(0,t._)("button",{onClick:(0,r.iM)((l=>L.deleteNewUser(e.id)),["stop"]),class:"btn btn-danger"}," Delete",8,g)])],10,m)))),128))])])):((0,t.wg)(),(0,t.iD)("p",y," No user available"))])])]),(0,t._)("div",U,[A.currentUser?((0,t.wg)(),(0,t.iD)("div",p,[(0,t.Wm)(x,{currentUser:A.currentUser},null,8,["currentUser"])])):((0,t.wg)(),(0,t.iD)("div",k,f))])]),(0,t._)("div",N,[(0,t._)("div",z,[(0,t._)("div",D,[C,(0,t._)("div",S,[(0,t.Wm)(Z,{onRefreshList:L.refreshList},null,8,["onRefreshList"])])])])])],64)}var L=s(9442);const x={class:"card"},Z={class:"card-header"},K={class:"card-body"},B=(0,t._)("label",null,[(0,t._)("strong",null,"Email:")],-1),H=(0,t._)("label",null,[(0,t._)("strong",null,"Phone Number:")],-1),I=(0,t._)("label",null,[(0,t._)("strong",null,"Skill Sets:")],-1),M=(0,t._)("label",null,[(0,t._)("strong",null,"Hobby:")],-1);function E(e,l,s,r,a,d){const o=(0,t.up)("router-link");return(0,t.wg)(),(0,t.iD)("div",x,[(0,t._)("div",Z,[(0,t._)("h4",null,(0,n.zw)(s.currentUser.userName),1)]),(0,t._)("div",K,[(0,t._)("div",null,[B,(0,t._)("label",null,(0,n.zw)(s.currentUser.email),1)]),(0,t._)("div",null,[H,(0,t.Uk)(),(0,t._)("label",null,(0,n.zw)(s.currentUser.phoneNumber),1)]),(0,t._)("div",null,[I,(0,t.Uk)(),(0,t._)("label",null,(0,n.zw)(s.currentUser.skillSets),1)]),(0,t._)("div",null,[M,(0,t.Uk)(),(0,t._)("label",null,(0,n.zw)(s.currentUser.hobby),1)]),(0,t.Wm)(o,{to:"/users/"+s.currentUser.id,class:"badge badge-warning"},{default:(0,t.w5)((()=>[(0,t.Uk)("Edit")])),_:1},8,["to"])])])}var P={props:["currentUser"],setup(e){console.log("Selected User: "+e.currentUser)}},R=s(89);const W=(0,R.Z)(P,[["render",E]]);var F=W,Y=s(5189),O={name:"Users-list",components:{UserDetails:F,AddUser:Y["default"]},data(){return{users:[],currentUser:null,currentIndex:-1,key:"",selectedFile:null,url:null,status:""}},methods:{openModal(){this.$refs.AddUser.isOpen=!0},async retrieveUsers(){console.log("get method is called"),L.Z.getAll().then((e=>{console.log(e.data),this.users=e.data.data,this.status=e.data.status,console.log(this.status),console.log("data"+this.users),console.log(e.data.data)})).catch((e=>{console.log("[exception]->"+e)}))},async deleteNewUser(e){console.log("id to be deleted"+e),L.Z.delete(e).then((e=>{console.log(e.data),this.status=e.data.status,"Success"===this.status?(this.refreshList(),alert("Delete Successful")):alert("Delete failed")}))},async refreshList(){console.log("Refresh List is called!"),this.retrieveUsers(),this.currentUser=null,this.currentIndex=-1},setActiveUser(e,l){this.currentUser=e,this.currentIndex=e?l:-1},removeAllUsers(){L.Z.deleteAll().then((e=>{console.log(e.data),this.refreshList()})).catch((e=>{console.log(e)}))},searchByKey(){L.Z.findByKey(this.key).then((e=>{this.users=e.data.data,this.setActiveUser(null),console.log("folered user data : "+this.users)})).catch((e=>{console.log(e)}))}},mounted(){this.retrieveUsers()}};const V=(0,R.Z)(O,[["render",A]]);var $=V}}]);
//# sourceMappingURL=737.bbbae57d.js.map