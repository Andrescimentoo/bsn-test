
export const requestToEndPointPokemonSpecies = async (req,res) => {
    try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon-species') 
        const data =  await response.json()
        
        res.status(200).send(data)
    
    } catch (error) {
        res.staus(500).send({
            error,
            message: 'error to fetch'
        })
    }
}