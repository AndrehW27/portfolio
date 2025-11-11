import "./Test.css";
import bg from "../../assets/about-me-4.png";

export default function Test() {

  return (
    <>
      <section
        className="relative bg-fixed h-dvh w-dvw bg-cover bg-center"
        style={{ backgroundImage: `url(${bg})` }}
      ></section>
    </>
  );
}
