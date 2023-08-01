// import { useEffect, useState } from "react";
// import { getSearchManga } from "../services/hero.service";

// export const usePage = () => {
//     const [page, setPage] = useState(1);
    
//     useEffect(() => {
//         getSearchManga(page, (data) => {
//             setPage(data.pagination.current_page)
//         })
//     })

//     return page;
// }