import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error=useRouteError()
    const errorPage=()=>{
        if(error.status===404){
            return '404 Not Found Page'
        }
    }
    
    return (
        <div className="flex flex-col  items-center ">
         <h1 className="mt-28 text-3xl font-bold">{errorPage()}</h1>
        </div>
    );
};

export default ErrorPage;