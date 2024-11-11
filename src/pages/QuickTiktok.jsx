import { TikTokEmbed } from "react-social-media-embed";

const QuickTiktok = () => {
  return (
    <div className="mx-auto text-center content-center">
      <div className="flex flex-wrap flex-row justify-center mb-10">
          <div style={{ display: "flex", justifyContent: "center" }}>
            <TikTokEmbed
              url="https://www.tiktok.com/@erickguzman1782/video/7427544328060423430"
              width={325}
            />
          </div>
        <div className="flex flex-wrap flex-col justify-center mb-10 md:mb-5 lg:mb-20">
          <div className="font-Montserrat text-2xl text-sky-500 p-2 ml-10 m-5">
            <h1>Adopta - Adapta - Comparte </h1>
          </div>
          <button className="self-center bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white  py-2 px-4 w-32 border border-blue-500 hover:border-transparent rounded">
            Try
          </button>
        </div>
      </div>
      
    </div>
  );
};

export default QuickTiktok;

{
  /* <blockquote class="tiktok-embed" cite="https://www.tiktok.com/@erickguzman1782/video/7427544328060423430" data-video-id="7427544328060423430" style="max-width: 605px;min-width: 325px;" > <section> <a target="_blank" title="@erickguzman1782" href="https://www.tiktok.com/@erickguzman1782?refer=embed">@erickguzman1782</a> <p>glow</p> <a target="_blank" title="♬ sonido original  - Erick Guzman17" href="https://www.tiktok.com/music/sonido-original-Erick-Guzman17-7427544387566013189?refer=embed">♬ sonido original  - Erick Guzman17</a> </section> </blockquote> <script async src="https://www.tiktok.com/embed.js"></script> */
}
