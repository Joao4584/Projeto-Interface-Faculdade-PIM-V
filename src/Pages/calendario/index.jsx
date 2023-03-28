// * Modules * //
import React, {  } from 'react'
import { Calendar, dayjsLocalizer } from 'react-big-calendar'
import dayjs from 'dayjs'

// * Exports * //
import { Container } from './calendario.style'
 
 
// * Components * //
const localizer = dayjsLocalizer(dayjs)

export function Calendario() {

 return (
    <Container>
   <div id="calendar-wrap">
    		<header>
                <br></br>
    			<h1>Abril 2023</h1>
    		</header>
    		<div id="calendar">
    			<ul class="weekdays">
    				<li>Domingo</li>
    				<li>Segunda</li>
    				<li>Terça</li>
    				<li>Quarta</li>
    				<li>Quinta</li>
    				<li>Sexta</li>
    				<li>Sabado</li>
    			</ul>


    			<ul class="days">
                <li class="day other-month">
    					<div class="date">26</div>    					
    				</li>
    				<li class="day other-month">
    					<div class="date">27</div>    					
    				</li>
    				<li class="day other-month">
    					<div class="date">28</div>
    					<div class="event">
    						<div class="event-desc">
    							<b>Professor: </b> Lucas Benevit <br></br>
                                <b>Equipamento: </b> Projetor
    						</div>
    						<div class="event-time">
    						    
    						</div>
    					</div>    					
    				</li>
    				<li class="day other-month">
    					<div class="date">29</div>    					
    				</li>
    				<li class="day other-month">
    					<div class="date">30</div>    					
    				</li>
    				<li class="day other-month">
    					<div class="date">31</div>    					
    				</li>


    				<li class="day">
    					<div class="date">1</div>    					
    				</li>
    				<li class="day">
    					<div class="date">2</div>
    					  					
    				</li>
    			</ul>


    			<ul class="days">
    				<li class="day">
    					<div class="date">3</div>    					
    				</li>
    				<li class="day">
    					<div class="date">4</div>    					
    				</li>
    				<li class="day">
    					<div class="date">5</div>    					
    				</li>
    				<li class="day">
    					<div class="date">6</div>    					
    				</li>
    				<li class="day">
    					<div class="date">7</div>
    					   					
    				</li>
    				<li class="day">
    					<div class="date">8</div>    					
    				</li>
    				<li class="day">
    					<div class="date">9</div>    					
    				</li>
    			</ul>


    			<ul class="days">
    				<li class="day">
    					<div class="date">10</div>    					
    				</li>
    				<li class="day">
    					<div class="date">11</div>    					
    				</li>
    				<li class="day">
    					<div class="date">12</div>
                        <div class="event">
    						<div class="event-desc">
    							<b>Professor: </b> Leticia Silva <br></br>
                                <b>Equipamento: </b> Caixa De Som
    						</div>
    						<div class="event-time">
    						    
    						</div>
    					</div>      					
    				</li>
    				<li class="day">
    					<div class="date">13</div>    					
    				</li>
    				<li class="day">
    					<div class="date">14</div>		
    				</li>
    				<li class="day">
    					<div class="date">15</div>    					
    				</li>
    				<li class="day">
    					<div class="date">16</div>    					
    				</li>
    			</ul>


    			<ul class="days">
    				<li class="day">
    					<div class="date">17</div>    					
    				</li>
    				<li class="day">
    					<div class="date">18</div>    					
    				</li>
    				<li class="day">
    					<div class="date">19</div>    					
    				</li>
    				<li class="day">
    					<div class="date">20</div>    					
    				</li>
    				<li class="day">
    					<div class="date">21</div> 
                        <div class="event">
    						<div class="event-desc">
    							<b>Professor: </b> Walef Android <br></br>
                                <b>Equipamento: </b> TV
    						</div>
    						<div class="event-time">
    						    
    						</div>
    					</div>     					
    				</li>
    				<li class="day">
    					<div class="date">22</div>
    					  					
    				</li>
    				<li class="day">
    					<div class="date">23</div>    					
    				</li>
    			</ul>


    			<ul class="days">
    				<li class="day">
    					<div class="date">24</div>    					
    				</li>
    				<li class="day">
    					<div class="date">25</div>
    					    					
    				</li>
    				<li class="day">
    					<div class="date">26</div>    					
    				</li>
    				<li class="day">
    					<div class="date">27</div>    					
    				</li>
    				<li class="day">
    					<div class="date">28</div>    					
    				</li>
    				<li class="day">
    					<div class="date">29</div>    					
    				</li>
    				<li class="day">
    					<div class="date">30</div>    					
    				</li>
    			</ul>


    			<ul class="days">
    				<li class="day">
    					<div class="date">31</div>    					
    				</li>
    				<li class="day other-month">
    					<div class="date">1</div> 					
    				</li>
    				<li class="day other-month">
    					<div class="date">2</div>    					
    				</li>
    				<li class="day other-month">
    					<div class="date">3</div>    					
    				</li>
    				<li class="day other-month">
    					<div class="date">4</div>    					
    				</li>
    				<li class="day other-month">
    					<div class="date">5</div>    					
    				</li>
    				<li class="day other-month">
    					<div class="date">6</div>    					
    				</li>
    			</ul>

    		</div>
    	</div>
    </ Container>
 )
}