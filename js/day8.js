let data = {
	menu: [
		{
			type: '項目一',
			title: '選單事件綁定',
			link: '#',
		},
		{
			type: '項目二',
			title: '雙向資料表單處理',
			link: '#',
		},
		{
			type: '項目三',
			title: '使用者輸入呈現',
			link: '#',
		},
		{
			type: '項目四',
			title: '篩選資料轉換',
			link: '#',
		},
		{
			type: '項目五',
			title: '互動式資料選單',
			link: '#',
		},
		{
			type: '項目六',
			title: 'CSS + jQuery 動畫',
			link: '#',
		},
		{
			type: '項目七',
			title: '資料觀測與設定',
			link: '#',
		},
		{
			type: '項目八',
			title: '家鄉通訊錄 API',
			link: '#',
		},
		{
			type: '項目九',
			title: 'TodoList 實做',
			link: '#',
		},
	],
	input: {
		type: null,
		title: null,
	},
};

let vm = new Vue({
	el: '#app',
	data: data,
	//建立巢狀資料
	computed: {
		typeList() {
			let obj = {
				sort: [],
				map: {},
			};
			this.menu.forEach((item, index) => {
				let { type, title, link } = item;
				//第一次如果在資料中沒有該類型，，就把資料初始化
				if (!obj.map[type]) {
					obj.sort.push(type);
					obj.map[type] = {
						sort: [],
						map: {},
					};
				}
				//整理資料
				obj.map[type].sort.push(title); //新增 title
				obj.map[type].map[title] = (index, link); //把 index 與 link 整理好
			});
			return obj;
		},
		//產生與 typeList 對應的選項
		titleList() {
			//清空選單，因為 computed 會暫存資料
			this.input.title = null;
			if (this.input.type) {
				//在 typeLIst 取出該類別
				return this.typeList.map[this.input.type];
			} else {
				return [];
			}
		},
		content() {
			if (this.input.title) {
				return this.titleList.map[this.input.title];
			} else {
				return null;
			}
		},
	},
});
