import { Router } from "express";
import { requestToEndPointPokemon } from "../controller/requestToEndPointPokemon.controller";
import { requestToEndPointPokemonColor } from "../controller/requestToEndPointPokemonColor.controller";
import { requestToEndPointPokemonForm } from "../controller/requestToEndPointPokemonForm.controller";
import { requestToEndPointPokemonHabitat } from "../controller/requestToEndPointPokemonHabitat.controller";
import { requestToEndPointPokemonShape } from "../controller/requestToEndPointPokemonShape.controller";
import { requestToEndPointPokemonSpecies } from "../controller/requestToEndPointPokemonSpecies.controller";

export const routeEndPointsPokemon = Router()

routeEndPointsPokemon.get(requestToEndPointPokemon,'/pokemon')
routeEndPointsPokemon.get(requestToEndPointPokemonColor,'/pokemonColor')
routeEndPointsPokemon.get(requestToEndPointPokemonForm,'/pokemonForm')
routeEndPointsPokemon.get(requestToEndPointPokemonHabitat,'/pokemonHabitat')
routeEndPointsPokemon.get(requestToEndPointPokemonShape,'/pokemonShape')
routeEndPointsPokemon.get(requestToEndPointPokemonSpecies,'/pokemonSpecies')