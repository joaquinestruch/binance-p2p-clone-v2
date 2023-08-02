import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export function SkeletonsTable(){
    return(
        <Skeleton count={5}/>
    )
}