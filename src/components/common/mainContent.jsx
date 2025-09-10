import SignIn from "./signIn";

export default function MainContent({child}) {
  return (
    <div
      className="relative bg-cover bg-center backdrop-blur-lg"
      style={{ backgroundImage: "url('/background-image.jpg')", height: "100vh" }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 "></div>

      <div className="relative z-10">
        {child}
        <SignIn></SignIn>

      </div>
    </div>
  );
}
