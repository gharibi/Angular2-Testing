export class Pokemon {
  constructor(
    public name: string,
    public url: string,
    public photoUrl_back_default: string,
    public photoUrl_back_shiny: string,
    public photoUrl_front_default: string,
    public photoUrl_front_shiny: string,
    public weight: number
      ) { }
}
