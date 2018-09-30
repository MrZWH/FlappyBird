// 进行小游戏 api 测试
export class ApiExamples {
	getUserInfo() {
		const params = {
			success: function (res) {
				console.log(res);
			}
		};
		wx.getUserInfo(params);
	}

	login() {
		wx.login({
			success: function (res) {
				console.log(res);
			}
		});
	}

	getSettings() {
		wx.getSetting({
			success: function (res) {
				console.log(res);
			}
		});
	}

	httpExample() {
		wx.request({
			url: 'http://127.0.0.1:8181/',
			method: 'POST',
			data: 'Mydata',
			success: function (response) {
				console.log(response)
			}
		})
	}
}
