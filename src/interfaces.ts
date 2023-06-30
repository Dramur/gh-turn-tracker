export enum ElementalInfusion {
  INERT,
  WANING,
  STRONG
}

export interface Element {
  name: string,
  icon: string,
  infusion: ElementalInfusion
}
