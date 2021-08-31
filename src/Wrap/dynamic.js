function Dynamic() {
  const title = "Welcome to the new blog";
  const likes = 50;
  const web = "https://hashtagdevs.com";

  return (
    <div className="App">
      <div className="content"> */}

      {/* Dynamic Value and templates */}
        <h1>{ title }</h1>
        <p>Liked { likes } times</p>
        <p>{10} { "Hello there" } { [1,2,3,4] }</p>
        <p>{ Math.round(Math.random() * 10) }</p>
        <a href={ web }>HashtagDevs</a>
        
       </div>
    </div>
  );
}

export default Dynamic;
