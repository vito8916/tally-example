'use client'

import Script from "next/script";

const Embed = () => {
    return (
        <>
            <iframe data-tally-src="https://tally.so/embed/waKEY9?dynamicHeight=1" loading="lazy" width="100%"
                    height="848" frameBorder="0"  title="Event Testing Form"></iframe>


            <Script
                id="tally-js"
                src="https://tally.so/widgets/embed.js"
                onLoad={() => {
                    Tally.loadEmbeds();
                }}
            />
        </>
    );
};

export default Embed;