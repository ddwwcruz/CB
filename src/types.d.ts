export interface RanchInfo {
    ranchName: string
    ranchOwner: string
    phone: string
    address: string
    city: string
    state: string
    zip: string
    premisesId: string
    taxExempt: string
    timber: string
    email: string
    website: string
    ranchType: number
}

interface Bull {
    name: string
    regNum: string
    dateOfBirth: string
    birthWeight: number
    breed: string
    color: string
    specialMarkings: string
    importExport: string
    earTag: string
    earTagLoc: string
    brandNum: string
    brandNumLoc: string
    tattoo: string
    tattooLoc: string
    electronicId: string
    electronicIdLoc: string
    otherId: string
    otherIdLoc: string
    metalId: string
    metalIdLoc: string
    genetic: string
    bloodline: string
    siblingCode: string
    cloned: string
    showAnimal: boolean
    aiBull: boolean
    reference: boolean
    hornStatus: string
    origin: string
    imagePath: string
    pasture: string
    pen: string
    currBullOwner: string
    bullSire: string
    bullDame: string
    comments: string
    purchaseFrom: string
    purchaseDate: string
    price: number
    breeder: string
}
