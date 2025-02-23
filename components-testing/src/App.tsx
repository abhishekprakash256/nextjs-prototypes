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
const description : string = "I am Abhishek Prakash (Abhi), a professional with over two years of industry experience and a master's degree in computer science from Florida State University. My expertise lies in various programming languages, with a strong emphasis on Python. I specialize in machine learning, automation, software development, and the design and deployment of cloud infrastructure as code. I am proficient in popular machine learning and deep learning frameworks such as PyTorch, TensorFlow, scikit-learn, and pandas. My comprehensive background in computer science, including an in-depth understanding of data structures and algorithms, underpins my professional journey. Throughout my career, I have been actively involved in a wide range of software projects, from developing small-scale tools to orchestrating large-scale production systems. My experience extends to website development, including front-end, back-end, and database integration, ensuring the robustness and efficiency of solutions through unit testing, data visualization, and data engineering. In addition to my core skills, I have specialized in Machine Learning Operations (MLOps), managing CI/CD pipelines and Docker images to ensure the seamless integration and deployment of machine learning models. I am adept at using automation tools like Ansible and Terraform, streamlining and automating MLOps processes to enhance the overall efficiency and reliability of machine learning workflows.";
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
 

      <Para description={ description }/>

      </CustomBody>

      <Footer></Footer>



      </>

  );
}

export default App;
