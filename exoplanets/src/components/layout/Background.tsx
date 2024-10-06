import Image from 'next/image';

export default function Background() {
  return (
    <div
      className="fixed w-dvw h-dvh -z-10"
    >
      <div
        className="relative w-[105%] h-[105%] animate-corners overflow-hidden"
      >
        <Image
          src="/img/background.png"
          alt="Fondo de estrellas"
          className="object-cover"
          fill
        />
      </div>
    </div>
  );
}
