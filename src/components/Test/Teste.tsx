import "./Teste.css";
import bg from "../../assets/parallax.jpeg";
// import video from "../../assets/waves-video2.mp4";

export default function Teste() {

  return (
    <>
      <section
        className="relative bg-fixed h-[50dvh] w-dvw bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bg})` }}
      ></section>
      {/* <section className="video-wrapper relative bg-fixed w-dvw h-[50dvh] overflow-hidden">
        <video
          key={video}
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={video}
          autoPlay
          muted
          loop
          playsInline
        />
      </section> */}
    </>
  );
}
