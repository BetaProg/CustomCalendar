function getDaysInMonth(month, year) {
	 var date = new Date(year, month, 1);
	 var days = [];
	 while (date.getMonth() === month) {
		days.push(new Date(date));
		date.setDate(date.getDate() + 1);
	 }
	 dayname = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
	 monthnames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
	 $('#monthDisplay').html("");
	return days.reduce((acc, date) => (acc[date.getDate()] = dayname[date.getDay()], acc), {});
}
	var month = new Date().getMonth(), year = new Date().getFullYear();
	var allweek = getDaysInMonth(month, year);
	
	dayname.map(day => getweekly(allweek, day))
	$('.month-year').html(monthnames[month]+" - "+year);
	cellAlignment();
	
	function getweekly(allweek, weekname){
		var weeklist = Object.keys(allweek).reduce((a,c) => {
		  if(allweek[c] == weekname) {
			a[c] = allweek[c];
			for(var i = 0;i<31;i++){
				// $('.clndr-col-Sunday').prepend("<div class='clndr-day'></div>")
				// if(i<c){
					// continue;
					// $('.clndr-week:nth-of-type('+i+').clndr-col-'+weekname).append("<div class='clndr-day'></div>"+"<br>")
				// }
				// $('.clndr-week:nth-of-type('+i+')')	
				// else{
					if(c == 1){
						// $('.clndr-col-Sunday').prepend("<div class='clndr-day'></div>");
					}
					$('.clndr-week:nth-of-type('+i+').clndr-col-'+weekname).append("<div class='clndr-day'>"+c+"</div>"+"<br>")
				// }
			}
			// $('.clndr-week:nth-of-type('+i+').clndr-col-'+weekname).append("<div class='clndr-day'>"+c+"</div>"+"<br>")
		  }
		   return a;
		},{});
	}
	
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
		var allweek = getDaysInMonth(month, year);
		$('.clndr-week').html("");
		$('.month-year').html(monthnames[month]+" - "+year);
		dayname.map(day => getweekly(allweek, day));
		cellAlignment();
	})
	$('#nextMonth').on('click', function(){
		month++;
		if(month%12==0){
			year++;
			month = 0;
		}
		$('.clndr-week').html("");
		var allweek = getDaysInMonth(month, year);
		$('.month-year').html(monthnames[month]+" - "+year);
		dayname.map(day => getweekly(allweek, day));
		cellAlignment();
	})
	
	function cellAlignment(){
		if($('.clndr-col-Saturday .clndr-day:nth-of-type(1)').html() == "1"){
			$('.clndr-col-Sunday').prepend("<div class='clndr-day'></div><br>");
			$('.clndr-col-Monday').prepend("<div class='clndr-day'></div><br>");
			$('.clndr-col-Tuesday').prepend("<div class='clndr-day'></div><br>");
			$('.clndr-col-Wednesday').prepend("<div class='clndr-day'></div><br>");
			$('.clndr-col-Thursday').prepend("<div class='clndr-day'></div><br>");
			$('.clndr-col-Friday').prepend("<div class='clndr-day'></div><br>");
		}
		else if($('.clndr-col-Monday .clndr-day:nth-of-type(1)').html() == "1"){
			$('.clndr-col-Sunday').prepend("<div class='clndr-day'></div><br>");
		}
		else if($('.clndr-col-Tuesday .clndr-day:nth-of-type(1)').html() == "1"){
			$('.clndr-col-Sunday').prepend("<div class='clndr-day'></div><br>");
			$('.clndr-col-Monday').prepend("<div class='clndr-day'></div><br>");
		}
		else if($('.clndr-col-Wednesday .clndr-day:nth-of-type(1)').html() == "1"){
			$('.clndr-col-Sunday').prepend("<div class='clndr-day'></div><br>");
			$('.clndr-col-Monday').prepend("<div class='clndr-day'></div><br>");
			$('.clndr-col-Tuesday').prepend("<div class='clndr-day'></div><br>");
		}
		else if($('.clndr-col-Thursday .clndr-day:nth-of-type(1)').html() == "1"){
			$('.clndr-col-Sunday').prepend("<div class='clndr-day'></div><br>");
			$('.clndr-col-Monday').prepend("<div class='clndr-day'></div><br>");
			$('.clndr-col-Tuesday').prepend("<div class='clndr-day'></div><br>");
			$('.clndr-col-Wednesday').prepend("<div class='clndr-day'></div><br>");
		}
		else if($('.clndr-col-Friday .clndr-day:nth-of-type(1)').html() == "1"){
			$('.clndr-col-Sunday').prepend("<div class='clndr-day'></div><br>");
			$('.clndr-col-Monday').prepend("<div class='clndr-day'></div><br>");
			$('.clndr-col-Tuesday').prepend("<div class='clndr-day'></div><br>");
			$('.clndr-col-Wednesday').prepend("<div class='clndr-day'></div><br>");
			$('.clndr-col-Thursday').prepend("<div class='clndr-day'></div><br>");
		}
		
		dayname.map(day => setPointerEvents(day));
		function setPointerEvents(day){
			if($('.clndr-col-'+day+' .clndr-day:nth-of-type(1)').html() == ""){
				$('.clndr-col-'+day+' .clndr-day:nth-of-type(1)').css({'pointer-events':'none', 'visibility':'hidden'});
				$('.clndr-col-'+day+' .clndr-day:nth-of-type(1)').parent().css({'pointer-events':'none', 'border':'0px solid #fff'});
			}
		}
	}













