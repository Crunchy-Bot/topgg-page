import React from "react";

import { Example1, Example2 } from "../components/Examples";
import {Link} from "react-router-dom";

const iconArea = process.env.PUBLIC_URL;

function Home() {
  return (
    <div className="Home px-4 md:px-0">
        <div className="flex justify-around flex-col md:flex-row pt-8 lg:pt-4">
            <Example1/>
            <div className="w-full md:w-2/5 flex items-center justify-center loader-slide-from-right-1 pt-8 xl:pt-0">
                <div>
                    <h1 className="text-2xl md:text-5xl font-bold text-white text-center py-0 md:py-4">
                        Details on<br/>
                        Anime, Manga and Webtoons
                    </h1>
                    <p className="text-lg md:text-2xl text-white text-center py-4">
                        We have support for
                        the entire Crunchyroll anime collection<br/>
                        as well as manga and more.<br/>
                        using the
                        <span className="text-crunchy font-semibold pl-1">anime</span>,
                        <span className="text-crunchy font-semibold px-1">manga</span>
                        and
                        <span className="text-crunchy font-semibold px-1">webtoon</span>
                        commands.
                    </p>
                </div>
            </div>
        </div>
        <div className="flex justify-around flex-col md:flex-row-reverse pt-8 lg:pt-4">
            <Example2/>
            <div className="w-full md:w-2/5 flex items-center justify-center loader-slide-from-left-1/2 pt-8 xl:pt-0">
                <div>
                    <h1 className="text-2xl md:text-5xl font-bold text-white text-center py-0 md:py-4">
                        Enjoy our legendary<br/>
                        live feeds
                    </h1>
                    <p className="text-lg md:text-2xl text-white text-center py-4">
                        Enjoy live
                        <span className="text-crunchy font-semibold px-1">release</span>
                        and
                        <span className="text-crunchy font-semibold px-1">news</span>
                        from Crunchyroll in your community with
                        Crunchy's webhooks .
                    </p>
                </div>
            </div>
        </div>
        <div className="flex justify-center flex-col md:flex-row pt-8 lg:pt-4">
            <img className="loader-slide-from-left-2" style={{height: 24 + 'rem'}} src={ `${iconArea}/emojis/hime-happy.png` } alt=""/>
            <div className="w-full md:w-2/5 flex items-center justify-center loader-slide-from-right-2 pt-8 xl:pt-0">
                <div>
                    <h1 className="text-2xl md:text-5xl font-bold text-white text-center py-0 md:py-4">
                        Leaving us review?
                    </h1>
                    <p className="text-lg md:text-2xl text-white text-center py-4">
                        Check out our
                        <Link className="text-crunchy font-semibold italic px-2" to="/faq">FAQ</Link>
                        and
                        <a className="text-crunchy font-semibold italic px-2" href="https://discord.com/invite/KvvUcKP">Support Server</a>
                        before leaving a review to see if we haven't already answered
                        your questions or can fix you problems!
                        Leaving us a great review? Thank you!
                    </p>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Home;
