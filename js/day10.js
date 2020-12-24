let vm = new Vue({
	el: '#app',
	data: {
		contacts: [],
		input: {
			name: '',
			email: '',
		},
		editIndex: null,
	},
	created() {
		axios
			.get('http://localhost:3000/contact')
			.then((res) => {
				console.log(res);
				this.contacts = res.data;
			})
			.catch((err) => {
				console.log(err);
			});
	},
	methods: {
		submitHandler() {
			let { name, email } = this.input;
			if (!name || !email) {
				return;
			}
			//如果 editIndex 是空的就是新增資料
			if (this.editIndex === null) {
				axios
					.post('http://localhost:3000/contact', this.input)
					.then((res) => {
						console.log(res);
						this.contacts.push(res.data);
						this.cancelHandler();
					})
					.catch((err) => {
						console.log(err);
					});
			} else {
        // 修改該筆資料
				let id = this.contacts[this.editIndex].id;
				axios
					.put(`http://localhost:3000/contact/${id}`, this.input)
					.then((res) => {
						this.contacts[this.editIndex] = res.data;
						this.cancelHandler();
					})
					.catch((err) => {
						console.log(err);
					});
			}
		},
		cancelHandler() {
			this.input.name = null;
			this.input.email = null;
			this.editIndex = null;
		},
		editHandler(index) {
			let { name, email } = this.contacts[index];
			this.input = {
				name,
				email,
			};
			this.editIndex = index;
		},
		deleteHandler(index) {
			let target = this.contacts[index];
			if (confirm(`Do you want to DELETE ${target.name}?`)) {
				axios
					.delete(`http://localhost:3000/contact/${target.id}`)
					.then((res) => {
						console.log(res);
						this.contacts.splice(index, 1);
						this.cancelHandler();
					})
					.catch((err) => {
						console.log(err);
					});
			}
		},
	},
});
