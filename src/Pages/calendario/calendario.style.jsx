// * Modules * //
import styled, { css } from 'styled-components'; 


// * Styles * //
export const Container = styled.div`

#calendar-wrap{
        #calendar {
            width: 98%;
            height: 700px;

}

#calendar a {
	color: #886260;
	text-decoration: none;
}

#calendar ul {
	list-style: none;
	padding: 0;
	margin: 0;
	width: 100%;
}

#calendar li {
	display: block;
	float: left;
	width:14.342%;
	padding: 5px;
	box-sizing:border-box;
	border: 1px solid #ccc;
	margin-right: -1px;
	margin-bottom: -1px;
}

#calendar ul.weekdays {
	height: 40px;
	background: #43589ece;
}

#calendar ul.weekdays li {
	text-align: center;
	text-transform: uppercase;
	line-height: 20px;
	border: none !important;
	padding: 10px 6px;
	color: #fff;
	font-size: 13px;
}

#calendar .days li {
	height: 180px;
}

#calendar .days li:hover {
	background: #d3d3d3;
}

#calendar .date {
	text-align: center;
	margin-bottom: 5px;
	padding: 4px;
	background: #333;
	color: #fff;
	width: 30px;
	border-radius: 50%;
	float: right;
}

#calendar .event {
	clear: both;
	display: block;
	font-size: 13px;
	border-radius: 4px;
	padding: 5px;
	margin-top: 40px;
	margin-bottom: 5px;
	line-height: 14px;
	background: #e4f2f2;
	border: 1px solid #b5dbdc;
	color: #009aaf;
	text-decoration: none;
}

#calendar .event-desc {
	color: #666;
	margin: 3px 0 7px 0;
	text-decoration: none;	
}

#calendar .other-month {
	background: #f5f5f5;
	color: #666;
}


@media(max-width: 768px) {

	#calendar .weekdays, #calendar .other-month {
		display: none;
	}

	#calendar li {
		height: auto !important;
		border: 1px solid #ededed;
		width: 100%;
		padding: 10px;
		margin-bottom: -1px;
	}

	#calendar .date {
		float: none;
	}
}
    }



`;