import { Link } from "react-router-dom"
import { Button } from "../components/Button"

import  PageNotFoundImage  from "../assets/images/pagenotfound.png"
import { useTitle } from "../hooks/useTitle"
export const PageNotFound = () => {
  useTitle("Page Not Found");
  return (
    <main>
      <section className="flex flex-col justify-center px-2">
        <div className="flex flex-col items-center my-4">
          <p className="text-7xl text-gray-700 font-bold my-10 dark:text-white">404, Page not found!</p>
          <div className="max-w-lg">
            <img className="rounded" src={PageNotFoundImage} alt="Image not found"/>
          </div>
        </div>
        <div className="flex justify-center my-4">
         <Link to="/">
          <Button>Back To Home</Button>
         </Link>
        </div>

      </section>
    </main>
  )
}
