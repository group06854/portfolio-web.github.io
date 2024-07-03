<script lang="ts">
    import Heade from './Header.svelte'
    import Contact from './Contact.svelte';
    
  </script>
<main>
    <Heade />
    <div class="container">
      <div class="About_me">
          <h3 id ="head_st">About me</h3>
          <p id = "information">As a first-year student at Innopolis University, I came from Glazov, Udmurtia, after studying at the Physics and Mathematics Lyceum (FML), where I laid a solid foundation in mathematics and computer science. My lifelong love of strategy games has ignited my passion for programming and software development. Having mastered Python, C, C++, Java, HTML and CSS, I honed these skills through projects in FML, applying theory in practice and developing a deep understanding of software development. In addition to academic work, I have worked on personal projects, improving my programming, problem solving and creativity skills. At Innopolis, I strive to expand my technical knowledge, immerse myself in new technologies and contribute to cutting-edge projects, using my passion for technology and strategic mindset to influence computer science and more.</p>
              <img id ="portfolio" alt ="" src = "../img/portfolio.png">
      </div>
      <div class="Portfolio-information">
          <h3 id = "head">Projects</h3>
          <ul>
              <div class="window">
              <li><a href="https://github.com/group06854/projectforlab/blob/main/Mysterious%20Legends"><img alt ="" src = "../img/Hero.jpg"></a>
              <p><a id = "github" href = "https://github.com/group06854/projectforlab/blob/main/Mysterious%20Legends">Mysterious Legends</a></p>
              <p>In the exciting world of "Mysterious Legends", where magic and technology are closely intertwined, open up for a new adventure In this epic RPG, where every step can change the course of history, you take the role of a hero ready to explore mysterious lands...</p>
              </li>
              </div>
              <div class="window">
              <li><a id = "github" href ="https://github.com/group06854/projectforlab/blob/main/Insect%20Battle"><img alt ="" src = "../img/insects.jpg"></a>
              <p><a id = "github" href ="https://github.com/group06854/projectforlab/blob/main/Insect%20Battle">Insect Battle</a></p>
              <p>In a world where strategy and tactics become key qualities, open up for Insect Battle, an exciting game in the genre of strategic chess board combat. Here, every move can decide the outcome of the battle, and only the most skillful strategist will be able to dominate.</p>
              </li>
              </div>
          </ul>
      </div>
  </div> 
  <Contact />
  </main>
  <style>
   @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
*{
    margin: 0;
    padding: 0;
}
#head_st{
    color: white;
    text-align: center;
    font-weight: 800;
    margin-bottom: 40px;
}
#head{
    color: white;
    text-align: center;
    font-weight: 800;
    margin-bottom: 40px;
}
a{
    text-decoration: none;
    color:aliceblue;
}
img{
    max-width: 100%;
}
.container{
    margin-top: 1px;
    width: 98%;
    margin-left: 0.5%;
    margin-right: 0.5%;
}
#information{
    width: 50%;
    margin-left: 5%;
    margin-top: 40px;
    height: 400px;
    text-align: center;
}
#portfolio{
    position: absolute;
    top: 135px;
    right: 5%;
}
.window{
    width: 45%;
    display: inline-block;
    padding: 8px;
    border-width: 1px;
  border-color: grey;
  border-style: solid;
    border-radius: 5%;
    margin: 0 auto;
    margin-bottom: 40px;
}
.window img{
    border-radius: 4%;
}
#github{
    text-align: right;
    font-weight: 800;
}
.Portfolio-information ul{
    list-style: none;
    display: flex;
    justify-content: space-between;
}
  </style>