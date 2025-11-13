import "./Teste.css";
import bg from "../../assets/transition2.png";
// import video from "../../assets/galaxy-video.mp4";

export default function Teste() {

  return (
    <>
      <section
        className="relative bg-fixed h-[50dvh] w-dvw bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bg})` }}
      ></section>
      {/* <section className="video-wrapper relative w-dvw h-[50dvh] overflow-hidden">
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
