'use client'
import React from 'react';

import Script from "next/script";

const MimicPage = () => {

    return (
        <div className="min-h-screen bg-gradient-to-b from-[#FFFF00]/10 to-[#00FFFF]/15 p-6 flex items-center">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                {/* Left Column */}
                <div className="space-y-6">
                    <h1 className="text-4xl md:text-5xl font-medium leading-tight">
                        <span className="text-gray-800">Registrate para asistir,</span>{" "}
                        <span className="gradient-text">al FAFSA workshop &#34;Tu camino hacia la ayuda financiera&#34;</span>
                    </h1>
                    <p className="text-gray-600">Para todas las familias y estudiantes de último año.</p>
                    <div className="flex gap-4 flex-wrap">
                        <div className="bg-white/30 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-full px-4 py-2">
                            5:30 / 7:30pm
                        </div>
                        <div className="bg-white/20 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-full px-4 py-2">
                            25 ENE. 2025
                        </div>
                    </div>
                </div>

                {/* Right Column */}
                <div className="min-h-[620px] bg-white/30 rounded-3xl p-8 space-y-10 shadow-sm backdrop-blur-sm border border-gray-200 dark:border-gray-700">
                    <div className="text-left">
                        <h2 className="text-2xl font-bold">The Event</h2>
                    </div>
                    <div className="">
                        <iframe data-tally-src="https://tally.so/embed/waKEY9?&hideTitle=1&dynamicHeight=1&transparentBackground=1" loading="lazy"
                                width="100%"
                                height="600" frameBorder="0" title="Event Testing Form"></iframe>
                        <Script
                            id="tally-js"
                            src="https://tally.so/widgets/embed.js"
                            onLoad={() => {
                                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                                // @ts-expect-error
                                Tally.loadEmbeds();
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MimicPage;