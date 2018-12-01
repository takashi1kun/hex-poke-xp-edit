if (navigator.userAgent.match(/android/i)) document.getElementById("smartphone").style.display = "none !important";
if (navigator.userAgent.match(/(iPhone|iPod)/i)) document.getElementById("smartphone").style.display = "none !important";
document.getElementById("downloadButton").disabled = true;
//Variables

var file1hex;
var file2hex;
var fileData;
var fileOutputHex;
var readFileAsArrayMode;

//functions

//hex comparing functions

var changePercentage = function(perc1, perc2, a, b) {
  var hex1 = file1hex != null ? file1hex : a.split(" ");
  var hex2 = file2hex != null ? file2hex : b.split(" ");
  var decTemp;
  var hexResult = [];
  var dec1 = reConvert(hex1);
  var dec2 = reConvert(hex2);
  for (i = 0; i != dec1.length; i++) {
    if (dec1[i] != dec2[i]) {
      decTemp = Math.floor((dec1[i] / perc1) * perc2);
      decTemp = decTemp > 255 ? 255 : decTemp;
      decTemp = decTemp < 0 ? 0 : decTemp;
      hexResult[i] = decimalToHexDouble(decTemp);
    } else {
      hexResult[i] = hex1[i];
    }
  }
  fileOutputHex = hexResult;
  document.getElementById("demo").innerHTML = writeHex(hexResult, true);
  document.getElementById("downloadButton").disabled = false;
};

var writeHex = function(array, mode) {
  if (mode) {
    return array.join(" ");
  } else {
    return array.join("");
  }
};

var decimalToHexDouble = function(d, padding) {
  var hex = Number(d).toString(16);
  padding =
    typeof padding === "undefined" || padding === null
      ? (padding = 2)
      : padding;

  while (hex.length < padding) {
    hex = "0" + hex;
  }

  return hex;
};

//Document Manipulation Functions

var generateFile = function() {
  var a = document.getElementById("file1").value;
  var b = document.getElementById("file2").value;
  var x = document.getElementById("frm1");
  var perc1 = x.perc1.value != 0 ? x.perc1.value - 1 : 300;
  var perc2 = x.perc2.value != 0 ? x.perc2.value - 1 : 300;
  if (perc1 != 300 && perc2 != 300 && a != "" && b != "") {
    changePercentage(perc1, perc2, a, b);
  }
};

var openFile1 = function(event) {
  var input = event.target;
  readFileAsArray(input.files[0], true);
};
var openFile2 = function(event) {
  var input = event.target;
  readFileAsArray(input.files[0], false);
};

//Saving Functions

var saveFileToComputer = function() {
  var byteArray = reConvert(fileOutputHex);
  var blob = new Blob([byteArray], {
    type: "application/octet-stream"
  });
  saveAs(blob, "personal_total.bin");
};

var reConvert = function(hexArray) {
  var decimalArray = [];
  for (i = 0; i < hexArray.length; i++) {
    decimalArray[i] = parseInt(hexArray[i], 16);
  }
  return new Uint8Array(decimalArray);
};

//Loading Functions

var Convert = function(uint8View) {
  var hexArray = [];
  for (i = 0; i < uint8View.length; i++) {
    hexArray[i] = decimalToHexDouble(uint8View[i]);
  }
  return hexArray;
};

var readFileAsArray = function(file, mode) {
  fileData = file;
  readFileAsArrayMode = mode;
  var promise = new Promise(getBuffer);
  promise
    .then(function(data) {
      var mode = readFileAsArrayMode;
      if (mode) {
        file1hex = data;
        document.getElementById("file1").value = writeHex(data, true);
      } else {
        file2hex = data;
        document.getElementById("file2").value = writeHex(data, true);
      }
    })
    .catch(function(err) {
      console.log("Error: ", err);
    });
};

var getBuffer = function(resolve) {
  var reader = new FileReader();
  reader.readAsArrayBuffer(fileData);
  reader.onload = function() {
    resolve(Convert(new Uint8Array(reader.result)));
  };
};
