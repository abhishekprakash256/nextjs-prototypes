import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import './App.css';  // check later
import CustomBody from './components/CustomBody';
import HeadingBar from './components/HeadingBar';
import CardBundle from './components/CardBundle';
import More from './components/More';
import MarkDown from './components/MarkDown';
import Footer from './components/Footer';
import Para from './components/Para';
import SocialMediaLinks from './components/SocialMediaLinks';





const title : string = "Tech";
const more_link : string = "www.google.com";
const card_para : string  = "System design a multidisciplinary field that encompasses various aspects of designing the destributed ";
const img_src : string = "cards.jpg"; // public folder has all the images can go 
const img_src1 : string= "federated-learning-flow.png"; 
const card_url : string = "https://www.google.com";
const card_title : string =  "System Design";
const mark_down_data : string  = " ## Heading\n The classic example that we can understand dynamic programming with is the Fibonacci series, which can be solved both recursively and using dynamic programming.\n ### Recursive Approach \n ```python \ndef fibbo(nums):\n      if nums <= 1:\n        return 1\n      return fibbo(n-1) + fibbo(n-2)\n ```\n\n### Dynamic Programming with Memoization\n ```python\ndef fibonacci(n, memo={}):\n       if n in memo:\n         return memo[n]\n       if n <= 1:\n         return n\n       else:\n          memo[n] = fibonacci(n-1, memo) + fibonacci(n-2, memo)\n       return memo[n]\n ```\n\n### Dynamic Programming with Tabulation\n ```python\ndef fibonacci(n):\n        if n <= 1:\n            return n\n   \n        fib_table = [0] * (n + 1)\n        fib_table[1] = 1\n\n        for i in range(2, n + 1):\n           fib_table[i] = fib_table[i - 1] + fib_table[i - 2]\n\n        return fib_table[n]\n"
const description : string = "Inspired by the system design principles of existing URL shortening services, this project was undertaken to create a custom solution tailored to specific needs. The choice of Redis as the database and the overall system architecture significantly improved the efficiency and reliability of URL shortening, making the service dependable for both personal and broader use cases. ";
const social_media_links : string[] = ["https://www.linkedin.com", "https://www.twitter.com", "https://www.facebook.com", "https://www.instagram.com"];



function App() {

  return (
    <>

      <NavBar></NavBar> 

      <CustomBody>

      <HeadingBar title={title}/> 
      <CardBundle></CardBundle>

      <More more_link={ more_link}/>
     <HeadingBar title={title}/>
     <CardBundle></CardBundle>
     <HeadingBar title={"MarkDown Block"}/> 
      <MarkDown mark_down_data={mark_down_data}/>
      <More more_link={ more_link}/>
      <SocialMediaLinks SocialMediaLinks={social_media_links}/>

      <Para description={ description }/>

      </CustomBody>

      <Footer></Footer>



      </>

  );
}

export default App;
