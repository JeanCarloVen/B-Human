import Presentation from "./Presentation"
import Explanation from "./Explanation"
import Featured from "./Featured"
import Cuote from "./Cuote"
import QuickTiktok from "./QuickTiktok"
import Footer from "./Footer"

const Index = () => {

    return (
    <>
      <div className="bg-custom-gray">
        <Presentation/>  
      </div>
      <Explanation/>
      <div className="bg-custom-darkestblueA">
        <Featured/>
      </div>
      <Cuote/>
      <QuickTiktok/>
      <div className="bg-white shadow dark:bg-custom-darkestblueB w-full  mx-auto p-4 md:py-8">
        <Footer/> 
      </div>
      
    </>
  )
}

export default Index