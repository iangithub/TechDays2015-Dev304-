//如需空白範本的簡介，請參閱下列文件: 
//http://go.microsoft.com/fwlink/?LinkId=232509
(function () {
	"use strict";

	var app = WinJS.Application;
	var activation = Windows.ApplicationModel.Activation;

	app.onactivated = function (args) {
		if (args.detail.kind === activation.ActivationKind.launch) {
			if (args.detail.previousExecutionState !== activation.ApplicationExecutionState.terminated) {
				//TODO: 此應用程式已全新啟動。請在這裡初始化應用程式。
			} else {
				// TODO: 此應用程式已被暫停並終止。
				// 若要建立流暢的使用者體驗，請在此還原應用程式狀態，以便讓應用程式看起來像是從未停止執行一樣。
			}
			args.setPromise(WinJS.UI.processAll().done(function () {


			    var r108 = document.getElementById("R108");
			    var r109 = document.getElementById("R109");
			    var r110 = document.getElementById("R110");
			    var r111 = document.getElementById("R111");
			    var r112 = document.getElementById("R112");

			    r108.onclick = function () {
			        GetInfo(108);
			    }


			}));
		}
	};

	app.oncheckpoint = function (args) {
		//TODO: 此應用程式即將暫停。請在這裡儲存必須在暫停期間保留的所有狀態。
		//您可以使用 WinJS.Application.sessionState 物件，此物件會自動儲存並在暫停期間還原。
		//若您需要在應用程式暫停之前先完成非同步作業，請呼叫 args.setPromise()。
	};


	function GetInfo(sn) {
	    WinJS.xhr({
	        type: "get",
	        url: "http://data.kaohsiung.gov.tw/Opendata/MrtJsonGet.aspx?site="+sn,
	        responseType: "text"
	    }).done(function completed(result) {
	        if (result.status === 200) {
	            var jsonResult = result.responseText;
	            var jsonstr="{ \"MRT\":[{ \"descr\":\"南岡山\",\"arrival\":\"2\",\"next_arrival\":\"8\"}, { \"descr\":\"小港\",\"arrival\":\"4\",\"next_arrival\":\"10\"} ]}";
	            console.log(result.responseType);
	            var json = JSON.parse(jsonstr);
	            console.log(jsonResult);
	        }
	    });
	}

	app.start();

})();
