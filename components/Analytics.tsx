import Script from "next/script";

/**
 * Optional, cookie-free analytics. Nothing loads unless the env vars are set at build time.
 *   GoatCounter: NEXT_PUBLIC_ANALYTICS_PROVIDER=goatcounter, NEXT_PUBLIC_ANALYTICS_ID=<your code>
 *   Plausible:   NEXT_PUBLIC_ANALYTICS_PROVIDER=plausible,   NEXT_PUBLIC_ANALYTICS_ID=<your domain>
 */
export function Analytics() {
  const provider = process.env.NEXT_PUBLIC_ANALYTICS_PROVIDER;
  const id = process.env.NEXT_PUBLIC_ANALYTICS_ID;
  if (!provider || !id) return null;

  if (provider === "goatcounter") {
    return (
      <Script
        data-goatcounter={`https://${id}.goatcounter.com/count`}
        src="https://gc.zgo.at/count.js"
        strategy="afterInteractive"
      />
    );
  }

  if (provider === "plausible") {
    return <Script data-domain={id} src="https://plausible.io/js/script.js" strategy="afterInteractive" />;
  }

  return null;
}
