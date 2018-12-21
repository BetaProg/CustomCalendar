function getDaysInMonth(month, year) {
	 // Since no month has fewer than 28 days
	 var date = new Date(year, month, 1);
	 var days = [];
	 // console.log('month', month, 'date.getMonth()', date.getMonth())
	 while (date.getMonth() === month) {
		days.push(new Date(date));
		date.setDate(date.getDate() + 1);
	 }
	 var dayname = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
	 monthnames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
	 // return days.map("<div class='dayelement'>"+day => day.getDate()+"-"+dayname[day.getDay()].substr(0, 3)+"</div>");
	 $('#monthDisplay').html("");
	days.map(day => $('#monthDisplay').append("<div class='dayelement'>"+day.getDate()+"-"+dayname[day.getDay()].substr(0, 3)+"<br>"+monthnames[month%12].substr(0, 3)+"-"+year+"</div>"));
	 // return days;
}
    var month = new Date().getMonth(), year = new Date().getFullYear();
    $('#monthDisplay').html(getDaysInMonth(month, year))
	$('#prevMonth').on('click', function(){
		month--;
		if(month<0){
			month = 11;
		}
		if(month%11==0 && month == 11){
			year--;
			month = new Date().getMonth();
		}
		var months = [];
		console.log(month, monthnames[month%12], year)
		$('#monthDisplay').html(getDaysInMonth(month, year));
	})
	$('#nextMonth').on('click', function(){
		month++;
		if(month%12==0){
			year++;
			month = 0;
		}
		console.log(month, monthnames[month%12], year);
		$('#monthDisplay').html(getDaysInMonth(month, year));
	})