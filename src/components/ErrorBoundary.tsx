import   { useState, useEffect } from 'react';

// function ErrorBoundary({ children } : any) {
//   const [hasError, setHasError] = useState(false);

//   useEffect(() => {
//     function onError(error : any, errorInfo : any)  : void{
//       setHasError(true);
//       console.error(error, errorInfo);
//     }

//     window.addEventListener('error', onError);
//     return () => window.removeEventListener('error', onError);
//   }, []);

//   if (hasError) {
//     // render a UI that indicates an error has occurred and the user should refresh the page
//     return (
//         <div className="flex flex-col items-center justify-center h-96">
//             <h1 className="text-2xl font-bold">Something went wrong</h1>
//             <p className="text-center">Make Sure all Input fields are filled</p>
//             <button className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-4" onClick={() => window.location.reload()}>Refresh</button>
//         </div>
//     );
//   }

//   return children;
// }


// // export ErrorBoundary;
// export default ErrorBoundary;