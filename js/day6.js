let data = {
	input: {
		type: '項目一',
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
	methods: {
		inputHandler() {
			//判斷使用者有輸入值才進行動作
			if (this.input.title) {
				// ES6寫法
				// let {type,title}=this.input;
				// this.menu.push({
				// 	type,
				// 	title,
				// 	link:'#'
				// });

				//新增資料
				this.menu.push({
					type: this.input.type,
					title: this.input.title,
					link: '#',
				});
				//清空 input
				this.input.title = '';
			}
		},
	},
});
