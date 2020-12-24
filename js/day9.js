let data = {
	title: 'Practice Vue With Alex',
	src:
		'https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
	index: 0,
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
var vm = new Vue({
	el: '#app',
	data: data,
	methods: {
		changePage(change) {
			// 餘數觀念
			this.index = (this.index + change + this.total) % this.total;
		 // this.index += change;
      // if (this.index < 0) {
      // 	this.index = 0;
      // } else if (this.index > this.menu.length -1) {
      // 	this.index = this.menu.length - 1;
      // }
		},
	},
	computed: {
		//重複的變數
		today() {
			return this.menu[this.index];
		},
		total() {
			return this.menu.length;
		},
	},
});
