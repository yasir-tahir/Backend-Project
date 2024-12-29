import {Link} from "react-router-dom";


export default function Button(Props) {
  return (
    <div className="center mt-8 mb-8">

    <Link  to={'/products' } className="btn  ">
        {Props.button}
    </Link>

    </div>
  )
}
