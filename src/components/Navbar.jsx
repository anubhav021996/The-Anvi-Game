import Typewriter from "typewriter-effect";

export const Navbar= () => {
  return (
    <Typewriter
      options={{
        strings: ["The Anvi's Game"],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}