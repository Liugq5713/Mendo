module.exports =
    getTime = function () {
        var date = new Date();
        var nowMonth = date.getMonth() + 1;
        var strDate = date.getDate();
        var seperator = "-";
        if (nowMonth >= 1 && nowMonth <= 9) {
            nowMonth = "0" + nowMonth;
        }
        if (strDate >= 0 && strDate <= 9) {
            strDate = "0" + strDate;
        }
        return date.getFullYear() + seperator + nowMonth + seperator + strDate;
    }