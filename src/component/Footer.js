const style = {
  textDecoration: "none",
  color: "white",
  marginRight: "0.3rem",
};

const githubProfiles = [
  {
    name: "Bijoy",
    link: "https://github.com/Bijoy-007",
  },
  {
    name: "Prodip",
    link: "https://github.com/Prodip-Kumar-Paul",
  },
  {
    name: "Aditya",
    link: "https://github.com/adityabhagat007",
  },
  {
    name: "Aritra",
    link: "https://github.com/aritrasen12345",
  },
];

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div
      style={{
        backgroundColor: "#1B1B1B",
        padding: "2%",
        textAlign: "center",
        color: "white",
        width: "100%",
        paddingTop: "1rem",
        marginBottom: "-2rem",
      }}
    >
      <div>
        <a
          style={{
            ...style,
            marginRight: "1rem",
          }}
          href="/"
        >
          Home
        </a>
        <a
          style={{
            ...style,
            marginleft: "2rem",
          }}
          href="https://medieasy-hospital.netlify.app/"
        >
          Admin Portal
        </a>
      </div>

      <p>Copyright@{year}</p>
      <p>
        Made with 💖 by CodeStars ( 
        {githubProfiles.map((profile) => (
          <a style={style} href={profile.link}>
            {profile.name}
          </a>
        ))}
        )
      </p>
    </div>
  );
};

export default Footer;
