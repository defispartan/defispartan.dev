import "@/styles/globals.css";
import styles from "@/styles/Home.module.css";
import type { AppProps } from "next/app";
import Image from "next/image";

export default function App({ Component, pageProps }: AppProps) {
  const placeholderSvg =
    "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIHZpZXdCb3g9IjAgMCAxIDEiIGZpbGw9IiMxMjEyMTIiPjwvc3ZnPg==";

  return (
    <div className={styles.cover}>
      <div className={styles.background} />
      <Image
        src="/bg.webp"
        fill
        style={{ objectFit: "cover" }}
        alt="Background"
        priority
        placeholder="blur"
        blurDataURL={placeholderSvg}
      />
      <Component {...pageProps} />
    </div>
  );
}
