import { OwnerModel } from './../Models/OwnerModel';
import { atom } from "recoil";

const unassigned = new OwnerModel(-1, 'none', 'n/a')
const steve = new OwnerModel(1, 'Steve', 'Butkis')
const doug = new OwnerModel(2, 'Doug', 'Astro')
const dave = new OwnerModel(3, 'Dave', 'Butkis')

const defaultOwnerState = [unassigned, steve, doug, dave];

export const ownerState = atom({
    key: "ownerState",
    default: defaultOwnerState
  })