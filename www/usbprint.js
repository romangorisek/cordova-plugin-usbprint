module.exports = {
    print: function(printername, msg, successCallback, failureCallback) {
        cordova.exec(successCallback, failureCallback, "PrinterService", "print", [printername, msg]);
    },
    printBase64: function(printername, base64, successCallback, failureCallback) {
        cordova.exec(successCallback, failureCallback, "PrinterService", "printBase64", [printername, base64]);
    },
    sendCommand: function(printername, command, successCallback, failureCallback) {
        cordova.exec(successCallback, failureCallback, "PrinterService", "sendCommand", [printername, command]);
    },
    connect: function(printername, successCallback, failureCallback) {
        cordova.exec(successCallback, failureCallback, "PrinterService", "connect", [printername]);
    },
    disconnect: function(printername, successCallback, failureCallback) {
        cordova.exec(successCallback, failureCallback, "PrinterService", "disconnect", [printername]);
    },
    getConnectedPrinters: function(successCallback, failureCallback) {
        cordova.exec(successCallback, failureCallback, "PrinterService", "getConnectedPrinters", []);
    },
    isPaperAvailable: function(printername, successCallback, failureCallback) {
        cordova.exec(successCallback, failureCallback, "PrinterService", "isPaperAvailable", [printername]);
    },
    cutPaper: function(printername, successCallback, failureCallback) {
        cordova.exec(successCallback, failureCallback, "PrinterService", "cutPaper", [printername]);
    },
};