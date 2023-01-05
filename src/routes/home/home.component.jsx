import Directory from "../../components/directory/directory.components";

function Home() {
  const categories = [
    {
      id: "aboutme",
      title: "About Me",
      imageUrl: "https://i.ibb.co/WFN8xhT/y.jpg",
    },
    {
      id: "taportal",
      title: "TA Portal",
      imageUrl: "https://i.ibb.co/VDVtdhR/Homepage.png",
    },
    {
      id: "capstone",
      title: "Capstone Project",
      imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
    },
    {
      id: "lifestyle",
      title: "LifeStyle App",
      imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
    },
  ];

  return (
    <div>
      <Directory categories={categories}></Directory>
    </div>
  );
}


export default Home;