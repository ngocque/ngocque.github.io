var PYTHAGOREAN = {
    'a': 1,
    'b': 2,
    'c': 3,
    'd': 4,
    'e': 5,
    'f': 6,
    'g': 7,
    'h': 8,
    'i': 9,
    'j': 1,
    'k': 2,
    'l': 3,
    'm': 4,
    'n': 5,
    'o': 6,
    'p': 7,
    'q': 8,
    'r': 9,
    's': 1,
    't': 2,
    'u': 3,
    'v': 4,
    'w': 5,
    'x': 6,
    'y': 7,
    'z': 8
};


function removeAccent(str) {

    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
    str = str.replace(/đ/g, "d");
    str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
    str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
    str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
    str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
    str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
    str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
    str = str.replace(/Đ/g, "D");
    return str;

}


function preprocessStr(str) {
    
    str = str.toLowerCase();
    str = removeAccent(str);
    str = str.replace(/[^a-z\s]/gi, ' ');
    str = str.replace(/\s+/g, ' ');
    str.trim();

    return str.split(" ");
	}
	//Đưa tên vào mảng
function SplitStr(str) {
    var newstr=[];
    str = str.toLowerCase();
    str = removeAccent(str);
	str = str.replace(/[^a-z\s]/gi, ' ');
    str = str.replace(/\s+/g, ' ');
    str.trim();	
	newstr = str.split(" ").join("");// xoa khoang trang toan bo chuoi
	let mang = [];
	// Cắt chuỗi thành mảng
for (let char of newstr) {
    mang.push(char);
}	console.log("Ra được chuỗi: ", mang);
    return mang;
}
// Hàm lấy các số 1,2,3,..9,11,22,33

function reduceSumPythagoras(num) {

    if (num < 10 || num === 11 || num === 22 || num === 33) {
      return num;
    }

    let digit = num;
    num = 0;
    while (digit !== 0) {
      num += digit % 10;
      digit = Math.floor(digit / 10);
    }
	
    return reduceSumPythagoras(num);
}

	

function calcWordValue(word, mode="ALL") {

    console.log("Calculating word value for: " + word);

    if (word.length == 0) {
        return 0;
    }

    let wordValue = 0;
    let letters = word.split('');
	//let letters2 = word;
//mode= động lực bên trong DLBT-Tâm hồn
    if (mode == "TH") {

        console.log("TH");

        for (let i = 1; i < letters.length; ++i) {
            // Remove y if y lies after a vowel (loại bỏ y nếu y nằm sau 1 nguyên âm)
            if (letters[i] == "y" && "ueoai".includes(letters[i-1])) {
                letters[i] = ".";
            }
        }

        for (let i = 0; i < letters.length; ++i) {
            // Only keep u, e, o, a, i, y- Chỉ giữ nguyên âm
            if (!"ueoaiy".includes(letters[i])) {
                letters[i] = ".";
            }
        }

        console.log(letters);
    //Nếu mode bằng nhân cách bên ngoài  NC  
    } else if (mode == "NC") {

        console.log("NC");

        if (letters[0] == "y") {
            letters[0] = ".";
        }

        for (let i = 1; i < letters.length; ++i) {
            if (letters[i] == "y" && !"ueoai".includes(letters[i-1])) {
                letters[i] = ".";
            }
        }

        for (let i = 0; i < letters.length; ++i) {
            if ("ueoai".includes(letters[i])) {
                letters[i] = ".";
            }
        }

        console.log(letters);
		
    } 

    for (let i = 0; i < letters.length; ++i) {
        if (letters[i] in PYTHAGOREAN) {
            wordValue += PYTHAGOREAN[letters[i]];
        }
    }
    
    console.log("Value: " + wordValue);
    wordValue = reduceSumPythagoras(wordValue);

    return wordValue

}

// Bài học đường đời
function calcBhdd(day, month, year) {

    console.log("BHDD:");

   const sum = parseInt(year) + parseInt(month) + parseInt(day);
    return reduceSumPythagoras(sum);

}
// Ngày sinh
function calcNS(day) {

    console.log("NS:");

    const sum =   parseInt(day);
    return reduceSumPythagoras(sum);

}

// Thành tựu (Thành tích)-Achievement
function calcTt(day, month, year, words) {
     let sum=0; 
    console.log("TT:");
    let duongdoi=calcBhdd(day, month, year);
	let word = preprocessStr(words);
	let sumenh=calcSm(word);
	console.log("Duong doi là:", duongdoi);
	console.log("Sứ mệnh là:", sumenh);
	sum= reduceSumPythagoras(duongdoi+sumenh);
    return sum; 
	
	
}
// Năng lực tự nhiên-Sứ mệnh
function calcSm(words) {

    let sum = 0;
    for (let i = 0; i < words.length; ++i) {
        sum += calcWordValue(words[i]);
    }

    sum = reduceSumPythagoras(sum);
    return sum;

}

//Động lực bên trong-Chỉ số tâm hồn
function calcTh(words) {

    let sum = 0;
    for (let i = 0; i < words.length; ++i) {
        sum += calcWordValue(words[i], mode="TH");
    }

    sum = reduceSumPythagoras(sum);
    return sum;

}
//Chỉ số Đam mê
function calcDm(words) {

    let sum = 0;
    for (let i = 0; i < words.length; ++i) {
        sum += calcWordValue(words[i], mode="DM");
    }

    sum = reduceSumPythagoras(sum);
    return sum;

}

// Tìm Đam mê
function FindDm(words) {
var arr=[];
	 for (let i = 0; i < words.length; ++i) {
       if (words[i] in PYTHAGOREAN) {
		   
	   arr[i]= PYTHAGOREAN[words[i]];
	   
    }
	    }
	 console.log("Chuỗi cần tìm là:",arr);
	let maxcount = 0;
	let element_having_max_freq;
	for (let i = 0; i < arr.length; i++) {
		let count = 0;
		for (let j = 0; j < arr.length; j++) {
			if (arr[i] == arr[j])
				count++;
		}

		if (count > maxcount) {
			maxcount = count;
			element_having_max_freq = arr[i];
		}
	}
console.log("Số xuất hiện nhiều nhất là:", element_having_max_freq);
	return element_having_max_freq;
	
}



//Nhân cách bên ngoài

function calcNc(words) {

    let sum = 0;
    for (let i = 0; i < words.length; ++i) {
        sum += calcWordValue(words[i], mode="NC");
    }

    sum = reduceSumPythagoras(sum);
    return sum;

}


$(function () {

    $(".loading-icon").hide();
    $.ajaxSetup({async:false});

    function getData(url) {
        $.get(url, function(data) {
            let content = $("#result", data).html(); // finds <div id='mainDiv'>...</div>
            $("#result").append(content);
        }, "html");
    }


    function calculateBtnClick() {

        // Extract date
        let date = new Date($('#birthday').val());
        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();
        let name = $("#name").val();

        if (name.length == 0) {
            alert("Xin hãy nhập tên của bạn.");
            return;
        }

        if (isNaN(day) || isNaN(month) || isNaN(year)) {
            alert("Xin hãy kiểm tra lại ngày sinh.");
            return;
        }

        // Clear old content and show loading icon
        $("#result").html("");
        $(".loading-icon").show();

        // Delay a little to show loading icon
        setTimeout(function() {
            // Run calculation
            calculate(day, month, year, name);
            // Hide loading icon
            $(".loading-icon").hide();
        }, 1000);

    }


    function calculate(day, month, year, name) {

        console.log("Calculating...");
        $("#result").append('<h2 class="text-center mb-4">Kết quả:</h3>');
       //1) Đường đời 
        let bhdd = calcBhdd(day, month, year);
        $("#result").append('<p class="calculation-steps" style="color:red"><b>Bài học đường đời (BHDD) = ' + bhdd + '</b>. <a href="/posts/cach-tinh/bhddBO" target="_blank">Chi tiết hơn..</a></p>');
        if (bhdd != 0) {
            getData("/posts/bhdd/" + bhdd);
        }
		//5) Ngày sinh
		 let ns= calcNS(day);
        $("#result").append('<p class="calculation-steps" style="color:red"><b>Ngày sinh (NS) = ' + ns + '</b>. <a href="/posts/cach-tinh/bhddBO" target="_blank">Chi tiết hơn...</a></p>');
        if (ns != 0) {
            getData("/posts/ns/" + ns);
        }
		//5) Thành tựu
		 let tt= calcTt(day,month, year, name);
        $("#result").append('<p class="calculation-steps" style="color:red"><b>Thành tựu = ' + tt + '</b>. <a href="/posts/cach-tinh/bhddBO" target="_blank">Chi tiết hơn...</a></p>');
        if (tt != 0) {
            getData("/posts/tt/" + tt);
        }
//2) Sứ mệnh
        let words = preprocessStr(name);
        console.log("Preprocessed name: " + words);

        let sm = calcSm(words);
        $("#result").append('<p class="calculation-steps" style="color:red"><b>Sứ mệnh (SM) = ' + sm + '</b>. <a href="/posts/cach-tinh/dlbt-nltn-ncBO" target="_blank">Chi tiết hơn..</a></p>');
        if (sm != 0) {
            getData("/posts/sm/" + sm);
        }
//3) Tâm hồn
        let th = calcTh(words);
        $("#result").append('<p class="calculation-steps" style="color:red"><b>Chỉ số tâm hồn (ĐLBT) = ' + th + '</b>. <a href="/posts/cach-tinh/dlbt-nltn-ncBO" target="_blank">Chi tiết hơn..</a></p>');
        if (th != 0) {
            getData("/posts/th/" + th);
        }
       //6) Đam mê
	   let words2 = SplitStr(name);
        console.log("Chuoico duoc: " + words2);
        let dm = FindDm(words2);
        $("#result").append('<p class="calculation-steps" style="color:red"><b>Chỉ số Đam mê = ' + dm + '</b>. <a href="/posts/cach-tinh/dlbt-nltn-ncBO" target="_blank">Chi tiết hơn..</a></p>');
        if (dm != 0) {
            getData("/posts/dm/" + dm);
        }
        let nc = calcNc(words);
        $("#result").append('<p class="calculation-steps" style="color:red"><b>Nhân cách bên ngoài (NC) = ' + nc + '</b>. <a href="/posts/cach-tinh/dlbt-nltn-ncBO" target="_blank">Chi tiết hơn...</a></p>');
        if (nc != 0) {
            getData("/posts/nc/" + nc);
        }
		

    }


    $("#calculate-btn").click(calculateBtnClick);


});