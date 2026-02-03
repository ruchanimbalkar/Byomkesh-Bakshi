// pages/Home.jsx
export default function Home() {
  return (
    <main>
      <h2>Welcome to the Home Page of Byomkesh Bakshi</h2>
      <div className="home-page-div">
        <p>
          Byomkesh Bakshi is a famous TV show aired on DoorDarshan from the year
          1993 to 1997. It starred actors Rajit Kapur, K.K. Raina in main
          rolesand Sukanya Kulkarni Mone, Kartik Dutta in supporting roles.
          Rajit Kapoor plays the title role of ficional detective "Byomkesh
          Bakshi".
        </p>

        <p>
          This show was famous when it aired. It is still popular due to its
          loyal fan base and great direction and storyline.
        </p>

        <img
          src="https://upload.wikimedia.org/wikipedia/en/0/05/Byomkesh_Bakshi_Season_1.jpeg"
          alt="Byomkesh Bakshi Serial Poster"
        />
        <p className="image-p">
          Image By{" "}
          <a href="//en.wikipedia.org/wiki/DD_National" title="DD National">
            DD National
          </a>
          ,{" "}
          <a
            href="//en.wikipedia.org/wiki/File:Byomkesh_Bakshi_Season_1.jpeg"
            title="Fair use of copyrighted material in the context of Byomkesh Bakshi (TV series)"
          >
            Fair use
          </a>
          ,{" "}
          <a href="https://en.wikipedia.org/w/index.php?curid=66129435">Link</a>
        </p>
      </div>
    </main>
  );
}
