

const theme=document.querySelector("#theme")
const main=document.querySelector("main")
const api="eee3b9060df341a18e9104520260607"
const city="bikaner"
const image=document.querySelector("#imgcl")
const humidity=document.querySelector(".humi")
const condition=document.querySelector(".cond")
const todo = document.querySelector("#todo")
const wind=document.querySelector(".wind")
const temp=document.querySelector(".temprature")
const bottom=document.querySelector("#bottom")

const time =document.querySelector(".time")
const date=document.querySelector(".date")
const timer =document.querySelector("#timer")
const timerclass =document.querySelector(".timer")
const timerclose=document.querySelector("#close")
const startbtn=document.querySelector("#startbtn")
const resetbtn=document.querySelector("#reset")
const pausebtn=document.querySelector("#pause")
const timerem=document.querySelector(".timeremaning")
const timerline=document.querySelector(".line")
const quote=document.querySelector("#quoteModal")
const quotebtn=document.querySelector("#thoughts")
const quoteclose=document.querySelector("#closeQuote")
const quotevalue=document.querySelector("#quotevalue")
const quoteauthor=document.querySelector("#authorquote")
const reloadquote=document.querySelector("#reloadquote")

const thought = [
  {
    thought: "The only way to do great work is to love what you do.",
    name: "Steve Jobs"
  },
  {
    thought: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    name: "Winston Churchill"
  },
  {
    thought: "The future belongs to those who believe in the beauty of their dreams.",
    name: "Eleanor Roosevelt"
  },
  {
    thought: "In the middle of every difficulty lies opportunity.",
    name: "Albert Einstein"
  },
  {
    thought: "Be yourself; everyone else is already taken.",
    name: "Oscar Wilde"
  },
  {
    thought: "It always seems impossible until it's done.",
    name: "Nelson Mandela"
  },
  {
    thought: "Do what you can, with what you have, where you are.",
    name: "Theodore Roosevelt"
  },
  {
    thought: "Whether you think you can or you think you can't, you're right.",
    name: "Henry Ford"
  },
  {
    thought: "Our greatest glory is not in never falling, but in rising every time we fall.",
    name: "Confucius"
  },
  {
    thought: "The best way to predict the future is to create it.",
    name: "Peter Drucker"
  },
  {
    thought: "Dream big and dare to fail.",
    name: "Norman Vaughan"
  },
  {
    thought: "Believe you can and you're halfway there.",
    name: "Theodore Roosevelt"
  },
  {
    thought: "Don't watch the clock; do what it does. Keep going.",
    name: "Sam Levenson"
  },
  {
    thought: "Everything you've ever wanted is on the other side of fear.",
    name: "George Addair"
  },
  {
    thought: "Hardships often prepare ordinary people for an extraordinary destiny.",
    name: "C.S. Lewis"
  },
  {
    thought: "If opportunity doesn't knock, build a door.",
    name: "Milton Berle"
  },
  {
    thought: "The secret of getting ahead is getting started.",
    name: "Mark Twain"
  },
  {
    thought: "Your limitation—it's only your imagination.",
    name: "Unknown"
  },
  {
    thought: "Push yourself, because no one else is going to do it for you.",
    name: "Unknown"
  },
  {
    thought: "Great things never come from comfort zones.",
    name: "Unknown"
  },
  {
    thought: "Dream it. Wish it. Do it.",
    name: "Unknown"
  },
  {
    thought: "Success doesn't just find you. You have to go out and get it.",
    name: "Unknown"
  },
  {
    thought: "The harder you work for something, the greater you'll feel when you achieve it.",
    name: "Unknown"
  },
  {
    thought: "Don't stop when you're tired. Stop when you're done.",
    name: "Unknown"
  },
  {
    thought: "Wake up with determination. Go to bed with satisfaction.",
    name: "Unknown"
  },
  {
    thought: "Little things make big days.",
    name: "Unknown"
  },
  {
    thought: "It's going to be hard, but hard does not mean impossible.",
    name: "Unknown"
  },
  {
    thought: "Don't wait for opportunity. Create it.",
    name: "Unknown"
  },
  {
    thought: "Sometimes we're tested not to show our weaknesses, but to discover our strengths.",
    name: "Unknown"
  },
  {
    thought: "The key to success is to focus on goals, not obstacles.",
    name: "Unknown"
  },
  {
    thought: "Work hard in silence, let success make the noise.",
    name: "Frank Ocean"
  },
  {
    thought: "Small progress is still progress.",
    name: "Unknown"
  },
  {
    thought: "Discipline is choosing between what you want now and what you want most.",
    name: "Abraham Lincoln"
  },
  {
    thought: "Failure is the opportunity to begin again more intelligently.",
    name: "Henry Ford"
  },
  {
    thought: "The expert in anything was once a beginner.",
    name: "Helen Hayes"
  },
  {
    thought: "Action is the foundational key to all success.",
    name: "Pablo Picasso"
  },
  {
    thought: "Success is the sum of small efforts repeated day in and day out.",
    name: "Robert Collier"
  },
  {
    thought: "Quality means doing it right when no one is looking.",
    name: "Henry Ford"
  },
  {
    thought: "Stay hungry. Stay foolish.",
    name: "Steve Jobs"
  },
  {
    thought: "The journey of a thousand miles begins with one step.",
    name: "Lao Tzu"
  },
  {
    thought: "Do one thing every day that scares you.",
    name: "Eleanor Roosevelt"
  },
  {
    thought: "Turn your wounds into wisdom.",
    name: "Oprah Winfrey"
  },
  {
    thought: "Knowledge speaks, but wisdom listens.",
    name: "Jimi Hendrix"
  },
  {
    thought: "You miss 100% of the shots you don't take.",
    name: "Wayne Gretzky"
  },
  {
    thought: "A goal without a plan is just a wish.",
    name: "Antoine de Saint-Exupéry"
  },
  {
    thought: "Life begins at the end of your comfort zone.",
    name: "Neale Donald Walsch"
  },
  {
    thought: "Don't limit your challenges. Challenge your limits.",
    name: "Unknown"
  },
  {
    thought: "Be so good they can't ignore you.",
    name: "Steve Martin"
  },
  {
    thought: "The best revenge is massive success.",
    name: "Frank Sinatra"
  },
  {
    thought: "Doubt kills more dreams than failure ever will.",
    name: "Suzy Kassem"
  },
  {
    thought: "If you want it, work for it.",
    name: "Unknown"
  },
  {
    thought: "One day or day one. You decide.",
    name: "Unknown"
  },
  {
    thought: "Don't downgrade your dream just to fit your reality.",
    name: "Unknown"
  },
  {
    thought: "Every accomplishment starts with the decision to try.",
    name: "John F. Kennedy"
  },
  {
    thought: "The pain you feel today will be the strength you feel tomorrow.",
    name: "Unknown"
  },
  {
    thought: "Never stop learning because life never stops teaching.",
    name: "Unknown"
  },
  {
    thought: "Make each day your masterpiece.",
    name: "John Wooden"
  },
  {
    thought: "Difficult roads often lead to beautiful destinations.",
    name: "Unknown"
  },
  {
    thought: "Hustle until your haters ask if you're hiring.",
    name: "Unknown"
  },
  {
    thought: "Success starts with self-belief.",
    name: "Unknown"
  },
  {
    thought: "Consistency beats intensity.",
    name: "Unknown"
  },
  {
    thought: "Done is better than perfect.",
    name: "Sheryl Sandberg"
  },
  {
    thought: "Your future is created by what you do today.",
    name: "Robert Kiyosaki"
  },
  {
    thought: "Motivation gets you started. Habit keeps you going.",
    name: "Jim Ryun"
  },
  {
    thought: "A river cuts through rock because of persistence.",
    name: "James N. Watkins"
  },
  {
    thought: "Focus on progress, not perfection.",
    name: "Unknown"
  },
  {
    thought: "Be fearless in the pursuit of what sets your soul on fire.",
    name: "Jennifer Lee"
  },
  {
    thought: "The comeback is always stronger than the setback.",
    name: "Unknown"
  },
  {
    thought: "Your only limit is your mind.",
    name: "Unknown"
  },
  {
    thought: "Dare to begin.",
    name: "Unknown"
  },
  {
    thought: "Keep your eyes on the stars and your feet on the ground.",
    name: "Theodore Roosevelt"
  },
  {
    thought: "The difference between ordinary and extraordinary is that little extra.",
    name: "Jimmy Johnson"
  },
  {
    thought: "Success is a journey, not a destination.",
    name: "Arthur Ashe"
  },
  {
    thought: "You become what you believe.",
    name: "Oprah Winfrey"
  },
  {
    thought: "Everything is hard before it is easy.",
    name: "Johann Wolfgang von Goethe"
  },
  {
    thought: "Patience, persistence and perspiration make an unbeatable combination.",
    name: "Napoleon Hill"
  },
  {
    thought: "If you can dream it, you can do it.",
    name: "Walt Disney"
  },
  {
    thought: "Nothing will work unless you do.",
    name: "Maya Angelou"
  },
  {
    thought: "Success usually comes to those who are too busy to be looking for it.",
    name: "Henry David Thoreau"
  },
  {
    thought: "Every day is a second chance.",
    name: "Unknown"
  },
  {
    thought: "The best view comes after the hardest climb.",
    name: "Unknown"
  },
  {
    thought: "Never give up on a dream just because of the time it will take.",
    name: "Earl Nightingale"
  },
  {
    thought: "You are stronger than you think.",
    name: "Unknown"
  },
  {
    thought: "Success begins with self-discipline.",
    name: "Unknown"
  },
  {
    thought: "Progress, not perfection.",
    name: "Unknown"
  },
  {
    thought: "Every moment is a fresh beginning.",
    name: "T.S. Eliot"
  },
  {
    thought: "Keep moving forward.",
    name: "Walt Disney"
  },
  {
    thought: "Nothing worth having comes easy.",
    name: "Theodore Roosevelt"
  },
  {
    thought: "The future depends on what you do today.",
    name: "Mahatma Gandhi"
  },
  {
    thought: "Believe in yourself and all that you are.",
    name: "Christian D. Larson"
  },
  {
    thought: "Be the change that you wish to see in the world.",
    name: "Mahatma Gandhi"
  },
  {
    thought: "Opportunities don't happen. You create them.",
    name: "Chris Grosser"
  },
  {
    thought: "Never let the fear of striking out keep you from playing the game.",
    name: "Babe Ruth"
  },
  {
    thought: "The only limit to our realization of tomorrow is our doubts of today.",
    name: "Franklin D. Roosevelt"
  },
  {
    thought: "What we think, we become.",
    name: "Buddha"
  },
  {
    thought: "If you want to shine like the sun, first burn like the sun.",
    name: "A.P.J. Abdul Kalam"
  },
  {
    thought: "Dream, dream, dream. Dreams transform into thoughts and thoughts result in action.",
    name: "A.P.J. Abdul Kalam"
  },
  {
    thought: "Excellence is a continuous process and not an accident.",
    name: "A.P.J. Abdul Kalam"
  },
  {
    thought: "You have to dream before your dreams can come true.",
    name: "A.P.J. Abdul Kalam"
  },
  {
    thought: "Learning gives creativity, creativity leads to thinking, thinking provides knowledge, knowledge makes you great.",
    name: "A.P.J. Abdul Kalam"
  },
  {
    thought: "Never bend your head. Hold it high. Look the world straight in the eye.",
    name: "Helen Keller"
  },
  {
    thought: "The only impossible journey is the one you never begin.",
    name: "Tony Robbins"
  }
];
let v=Math.floor(Math.random()*thought.length);
// console.log(val)

quotevalue.textContent=`${thought[v].thought}`
quoteauthor.textContent=`${thought[v].name}`
let count=29;
let sec=60
let t=null;
 let width=100
console.log(timer)
// image.style.backgroundColor="red"
theme.addEventListener("click",()=>{
    let isdark=main.classList.toggle("dark")
   if(isdark)
   {
    timerclass.classList.add("theme")
   }
   else{
     timerclass.classList.remove("theme")
   }
})
timer.addEventListener("click",()=>{
    timerclass.style.display="flex"
    bottom.style.display="none"

})
timerclose.addEventListener("click",()=>{
    timerclass.style.display="none"
    clearInterval(t);
    t=null;
    count = 29;
    sec = 60;
    timerem.textContent=`30:00`
    timerline.style.width=`100%`
    bottom.style.display="flex  "

})
resetbtn.addEventListener("click",()=>{
    // timerclass.style.display="none"
    clearInterval(t);
    t=null;
    count=29;
    sec=59
    width=100
    timerline.style.width=`${width}%`
    timerem.textContent=`30:00`
})
startbtn.addEventListener("click",()=>{
    if(t) return;
    
  

    t=setInterval(()=>{
        
        if(sec===0)
        {
            if(count===0)
            {
                clearInterval(t);
                t=null;
                timerem.textContent=`00:00`
                
                return;
            }
            width-=(100/30)
            timerline.style.width=`${width}%`
            
            count--;
            sec=59
        }
        sec--
        timerem.textContent=`${String(count).padStart(2,"0")}:${String(sec).padStart(2,"0")}`;
    },1000)
})
pausebtn.addEventListener("click",()=>{
    clearInterval(t)
    t=null;
    
})
todo.addEventListener("click",()=>{
    window.location.href = "./project3/index.html";
})
quotebtn.addEventListener("click",()=>{
    bottom.style.display="none";
    quote.style.display="flex"
})
quoteclose.addEventListener("click",()=>{
    bottom.style.display="flex";
    quote.style.display="none"
})
reloadquote.addEventListener("click",()=>{
    v=Math.floor(Math.random()*thought.length)
    quotevalue.textContent=`${thought[v].thought}`
    quoteauthor.textContent=`${thought[v].name}`
})
fetch(`https://api.weatherapi.com/v1/current.json?key=${api}&q=${city}`).then(res=>res.json()).then(data=>{
    console.log(data)
    temp.textContent=data.current.temp_c+"°C"
    wind.textContent=data.current.wind_kph+" km/h"
    condition.textContent=data.current.condition.text
    humidity.textContent=data.current.humidity+"%"
    image.src="https:"+data.current.condition.icon
  let city=new Date(data.location.localtime) 
    function updatetime()
    {
         
    console.log(city)
    city.setSeconds(city.getSeconds()+1)
    // let parts=localtime.split(" ")
    time.textContent=city.toLocaleTimeString()
    date.textContent=city.toLocaleDateString()
    }
    setInterval(updatetime,1000)
})
.catch(err=>{
    console.log(err)
})
// updatetime();