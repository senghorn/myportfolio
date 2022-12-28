import Directory from "../../components/directory/directory.components";

function Home() {
  const categories = [
    {
      id: 1,
      title: "TA Portal",
      imageUrl: "https://i.ibb.co/VDVtdhR/Homepage.png",
    },
    {
      id: 2,
      title: "Capstone Project",
      imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
    },
    {
      id: 3,
      title: "LifeStyle App",
      imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
    },
    {
      id: 4,
      title: "Placeholder",
      imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
    },
    {
      id: 5,
      title: "Placeholder",
      imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
    },
  ];

  return (
    <div>
      <Directory categories={categories}></Directory>
    </div>
  );
}


export default Home;