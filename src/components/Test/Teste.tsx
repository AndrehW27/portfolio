import "./Teste.css";
import bg from "../../assets/figures.png";

export default function Teste() {

  return (
    <>
      <section
        className="relative bg-fixed h-[50dvh] w-dvw bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bg})` }}
      ></section>
    </>
  );
}
