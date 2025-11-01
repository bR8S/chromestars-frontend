import * as raceApi from '../../lib/api/race'
import { Race } from '../../lib/types/race' 
import RaceList from '../components/RaceList'

export default async function (){
    const data = await raceApi.getRaces()
    const races : Race[] = data

    return (
        <RaceList races={races}/>
    )
}