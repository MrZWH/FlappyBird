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

	socketExample() {
		wx.connectSocket({
			url: 'ws://127.0.0.1:8282',
			success: function () {
				console.log('客户端连接成功')
			}
		});

		// 注意，我们发送数据必须在 wx.onSocketOpen 中进行
		wx.onSocketOpen(function() {
			wx.sendSocketMessage({
				data: '这个是来自客户端的实时消息'
			});

			wx.onSocketMessage(function (message) {
				conosle.log(message)
			})
		})
	}

	download() {
		wx.downloadFile({
			url: '',
			success: function (temp) {
				console.log(JSON.stringify(temp))
			}
		});
	}
}
