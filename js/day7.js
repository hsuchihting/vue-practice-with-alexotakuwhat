let data = {
	input: {
		type: '全部',
		title: '',
	},
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
};

let vm = new Vue({
	el: '#app',
	data: data,
	methods: {},
	computed: {
		//第一次的選單篩選
		typeMenu() {
			//如果 select 的值不等於"全部"，就回傳 menu 篩選與資料相符的文字
			if (this.input.type !== '全部') {
				return this.menu.filter((item) => {
					return item.type === this.input.type;
				});
			} else {
				//否則回傳 menu 的資料
				return this.menu;
			}
		},
		//第二次文字篩選
		filterMenu() {
			//如果 input 有文字就篩選相符的，否則回傳原來的資料
			if (this.input.title) {
				//篩選條件為與輸入文字相同，全部轉成小寫
				return this.typeMenu.filter((item) => {
					let content = item.title.toLowerCase();
					let keyword = this.input.title.toLowerCase();
					return content.indexOf(keyword) !== -1;
				});
			} else {
				return this.typeMenu;
			}
			//換句話說就是如果找不到就回傳全部的資料
		},
	},
});
