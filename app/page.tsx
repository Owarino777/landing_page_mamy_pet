import Image from "next/image";

export default function Home() {
  return (
    <main>
      <h1>Welcome to the Home Page</h1>
      <Image
        src="/example-image.jpg"
        alt="Example Image"
        width={600}
        height={400}
      />
    </main>
  );
}
