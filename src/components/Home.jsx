import '../styles/home.css'

function Home() {

  return (
    <div className="home" id='headerId'>
        <div className='header'>
          
        </div>
        <div className='content'>
        <hr></hr>
          <div className='contentgroup'>
            <div>
              <h1>What is EGGZUKI?</h1>
              <p>EGGZUKI is a cute warrior who got lost and now looking for his master. On his journey, he met several friends who are willing to help him to gather information on his master's whereabouts. Would you like to help him? Visit the Lore to know more.</p>
              <hr></hr>
              <p>Eggzuki is a project to inspire writers and editors. From beginner to professional level of writing skills, all are welcome. Showcase your talent through writing and collaborating with other writers to complete the story. Writers will determine the flow of the story.</p>
              <hr></hr>
              <p>The initial number of EGGZ is 5,555. There are also 1:1 EGGZ that will be released on chosen whitelisted.
                <br></br>
                <br></br>
                There will be a variety of common to rare items that you will be able to use to dress up your EGGZ. There will be items that are called <span className='purplespan'>ARCANES</span> which will only be limited. These items are considered as legendary and unique items.
                <br></br>
                <br></br>
                Also, a token called <span className='redspan'>EGG</span> will arise. So watch this space.
              </p>
            </div>
            <div className='contentImage'>
              <img src='https://eggzuki.weebly.com/uploads/1/4/3/9/143985446/ezgif-com-video-to-gif_orig.gif' alt='eggzukigif'></img>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Home
